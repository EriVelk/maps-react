import React, { Component } from "react";
import PointService from "../services/PointService";

class ListPointComponent extends Component{


    constructor(props){
        super(props)

        this.state = {
            points: []
        }

        this.addPoint = this.addPoint.bind(this);
    }

    viewPoint(id){
        this.props.history.push(`/points/${id}`);
    }

    componentDidMount(){
        PointService.getPoints().then((res)=>{
            this.setState({points: res.data})
        })
    }

    addPoint(){
        this.props.history.push(`/create/_add`);
    }

    render(){
        return(
            <div>
                <h2 className="text-center">Points List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addPoint}>Agregar Punto</button>
                </div>
                <br></br>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                            this.state.points.map( (point, i) => 
                    <div key={i} className="col">
                        <div className="card">
                            <div className="card-header">
                            { point.nombre}
                            </div>
                            <div className="card-body">
                                Direccion: {point.direccion}
                            <hr></hr>
                                Rating: {point.rating}
                            </div>
                            <div className="card-footer">
                            <div className="btn-group">
                                        <button onClick={ () => this.editEmployee(point._id)} className="btn btn-secondary">Update </button>
                                        <button onClick={ () => this.deleteEmployee(point._id)} className="btn btn-danger">Delete </button>
                                        <button onClick={ () => this.viewPoint(point._id)} className="btn btn-success">View </button>
                                        </div>
                            </div>
                        </div>
                    </div>
                            )}
                </div>
            </div>
        )
    }
}

export default ListPointComponent
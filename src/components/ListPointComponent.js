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

    deletePoint(id){
        PointService.deletePoint(id).then(res => {
            this.setState({points: this.state.points.filter(point => point._id !== id)})
        })
    }

    editPoint(id){
        this.props.history.push(`/create/${id}`);
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
            <div className="mt-2">
                <h2 className="text-center">Lista de Puntos</h2>
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
                            <hr></hr>
                                Status: {point.status}
                            </div>
                            <div className="card-footer">
                            <div className="btn-group">
                                        <button onClick={ () => this.editPoint(point._id)} className="btn btn-secondary">Actualizar </button>
                                        <button onClick={ () => this.deletePoint(point._id)} className="btn btn-danger">Borrar </button>
                                        <button onClick={ () => this.viewPoint(point._id)} className="btn btn-success">Detalles </button>
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
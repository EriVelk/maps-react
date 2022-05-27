import React, { Component } from "react";
import PointService from "../services/PointService";

class ViewPointComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            point: {}
        }
    }

    componentDidMount() {
        PointService.getPointById(this.state.id).then(res => {
            this.setState({ point: res.data })
        })
    }

    editStatus(id) {
        PointService.statusPointbyId(id).then((res) => {
            console.log(res.status);
        })

        window.location.reload()
    }

    render() {
        return (
            <div className="card mt-4">
                <div className="card-header">
                    <div>{this.state.point.nombre}</div>
                </div>
                <div className="card-body">
                    <label>Direccion: </label>
                    <div>{this.state.point.direccion}</div>
                    <hr></hr>
                    <label>Rating: </label>
                    <div>{this.state.point.rating}</div>
                    <hr></hr>
                    <div className="row">
                        <div className="col">
                            <label>Latitud: </label>
                            <div>{this.state.point.latitud}</div>
                        </div>
                        <div className="col">
                            <label>Longitud: </label>
                            <div>{this.state.point.longitud}</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col">
                            {
                                (this.state.point.status) ? (<div class="d-grid gap-2">
                                    <button className="btn btn-success text-wrap" onClick={() => {this.editStatus(this.state.point._id)}}>Activo</button>
                                </div>)
                                    : (<div class="d-grid gap-2">
                                    <button className="btn btn-danger text-wrap" onClick={() => {this.editStatus(this.state.point._id)}}>Inactivo</button>
                                    </div>)
                            }
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div>{this.state.point.fecha}</div>
                </div>
            </div>
        )
    }
}

export default ViewPointComponent;
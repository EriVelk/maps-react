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
                    <label>Alcaldia: </label>
                    <div>{this.state.point.alcaldia}</div>
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
                    <hr />
                    <div className="row">
                        <div className="col">
                        <label>Click en el boton para cambiar el estado</label>
                            {
                                (this.state.point.status) ? (<div className="d-grid gap-2">
                                    <button className="btn btn-success text-wrap" onClick={() => { this.editStatus(this.state.point._id) }}>Activo</button>
                                </div>)
                                    : (<div className="d-grid gap-2">
                                        <button className="btn btn-danger text-wrap" onClick={() => { this.editStatus(this.state.point._id) }}>Inactivo</button>
                                    </div>)
                            }
                        </div>
                    </div>
                    <hr></hr>
                    <div>{this.state.point.fecha}</div>
                </div>
                <div className="card-footer">
                    <h2>Reportes</h2>
                    {this.state.point.reportes?.map((report, i) =>
                        <div className="card mb-2 bg-secondary text-white">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-2">
                                        <h4>{i + 1}</h4>
                                    </div>
                                    <div className="col-10">
                                        <h4>{report.type}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <p>Creado: {report.creado}</p>
                                </div>
                                <div className="row">
                                    <p>Descripcion: {report.descripcion}</p>
                                </div>
                                <div className="row">
                                    <p>Calificacion: {report.rating}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default ViewPointComponent;
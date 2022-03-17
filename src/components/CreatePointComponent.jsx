import React, {Component} from "react";
import PointService from "../services/PointService";

class CreatePointComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            id:this.props.match.params.id,
            nombre: '',
            direccion: '',
            imagen: '',
            latitud: '',
            longitud: '',
            rating: ''
        }

        this.changeNombreHandler = this.changeNombreHandler.bind(this);
        this.changeDireccionHandler = this.changeDireccionHandler.bind(this);
        this.changeImagenHandler = this.changeImagenHandler.bind(this);
        this.changeLatitudHandler = this.changeLatitudHandler.bind(this);
        this.changeLongitudHandler = this.changeLongitudHandler.bind(this);
        this.changeRatingHandler = this.changeRatingHandler.bind(this);
    }

    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            PointService.getPointById(this.state.id).then((res)=>{
                let point = res.data;
                this.setState({
                    nombre:point.nombre,
                    direccion:point.direccion,
                    imagen:point.imagen,
                    latitud: point.latitud,
                    longitud:point.longitud,
                    rating:point.rating
                })
            })
        }
    }

    saveOrUpdatePoint = (e) => {
        e.preventDefault();
        let point = {nombre: this.state.nombre, direccion: this.state.direccion, imagen: this.state.imagen, latitud: this.state.latitud, longitud: this.state.longitud, rating: this.state.rating};
        console.log('point => ' + JSON.stringify(point));

        if(this.state.id === '_add'){
            PointService.createPoint(point).then((res) =>{
                this.props.history.push('/');
            });
            console.log("Agrega");
        }else{
            console.log("Actualiza");
        }
    }

    changeNombreHandler = (event) =>{
        this.setState({nombre: event.target.value});
    }

    changeDireccionHandler = (event) =>{
        this.setState({direccion: event.target.value});
    }

    changeImagenHandler = (event) =>{
        this.setState({imagen: event.target.value});
    }

    changeLatitudHandler = (event) =>{
        this.setState({latitud: event.target.value});
    }

    changeLongitudHandler = (event) =>{
        this.setState({longitud: event.target.value});
    }

    changeRatingHandler = (event) =>{
        this.setState({rating: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Agregar Punto</h3>
        }else{
            return <h3 className="text-center">Actualizar Punto</h3> 
        }
    }

    render(){
        return(
        <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Nombre: </label>
                                        <input placeholder="nombre" name="nombre" className="form-control" 
                                            value={this.state.nombre} onChange={this.changeNombreHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Direccion: </label>
                                        <input placeholder="direccion" name="direccion" className="form-control" 
                                            value={this.state.direccion} onChange={this.changeDireccionHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Imagen: </label>
                                        <input placeholder="imagen" name="imagen" className="form-control" 
                                            value={this.state.imagen} onChange={this.changeImagenHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Latitud: </label>
                                        <input placeholder="latitud" name="latitud" className="form-control" 
                                            value={this.state.latitud} onChange={this.changeLatitudHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Longitud: </label>
                                        <input placeholder="Longitud" name="longitud" className="form-control" 
                                            value={this.state.longitud} onChange={this.changeLongitudHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Rating: </label>
                                        <input placeholder="Rating" name="rating" className="form-control" 
                                            value={this.state.rating} onChange={this.changeRatingHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdatePoint}>Guardar</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} >Cancelar</button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div> 
        )
    }
    
}

export default CreatePointComponent
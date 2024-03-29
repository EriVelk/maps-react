import axios from "axios";

const POINTS_API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

class PointService{


    getPoints(){
        return axios.get(POINTS_API_BASE_URL + "api/maps/points");
    }

    createPoint(point){
        return axios.post(POINTS_API_BASE_URL + "api/maps/", point);
    }

    getPointById(pointId){
        return axios.get(POINTS_API_BASE_URL + 'api/maps/points/' + pointId);
    }

    deletePoint(pointId){
        return axios.delete(POINTS_API_BASE_URL + 'api/maps/points/delete/' + 
         pointId)
    }

    statusPointbyId(pointId){
        return axios.get(POINTS_API_BASE_URL + 'api/maps/points/' + pointId + '/status');
    }

}

export default new PointService()
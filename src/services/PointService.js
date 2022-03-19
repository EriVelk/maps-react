import axios from "axios";

const POINTS_API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

class PointService{


    getPoints(){
        return axios.get(POINTS_API_BASE_URL + "points");
    }

    createPoint(point){
        return axios.post(POINTS_API_BASE_URL, point);
    }

    getPointById(pointId){
        return axios.get(POINTS_API_BASE_URL + 'points/' + pointId);
    }

    deletePoint(pointId){
        return axios.delete(POINTS_API_BASE_URL + 'points/delete/' + 
         pointId)
    }

}

export default new PointService()
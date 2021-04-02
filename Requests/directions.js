import axios from "axios";
import { baseUrl, config } from "./config";

export const getDirectionById = async (token, id) => {
  
    const { data } = await axios.get(`${baseUrl}${id}/Directions`, config(token));
    return data;
};



// create new

export const createDirectionReq = async  (id, value) =>{

    return await axios.post(`${baseUrl}${id}/directions`, value, config());
}
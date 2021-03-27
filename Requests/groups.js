import axios from "axios";
import { baseUrl, config } from "./config";


export const fetchGroupsByDirectionId = async ( id) => {
    const { data } = await axios.get(`${baseUrl}Directions/${id}/groups`, config());
  
    return data;
 };
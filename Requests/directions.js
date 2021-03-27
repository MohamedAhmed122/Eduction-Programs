import axios from "axios";
import { baseUrl, config } from "./config";

export const getDirectionById = async (token, id) => {
  
    const { data } = await axios.get(`${baseUrl}Directions/${id}`, config(token));
    return data;
};

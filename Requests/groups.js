import axios from "axios";
import { baseUrl, config } from "./config";


export const fetchGroupsByDirectionId = async (id) => {
    const { data } = await axios.get(`${baseUrl}${id}/Groups`, config());
  
    return data;
 };
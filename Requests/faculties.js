import axios from "axios";
import { baseUrl, config } from "./config";

export const fetchFaculties = async (token) => {
  const { data } = await axios.get(`${baseUrl}Faculties`, config(token));

  return data;
};


export const fetchFacultyById = async (token, id) => {
    const { data } = await axios.get(`${baseUrl}Faculties/${id}`, config(token));
  
    return data;
 };
  

 export const fetchDirectionFromFaculty = async (token, id) => {
  const { data } = await axios.get(`${baseUrl}Faculties/${id}/directions`, config(token));

  return data;
};

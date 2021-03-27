import axios from "axios";
import { baseUrl, config } from "./config";

export const fetchFaculties = async () => {
  const { data } = await axios.get(`${baseUrl}Faculties`, config());

  return data;
};


export const fetchFacultyById = async ( id) => {
    const { data } = await axios.get(`${baseUrl}Faculties/${id}`, config());
  
    return data;
 };
  

 export const fetchDirectionFromFaculty = async (id) => {
  const { data } = await axios.get(`${baseUrl}Faculties/${id}/directions`, config());

  return data;
};

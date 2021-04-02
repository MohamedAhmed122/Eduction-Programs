import axios from "axios";
import { baseUrl, config } from "./config";

export const fetchFaculties = async () => {
  const { data } = await axios.get(`${baseUrl}Faculties`, config());

  return data;
};

export const fetchFacultyById = async (id) => {
  const { data } = await axios.get(`${baseUrl}Faculties/${id}`, config());

  return data;
};

export const fetchDirectionFromFaculty = async (id) => {
  const { data } = await axios.get(`${baseUrl}${id}/Directions`, config());

  return data;
};

// create New
export const CreateNewFaculty = async (name) => {
  return await axios.put(`${baseUrl}faculties`, (name), config());
};

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
  return await axios.post(`${baseUrl}faculties`, name, config());
};

// Delete Faculty

export const deleteFaculty = async (id) => {
  return await axios.delete(`${baseUrl}Faculties/${id}`, config());
};

// update Faculty
export const editFaculty = async (id, name) => {
  return await axios.put(`${baseUrl}faculties/${id}`, name, config());
};

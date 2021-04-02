import axios from "axios";
import { baseUrl, config } from "./config";

export const fetchDisciplines = async (token, teacherId) => {
  const { data } = await axios.get(
    `${baseUrl}Disciplines`,
    config(token)
  );
  return data;
};

export const fetchDisciplineById = async (token, id) => {
  const { data } = await axios.get(
    `${baseUrl}Disciplines/${id}`,
    config(token)
  );
  return data;
};

export const fetchTeacherDisciplines = async (token, id) => {
  const { data } = await axios.get(
    `${baseUrl}teachers/${id}/disciplines`,
    config(token)
  );
  return data;
};



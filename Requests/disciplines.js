import axios from "axios";
import { baseUrl, config } from "./config";

export const fetchDisciplines = async (token, teacherId) => {
  const { data } = await axios.get(`${baseUrl}Disciplines`, config(token));
  return data;
};

export const fetchDisciplineById = async (id) => {
  const { data } = await axios.get(`${baseUrl}Disciplines/${id}`, config());
  return data;
};

// Fetch Disciplines for Teacher
export const fetchTeacherDisciplines = async (token, id) => {
  const { data } = await axios.get(
    `${baseUrl}teachers/${id}/disciplines`,
    config(token)
  );
  return data;
};

// Fetch Disciplines for Students
export const fetchStudentsDisciplines = async (token, id) => {
  const { data } = await axios.get(
    `${baseUrl}Students/${id}/disciplines`,
    config(token)
  );
  return data;
};

// Delete Disciplines

export const deleteDisciplineById = async (id) => {
  return await axios.delete(`${baseUrl}Disciplines/${id}`, config());
};

// create Disciplines
export const createDiscipline = async (value) => {
  const { data } = await axios.post(`${baseUrl}Disciplines`, value, config());
  return data;
};

// Edit Disciplines
export const editDiscipline = async (id,value) => {
  const { data } = await axios.put(`${baseUrl}Disciplines/${id}`, value, config());
  return data;
};

import axios from "axios";
import { baseUrl, config } from "./config";

export const fetchUsers = async () => {
  const { data } = await axios.get(`${baseUrl}Users`, config);
  return data;
};

export const deleteUser = async (id) => {
  return await axios.delete(`${baseUrl}Users/${id}`, config);
};

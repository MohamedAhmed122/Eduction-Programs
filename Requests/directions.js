import axios from "axios";
import { baseUrl, config } from "./config";

export const getDirectionById = async (id) => {
  const { data } = await axios.get(`${baseUrl}${id}/Directions`, config());
  return data;
};

// Get Single Directions
export const getSingleDirection = async (id) => {
  const { data } = await axios.get(`${baseUrl}Directions/${id}`, config());
  return data;
};

// create new
export const createDirectionReq = async (id, value) => {
  return await axios.post(`${baseUrl}${id}/directions`, value, config());
};

// Delete Direction
export const deleteDirection = async (id, directionId) => {
  return await axios.delete(
    `${baseUrl}${id}/Directions/${directionId}`,
    config()
  );
};

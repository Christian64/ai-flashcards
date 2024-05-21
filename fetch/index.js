import axios from "axios";
const baseURL = process.env.VERCEL_URL || "";
export const sendNotes = (body) => {
  return axios.post(`${baseURL}/api`, body);
};

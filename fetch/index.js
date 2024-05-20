import axios from "axios";
export const sendNotes = (body) => {
  return axios.post("/api/", body);
};

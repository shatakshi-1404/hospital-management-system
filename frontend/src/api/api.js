import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  withCredentials: true,
});

export const loginUser = (data) => API.post("/auth/login", data);
export const registerUser = (data) => API.post("/auth/register", data);

export const getDoctors = () => API.get("/doctors");
export const getPatients = () => API.get("/patients");
export const getAppointments = () => API.get("/appointments");

export default API;

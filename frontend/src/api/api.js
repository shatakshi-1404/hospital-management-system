import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://hospital-management-system-mjr8781j0.vercel.app/",
});

export const loginUser = (data) => API.post("/auth/login", data);
export const registerUser = (data) => API.post("/auth/register", data);

export const getDoctors = () => API.get("/doctors");
export const getPatients = () => API.get("/patients");
export const getAppointments = () => API.get("/appointments");

export default API;

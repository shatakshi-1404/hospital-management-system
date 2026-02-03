import cors from "cors";
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();   // ⬅️ AFTER dotenv

app.use(cors({
  origin: [
    "https://hospital-management-system-mjr8781j0.vercel.app/", // deployed frontend
    "http://localhost:5173"               // local dev
  ],
  credentials: true
}));
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/doctors", require("./routes/doctorRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));
app.use("/api/patients", require("./routes/patientRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
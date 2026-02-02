require("dotenv").config();   // ⬅️ MUST BE FIRST

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();   // ⬅️ AFTER dotenv

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/doctors", require("./routes/doctorRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));
app.use("/api/patients", require("./routes/patientRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
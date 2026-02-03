require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

/* ✅ CORS — MUST BE BEFORE ROUTES */
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://hospital-management-system-rqz3.vercel.app"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.options("*", cors()); // ✅ Preflight fix

/* ✅ Middlewares */
app.use(express.json());

/* ✅ DB */
connectDB();

/* ✅ Routes */
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/doctors", require("./routes/doctorRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));
app.use("/api/patients", require("./routes/patientRoutes"));

/* ✅ Server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

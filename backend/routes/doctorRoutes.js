const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");

// GET all doctors
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    console.error("❌ Doctor fetch error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// POST add doctor
router.post("/", async (req, res) => {
  try {
    const { name, specialization } = req.body;

    const doctor = new Doctor({
      name,
      specialization,
    });

    await doctor.save();
    res.status(201).json(doctor);
  } catch (err) {
    console.error("❌ Doctor create error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

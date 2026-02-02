const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

/**
 * @route   GET /api/patients
 * @desc    Get all patients
 */
router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * @route   POST /api/patients
 * @desc    Add new patient
 */
router.post("/", async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json(patient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

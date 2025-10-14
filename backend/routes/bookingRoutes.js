const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: "Booking successful", booking: newBooking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

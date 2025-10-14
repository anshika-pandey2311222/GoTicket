const Bus = require("../models/bus");

// Add new bus
exports.addBus = async (req, res) => {
  try {
    const { busNumber, capacity, route } = req.body;

    // Check if bus already exists
    const existingBus = await Bus.findOne({ busNumber });
    if (existingBus) {
      return res.status(400).json({ error: "Bus already exists" });
    }

    const newBus = new Bus({ busNumber, capacity, route });
    await newBus.save();

    res.status(201).json({ message: "Bus added successfully", bus: newBus });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all buses
exports.getBuses = async (req, res) => {
  try {
    const buses = await Bus.find();
    res.status(200).json(buses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

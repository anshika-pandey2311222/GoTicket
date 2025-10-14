const express = require("express");
const router = express.Router();
const { addBus, getBuses } = require("../controllers/busController");

// POST - add bus
router.post("/add", addBus);

// GET - fetch all buses
router.get("/", getBuses);

module.exports = router;

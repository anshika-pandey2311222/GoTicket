const express = require("express");
const router = express.Router();

// Test route for buses
router.get("/test", (req, res) => {
  res.json({ message: "Bus route working ✅" });
});

module.exports = router;

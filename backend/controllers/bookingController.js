const Booking = require("../models/Booking");

exports.getAvailableSeats = async (req, res) => {
  const { vehicleId, date } = req.params;
  const bookedSeats = await Booking.find({ vehicle: vehicleId, date }).select("seatNumber");
  const allSeats = ["A1", "A2", "A3", "B1", "B2", "B3"];
  const available = allSeats.filter(seat => !bookedSeats.map(b => b.seatNumber).includes(seat));
  res.json({ available });
};

exports.reserveSeat = async (req, res) => {
  const { userId, vehicleId, seatNumber, date } = req.body;
  const alreadyBooked = await Booking.findOne({ vehicle: vehicleId, seatNumber, date });
  if (alreadyBooked) return res.status(400).json({ msg: "Seat already taken" });

  const booking = new Booking({ user: userId, vehicle: vehicleId, seatNumber, date });
  await booking.save();
  res.json({ msg: "Seat reserved", booking });
};

exports.confirmBooking = async (req, res) => {
  const { bookingId } = req.body;
  await Booking.findByIdAndUpdate(bookingId, { status: "confirmed" });
  res.json({ msg: "Booking confirmed" });
};

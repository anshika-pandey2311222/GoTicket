import React, { useState } from 'react';
import styles from '../styles/booking.module.css';
import api from "../api";  // Axios instance

const Bookings = () => {
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
    try {
      setLoading(true);

      // For now, sending dummy booking details
      const bookingData = {
        userId: "66f6a5c2a2b4f91e12345678", // replace with actual logged-in user ID
        busId: "66f6b8e2a2b4f91e87654321",  // replace with actual bus ID
        seatNumber: 5,
        journeyDate: new Date(),
      };

      const res = await api.post("/bookings", bookingData);

      alert(`✅ Booking successful! Ticket ID: ${res.data.booking._id}`);
    } catch (err) {
      alert(err.response?.data?.error || "Booking failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="how-to-book" className={styles.bookingSection}>
      <div className={styles.bookingContent}>
        {/* Text Section */}
        <div className={styles.bookingText}>
          <h2><u>How to Book a Bus Ticket</u></h2>
          <p>
            Booking your journey with Go Ticket is fast, simple, and secure. Whether you're planning ahead or booking last-minute, our platform ensures a smooth experience from search to e-ticket.
          </p>
          <p>
            Follow these easy steps to reserve your seat and receive your digital ticket instantly:
          </p>
          <ol className={styles.bookingSteps}>
            <li><strong><u>Visit the Go Ticket Website:</u></strong> Open your browser and go to the official Go Ticket homepage.</li>
            <li><strong><u>Enter Travel Details:</u></strong> Enter your departure and destination cities, along with travel date.</li>
            <li><strong><u>Choose Your Bus:</u></strong> Browse available buses, check timings, seat layout, and fare details.</li>
            <li><strong><u>Select Your Seat:</u></strong> Pick your preferred seat from the live seat map.</li>
            <li><strong><u>Enter Passenger Details:</u></strong> Fill in your name, contact number, and any required ID info.</li>
            <li><strong><u>Make Payment:</u></strong> Choose a payment method and complete the transaction securely.</li>
            <li><strong><u>Receive E-Ticket:</u></strong> Your ticket will be sent instantly via SMS and email with all travel details.</li>
          </ol>
        </div>

        {/* Image Section */}
        <div className={styles.bookingImage}>
          <img src="/images/About us (7).png" alt="Booking illustration showing Go Ticket search screen" />
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <button
          className={styles.bookingButton}
          onClick={handleBooking}
          disabled={loading}
        >
          <b>{loading ? "Booking..." : "Book Now"}</b>
        </button>
      </div>

      {/* Divider Line Outside Padded Container */}
      <div className={styles.fullWidthDivider}>
        <hr className={styles.sectionDivider} />
      </div>
    </section>
  );
};

export default Bookings;

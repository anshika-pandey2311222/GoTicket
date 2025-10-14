import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <h2><u><b>About Go-Ticket</b></u></h2>
          <ul>
            <li><a href="/"><u>Home</u></a></li>
            <li><a href="/e-ticket"><u>E-Ticket</u></a></li>
            <li><a href="/seat-booking"><u>Seat Booking</u></a></li>
            <li><a href="/live-tracking"><u>Live Tracking</u></a></li>
            <li><a href="/contact"><u>Contact Us</u></a></li>
            
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h2><u><b>Info</b></u></h2>
          <ul>
            <li><a href="/terms"><u>Terms & Conditions</u></a></li>
            <li><a href="/privacy"><u>Privacy Policy</u></a></li>
            <li><a href="/privacy"><u>Secure Payment</u></a></li>
            <li><a href="/closure"><u>Responsible Closure</u></a></li>
            <li><a href="/closure"><u>Global Sites References - Red Bus & Abhi Bus</u></a></li>
           
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2025 Go Ticket India. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

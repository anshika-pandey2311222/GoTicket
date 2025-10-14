import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import styles from '../styles/header.module.css'; // adjust path if needed

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Go Ticket Logo" className={styles.logoImg} />
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><a href="#bus-track" className={styles.navLink}>:-<u> BUS TRACK</u></a></li>
          <li><a href="#from-to" className={styles.navLink}>:-<u> FROM -TO</u></a></li>
          <li><a href="#e-ticket" className={styles.navLink}>:-<u> E-TICKET</u></a></li>
          <li><a href="#bookings" className={styles.navLink}>:-<u> BOOKINGS</u></a></li>

          {/* Replace with actual navigation using Link */}
          <li>
            <Link to="/login" className={styles.navLink}>
              :-<u> LOGIN</u>
            </Link>
          </li>
          <li>
            <Link to="/register" className={styles.navLink}>
              :-<u> SIGNUP</u>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

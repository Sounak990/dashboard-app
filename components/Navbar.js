import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

// Icons (You can use any icon library like FontAwesome or Material Icons)
const HomeIcon = () => <span>🏠</span>;
const AnalyticsIcon = () => <span>📊</span>;
const SettingsIcon = () => <span>⚙️</span>;
const ProfileIcon = () => <span>👤</span>;

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const handleLinkClick = () => {
    setIsNavbarVisible(false); // Hide Navbar after clicking a link
  };

  return (
    <>
      {/* Arrow Button to Toggle Navbar */}
      <button
        className={`${styles.toggleButton} ${isNavbarVisible ? styles.hideArrow : ''}`}
        onClick={toggleNavbar}
      >
        {isNavbarVisible ? '❌' : '➡️'}
      </button>

      {/* Navbar */}
      <div className={`${styles.navbar} ${isNavbarVisible ? styles.visible : ''}`}>
        <Link href="/" className={styles.navLink} onClick={handleLinkClick}>
          <HomeIcon />
          <span>Home</span>
        </Link>
        <Link href="/analytics" className={styles.navLink} onClick={handleLinkClick}>
          <AnalyticsIcon />
          <span>Analytics</span>
        </Link>
        <Link href="/settings" className={styles.navLink} onClick={handleLinkClick}>
          <SettingsIcon />
          <span>Settings</span>
        </Link>
        <Link href="/profile" className={styles.navLink} onClick={handleLinkClick}>
          <ProfileIcon />
          <span>Profile</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
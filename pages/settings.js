import Navbar from '../components/Navbar';
import styles from '../styles/Settings.module.css';

export default function Settings() {
  return (
    <div className={styles.container}>
      {/* Gradient Background */}
      <div className={styles.gradientBackground}></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>Settings</h1>

        {/* Settings Sections */}
        <div className={styles.settingsSection}>
          <div className={styles.settingCard}>
            <h2>Account Settings</h2>
            <div className={styles.settingItem}>
              <span>Change Password</span>
              <button>Edit</button>
            </div>
            <div className={styles.settingItem}>
              <span>Update Email</span>
              <button>Edit</button>
            </div>
          </div>

          <div className={styles.settingCard}>
            <h2>Privacy Settings</h2>
            <div className={styles.settingItem}>
              <span>Enable Two-Factor Authentication</span>
              <button>Enable</button>
            </div>
            <div className={styles.settingItem}>
              <span>Manage Data Sharing</span>
              <button>Manage</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
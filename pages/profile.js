import Navbar from '../components/Navbar';
import styles from '../styles/Profile.module.css';

export default function Profile() {
  return (
    <div className={styles.container}>
      {/* Gradient Background */}
      <div className={styles.gradientBackground}></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>User Profile</h1>

        {/* Profile Section */}
        <div className={styles.profileSection}>
          <div className={styles.profileCard}>
            <div className={styles.profileImage}>
              <img src="/user.jpg" alt="Profile" />
            </div>
            <h2>John Doe</h2>
            <p>Software Engineer</p>
            <p>San Francisco, CA</p>
          </div>

          {/* User Details */}
          <div className={styles.detailsCard}>
            <h2>Details</h2>
            <div className={styles.detailItem}>
              <span>Email:</span>
              <p>john.doe@example.com</p>
            </div>
            <div className={styles.detailItem}>
              <span>Phone:</span>
              <p>+1 234 567 890</p>
            </div>
            <div className={styles.detailItem}>
              <span>Joined:</span>
              <p>January 2020</p>
            </div>
          </div>
        </div>

        {/* Activity Section */}
        <div className={styles.activitySection}>
          <h2>Recent Activity</h2>
          <ul>
            <li>Logged in on October 1, 2023</li>
            <li>Updated profile on September 28, 2023</li>
            <li>Created a new project on September 25, 2023</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
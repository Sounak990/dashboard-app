import Navbar from '../components/Navbar';
import MetricCard from '../components/MetricCard';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Gradient Background */}
      <div className={styles.gradientBackground}></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>Dashboard</h1>

        {/* Key Metrics Section */}
        <div className={styles.metrics}>
          <MetricCard
            title="Total Revenue"
            value="$12,345"
            percentage={75}
            goal={80}
            gradient="linear-gradient(135deg, rgba(106, 17, 203, 0.8), rgba(37, 117, 252, 0.8))"
          />
          <MetricCard
            title="New Users"
            value="1,234"
            percentage={60}
            goal={70}
            gradient="linear-gradient(135deg, rgba(255, 154, 158, 0.8), rgba(250, 208, 196, 0.8))"
          />
          <MetricCard
            title="Conversion Rate"
            value="12.3%"
            percentage={50}
            goal={65}
            gradient="linear-gradient(135deg, rgba(251, 194, 235, 0.8), rgba(166, 193, 238, 0.8))"
          />
          <MetricCard
            title="Active Projects"
            value="45"
            percentage={85}
            goal={90}
            gradient="linear-gradient(135deg, rgba(132, 250, 176, 0.8), rgba(143, 211, 244, 0.8))"
          />
        </div>

        {/* Recent Activity Section */}
        <div className={styles.activity}>
          <h2>Recent Activity</h2>
          <ul>
            <li>User A logged in</li>
            <li>User B updated profile</li>
            <li>User C created a new project</li>
            <li>User D submitted a ticket</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
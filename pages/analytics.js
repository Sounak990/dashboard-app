import Navbar from '../components/Navbar';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import GeoChart from '../components/GeoChart';
import styles from '../styles/Analytics.module.css';

export default function Analytics() {
  return (
    <div className={styles.container}>
      {/* Gradient Background */}
      <div className={styles.gradientBackground}></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>Analytics</h1>

        {/* Charts Section */}
        <div className={styles.charts}>
          <div className={styles.chartCard}>
            <h2>Monthly Revenue</h2>
            <BarChart />
          </div>
          <div className={styles.chartCard}>
            <h2>User Distribution</h2>
            <PieChart />
          </div>
          <div className={styles.chartCard}>
            <h2>Sales Trends</h2>
            <LineChart />
          </div>
          <div className={styles.chartCard}>
            <h2>Global Activity</h2>
            <GeoChart />
          </div>
        </div>
      </div>
    </div>
  );
}
import styles from '../styles/MetricCard.module.css';

const MetricCard = ({ title, value, percentage, goal, gradient }) => {
  return (
    <div className={styles.card} style={{ background: gradient }}>
      <h3>{title}</h3>
      <p>{value}</p>
      <div className={styles.progress}>
        <div className={styles.progressBar} style={{ width: `${percentage}%` }}></div>
      </div>
      <p>Goal: {goal}%</p>
    </div>
  );
};

export default MetricCard;
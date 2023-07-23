import styles from '@/styles/Home.module.css';

const Work = ({ date, title, description }) => {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineItemDate}>{date}</div>
      <div className={styles.timelineItemContent}>
        <h3 className={styles.timelineItemTitle}>{title}</h3>
        <p className={styles.timelineItemDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Work;

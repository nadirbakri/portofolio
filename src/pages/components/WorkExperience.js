import styles from '@/styles/Home.module.css';

const WorkExperience = () => {
  return (
    <section className='min-vh-100 bg-dark text-white'>
      <div className='container'>
        <h1 className={`${styles.playfair} text-center`}>Work Experience</h1>
        <div className={`${styles.timeline} mt-5`}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineItemDate}>2022 - Present</div>
            <div className={styles.timelineItemContent}>
              <h3 className={styles.timelineItemTitle}>Software Engineer at PT.Intikom Berlian Mustika</h3>
              <p className={`${styles.montserrat} ${styles.timelineItemDescription}`}>In charge of developing new features for the Stream Mobile API, maintaining the API to ensure bug-free performance, and also involved in developing new features for the HRMS.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineItemDate}>2022 - 2022</div>
            <div className={styles.timelineItemContent}>
              <h3 className={`${styles.playfair} ${styles.timelineItemTitle}`}>Fullstack Developer at Majoo</h3>
              <p className={`${styles.montserrat} ${styles.timelineItemDescription}`}>In charge of developing new features for the CRM and maintaining the application to ensure it remains bug-free.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineItemDate}>2021 - 2021</div>
            <div className={styles.timelineItemContent}>
              <h3 className={`${styles.playfair} ${styles.timelineItemTitle}`}>Fullstack Developer Intern at Rumah Penalaran</h3>
              <p className={`${styles.montserrat} ${styles.timelineItemDescription}`}>In charge of developing end-to-end event registration applications, conducting thorough application testing, and performing User Acceptance Testing (UAT).</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineItemDate}>2021 - 2022</div>
            <div className={styles.timelineItemContent}>
              <h3 className={`${styles.playfair} ${styles.timelineItemTitle}`}>Fullstack Developer Freelance at Our Love Day</h3>
              <p className={`${styles.montserrat} ${styles.timelineItemDescription}`}>In charge of developing online invitation application, conducting application testing, and performing User Acceptance Testing (UAT).</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineItemDate}>2018 - 2022</div>
            <div className={styles.timelineItemContent}>
              <h3 className={`${styles.playfair} ${styles.timelineItemTitle}`}>Student at Brawijaya University</h3>
              <p className={`${styles.montserrat} ${styles.timelineItemDescription}`}>Graduated with honors, achieving a GPA of 3.75</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

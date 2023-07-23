import styles from '@/styles/Home.module.css';
import Work from './Work';

const WorkExperience = ({ workExperience }) => {
  return (
    <section className='min-vh-100 bg-dark text-white'>
      <div className='container'>
        <h1 className={`${styles.playfair} text-center`}>Work Experience</h1>
        <div className={`${styles.timeline} mt-5`}>
          {workExperience.map((item, index) => (
            <Work
              key={index}
              date={item.date}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

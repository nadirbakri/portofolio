import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import styles from '@/styles/Home.module.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';

export default function Home() {
  const [headingText, setHeadingText] = useState("Fullstack Developer");

  useEffect(() => {
    const words = ["Fullstack Developer", "Software Engineer", "Back End Developer"];
    let index = 0;

    const intervalId = setInterval(() => {
      setHeadingText(words[index]);
      index = (index + 1) % words.length;
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const portofolioSection = useRef(null);

  const workExperience = [
    {
      date: "2022 - Present",
      title: "Software Engineer at PT.Intikom Berlian Mustika",
      description: "In charge of developing new features for the Stream Mobile API, maintaining the API to ensure bug-free performance, and also involved in developing new features for the HRMS.",
    },
    {
      date: "2022 - 2022",
      title: "Fullstack Developer at Majoo",
      description: "In charge of developing new features for the CRM and maintaining the application to ensure it remains bug-free.",
    },
    {
      date: "2021 - 2021",
      title: "Fullstack Developer Intern at Rumah Penalaran",
      description: "In charge of developing end-to-end event registration applications, conducting thorough application testing, and performing User Acceptance Testing (UAT).",
    },
    {
      date: "2021 - 2022",
      title: "Fullstack Developer Freelance at Our Love Day",
      description: "In charge of developing online invitation application, conducting application testing, and performing User Acceptance Testing (UAT).",
    },
    {
      date: "2018 - 2022",
      title: "Student at Brawijaya University",
      description: "Graduated with honors, achieving a GPA of 3.75",
    },
  ];

  return (
    <>
      <Head>
        <title>Ruayuanda's Web!</title>
        <meta name="description" content="Portofolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Navbar />
        <Hero headingText={headingText} />
        <WorkExperience workExperience={workExperience} />
        <section ref={portofolioSection} className='min-vh-100 bg-dark text-white position-relative' id='portofolioSection'>
          <h1 className={`${styles.playfair} text-center`}>Portofolio</h1>
          <div className='position-absolute top-50 start-50 translate-middle'>
            <h1 className={`${styles.monserrat}`}>Coming Soon!</h1>
          </div>
        </section>
        <Contact />
      </main>
    </>
  )
}

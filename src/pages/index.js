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
        <WorkExperience />
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

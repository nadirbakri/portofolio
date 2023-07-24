import styles from '@/styles/Home.module.css';
import { SiCsharp } from "react-icons/si"
import { BiLogoGoLang } from "react-icons/bi"
import { FaPhp } from "react-icons/fa"
import { DiJava, DiJavascript } from "react-icons/di"

const Hero = ({ headingText }) => {

  const scrollToPortofolio = () => {
    const portofolioSection = document.getElementById("portofolioSection");
    if (portofolioSection) {
      portofolioSection.scrollIntoView({ behavior: "smooth" });
    }

  };

  return (
    <section className={`bg-dark text-white d-flex align-items-center ${styles.heightContainer100}`}>
      <div className='container h-100'>
        <div className={`${styles.centerRow} row h-100`}>
          <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
            <div className={`${styles.selfie} position-relative`}>
              <div className='position-absolute top-50 start-50 translate-middle'>
                <div className='d-block d-md-none'>
                  <div className='d-flex flex-column text-center'>
                    <h1 className={`${styles.playfair} fw-bold`} id='changingHeading'>{headingText}</h1>
                    <p className={`${styles.monserrat}`}>Nadir Ruayuanda Bakri</p>
                    <button type="button" className="btn btn-light" onClick={scrollToPortofolio}>Portofolio</button>
                    <div className={`${styles.logoSection} mt-4`}>
                      <SiCsharp className={`${styles.logo} mx-2`} />
                      <FaPhp className={`${styles.logo} mx-2`} />
                      <BiLogoGoLang className={`${styles.logo} mx-2`} />
                      <DiJava className={`${styles.logo} mx-2`} />
                      <DiJavascript className={`${styles.logo} mx-2`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-6 d-none d-md-block'>
            <h1 className={`${styles.playfair} fw-bold`} id='changingHeading'>{headingText}</h1>
            <p className={`${styles.monserrat}`}>Nadir Ruayuanda Bakri</p>
            <button type="button" className="btn btn-light" onClick={scrollToPortofolio}>Portofolio</button>
            <div className={`${styles.logoSection} mt-4`}>
              <SiCsharp className={`${styles.logo} mx-2`} />
              <FaPhp className={`${styles.logo} mx-2`} />
              <BiLogoGoLang className={`${styles.logo} mx-2`} />
              <DiJava className={`${styles.logo} mx-2`} />
              <DiJavascript className={`${styles.logo} mx-2`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

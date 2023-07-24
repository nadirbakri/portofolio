import styles from '@/styles/Home.module.css';
import { FaEnvelope } from "react-icons/fa";
import { BiLogoWhatsapp } from "react-icons/bi";

const Contact = () => {
  const handleWhatsApp = () => {
    const phoneNumber = '6285692468229';
    const message = "Hello, I'm interested in getting in touch with you.";
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`);
  };

  const handleEmail = () => {
    // Gantikan alamat email Anda dan subjek email yang diinginkan
    const email = 'your-email@example.com';
    const subject = "Get in Touch - Let's Create Something Amazing Together!";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <section className='bg-dark text-white pb-5'>
      <div className='container'>
        <h1 className={`${styles.playfair} text-center`}>Contact Me</h1>
        <p className={`${styles.montserrat} text-center`}>Thank you for visiting my portfolio! I'm thrilled that you stopped by and I'd love to hear from you. Whether you have questions about my work, want to discuss potential collaborations, or simply want to say hello, feel free to get in touch with me. I'm always eager to connect with like-minded individuals, fellow creatives, and potential clients.</p>
        <div className='row pt-5'>
          <div className='col-4 offset-2'>
            <div className={`${styles.contactButton} bg-white text-dark`} onClick={handleWhatsApp}>
              <BiLogoWhatsapp className={`${styles.contactIcon} text-center`} />
            </div>
          </div>
          <div className='col-4'>
            <div className={`${styles.contactButton} bg-white text-dark`} onClick={handleEmail}>
              <FaEnvelope className={`${styles.contactIcon} text-center`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

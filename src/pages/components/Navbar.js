import { FaLinkedinIn } from "react-icons/fa";
import styles from '@/styles/Home.module.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className={`navbar-brand navbar-brand-centered ${styles.modi} fs-2 ${styles.navbarBrandCentered}`} href="#">Ruayuanda</a>
        <ul className="navbar-nav">
          <li className={`nav-item ${styles.monserrat}`}>
            <a className="nav-link" href="https://www.linkedin.com/in/nadir-bakri"><FaLinkedinIn /></a>
          </li>
        </ul>
        <ul className={`navbar-nav ml-auto ${styles.monserrat}`}>
          <li className="nav-item">
            <button type="button" className="btn btn-dark">Download CV</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// src/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="public/vite.svg" alt="Logo" />
        <span>IntelliVision</span>
      </div>
      <ul className={styles.navLinks}>
        <li><Link className={styles.navItem} to="/home">Home</Link></li>
        <li className={styles.navItem}>
          <div className="dropdown-center">
            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/face-detection" style={{color:'#800080'}}>Face Detection</Link></li>
              <li><Link className="dropdown-item" to="/face-recognition">Face Recognition</Link></li>
              {/* <li><Link className="dropdown-item" to="/face-emotion">Face Emotion</Link></li> */}
              <li><Link className="dropdown-item" to="/id-detection">ID Detection</Link></li>
            </ul>
          </div>
        </li>
        {/* <li className={styles.navItem}><a href="#collections">Sochenge</a></li> */}
        <li><Link className={styles.navItem} to="/about">About</Link></li>
        <li><Link className={styles.navItem} to="/contact">Contact</Link></li>
        {/* <li className={styles.navItem}><a href="#contact">Contact</a></li> */}
      </ul>
    </nav>
  );
}

export default Nav;
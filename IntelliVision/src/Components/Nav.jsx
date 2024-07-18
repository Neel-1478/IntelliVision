import React from 'react';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="public\vite.svg" alt="Logo" />
        <span>Logo</span>
      </div>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}><a href="#home">Home</a></li>
        <li className={styles.navItem}><a href="#shop">Shop</a></li>
        <li className={styles.navItem}><a href="#collections">Collections</a></li>
        <li className={styles.navItem}><a href="#about">About</a></li>
        <li className={styles.navItem}><a href="#contact">Contact</a></li>
      </ul>
      <div className={styles.navIcons}>
        <a href="#profile" className={styles.icon}><i className="fas fa-user"></i></a>
      </div>
    </nav>
  );
}

export default Nav;
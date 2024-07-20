import React from 'react';
import styles from './About.module.css'; // Import the CSS module

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <header className={styles.headerContainer}>
        <h1 className={styles.headerHeading}>About Us</h1>
        <p className={styles.headerSubheading}>Discover our mission, values, and services.</p>
      </header>
      
      <section className={styles.introSection}>
        <div className={styles.intro}>
          <img src="sideAi.jpg" alt="About Us" className={styles.introImage} />
          <div className={styles.introText}>
            <h2>Our Story</h2>
            <p>Founded in 2024, Intellivision began as a small startup with a vision to revolutionize the way we interact with technology. Our founders, driven by a passion for innovation, embarked on a journey to create cutting-edge solutions that would make a significant impact on various industries.</p>
            <p>Over the years, we have grown from a small team to a leading provider of document detection and face recognition solutions. Our commitment to excellence and customer satisfaction has helped us build strong relationships with clients and partners around the world.</p>
            <p>Our journey has been marked by numerous milestones, including the development of our flagship products and the expansion of our team. We continue to push the boundaries of technology, striving to deliver solutions that meet the evolving needs of our clients and the industry.</p>
            <p>As we look to the future, we remain dedicated to our mission of empowering individuals and organizations through innovative technology. Our story is one of growth, dedication, and a relentless pursuit of excellence, and we are excited to continue this journey with our valued customers and partners.</p>
          </div>
        </div>
      </section>

      <section className={styles.missionSection}>
        <h2>Our Mission</h2>
        <p>Our mission is to empower individuals and organizations by providing cutting-edge solutions in document detection and face recognition. We strive to deliver excellence through innovation, reliability, and customer-centricity.</p>
      </section>

      <section className={styles.servicesSection}>
        <h2>Our Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Document Detection</h3>
            <p>Utilizing advanced algorithms to accurately detect and classify documents in various formats.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Face Recognition</h3>
            <p>Providing robust face recognition solutions for security and personalization applications.</p>
          </div>
        </div>
      </section>

      <div className={styles.contributors}>
        <h2>Contributors</h2>
        <div className={styles.contributorsGrid}>
          <div className={styles.card}>
            <img src="con1.jpeg" alt="Contributor 1" className={styles.cardImage} />
            <h4>NEEL PATEL</h4>
          </div>
          <div className={styles.card}>
            <img src="con4.jpg" alt="Contributor 2" width={'100px'} className={styles.cardImage} />
            <h4>POOJAN PATEL</h4>
          </div>
          <div className={styles.card}>
            <img src="con2.jpg" alt="Contributor 3" className={styles.cardImage} />
            <h4>PARTH SOJITRA</h4>
          </div>
          <div className={styles.card}>
            <img src="con3.jpg" alt="Contributor 4" className={styles.cardImage} />
            <h4>JAY THORIYA</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

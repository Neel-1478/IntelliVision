import React from 'react';
import styles from './Home.module.css';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaBootstrap, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SiTensorflow, SiKeras, SiOpencv, SiFlask } from 'react-icons/si';
import useIntersectionObserver from '../Components/userIntersectionObserver.jsx'; // Ensure this path is correct

const TechCard = ({ title, items }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={ref} className={`${styles.techCard} ${isVisible ? styles.visible : ''}`}>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

function Home() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerHeading}>Intellivision: Empowering Your Vision with AI Precision</h1>
        <p className={styles.headerSubheading}>
          Revolutionizing Document Management and Face Recognition with Cutting-Edge Technology
        </p>
        <button className={styles.headerButton}><a href="https://github.com/Neel-1478/IntelliVision">Go to Github</a></button>
      </div>

      <div className={styles.introSection}>
        <div className={styles.intro}>
          <img src="removebg.png" alt="AI illustration" className={styles.introImage} />
          <div className={styles.aboutSection}>
            <h2>About Us</h2>
            <ul>
              <li>Advanced AI-driven document management solutions</li>
              <li>State-of-the-art face recognition technology</li>
              <li>Enhanced security and privacy features</li>
              <li>User-friendly and intuitive interface</li>
              <li>Seamless integration with existing systems</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.techStackSection}>
        <h2>Our Tech Stack</h2>
        <div className={styles.techCards}>
          <TechCard title="Frontend" items={[
            <><FaReact /> React</>,
            <><FaHtml5 /> HTML5</>,
            <><FaCss3Alt /> CSS3</>,
            <><FaBootstrap /> Bootstrap</>
          ]} />
          <TechCard title="Backend" items={[
            <><FaNodeJs /> Node.js</>,
            <><SiFlask /> Flask</>,
            <><FaPython /> Python</>
          ]} />
          <TechCard title="AI/ML Libraries" items={[
            <><SiTensorflow /> TensorFlow</>,
            <><SiKeras /> Keras</>,
            <><SiOpencv /> OpenCV</>,
            'EasyOCR Model'
          ]} />
        </div>
      </div>


      <div className={styles.featureHighlights}>
  <h2>Features</h2>
  <div className={styles.featureList}>
    <div className={styles.featureItem}>
      <h3>Face Detection</h3>
      <p>Accurately detects faces in images with high precision, enabling seamless interaction with face-based applications and provide results.</p>
    </div>
    <div className={styles.featureItem}>
      <h3>Face Recognition</h3>
      <p>Advanced recognition technology to identify and verify individuals based on facial features, enhancing security and personalization.</p>
    </div>
    <div className={styles.featureItem}>
      <h3>ID Detection</h3>
      <p>Efficiently extracts and verifies identification details from various types of ID&apos;s photos, streamlining verification processes.</p>
    </div>
  </div>
</div>



      <div className={styles.subscriptionSection}>
        <div className={styles.logo}>
          <img src="vite.svg" alt="ManageHub Logo" />
          <h1>IntelliVision</h1>
        </div>
        <div className={styles.logoP}>
          <p>Subscribe to our newsletter</p>
        </div>
        <div className={styles.subscriptionForm}>
          <input type="email" placeholder="Input your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className={styles.socialIcons}>
        <li><a href="#"><FaInstagram className={styles.insta} /></a></li>
        <li><a href="#"><FaFacebook /></a></li>
        <li><a href="#"><FaWhatsapp className={styles.whatsapp} /></a></li>
      </div>

      <div className={styles.copyright}>
        <p>Intellivision &copy; 2024 All rights reserved</p>
      </div>
    </div>
  );
}

export default Home;

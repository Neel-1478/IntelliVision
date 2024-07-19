import styles from './Home.module.css';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaBootstrap } from 'react-icons/fa';
import { SiTensorflow, SiKeras, SiOpencv, SiFlask } from 'react-icons/si';

function Home() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerHeading}>Intellivision: Empowering Your Vision with AI Precision</h1>
        <p className={styles.headerSubheading}>
          Revolutionizing Document Management and Face Recognition with Cutting-Edge Technology
        </p>
        <button className={styles.headerButton}>Let&apos;s get started</button>
      </div>

      <div className={styles.introSection}>
        <div className={styles.intro}>
          <img src="/sideAi.jpg" alt="AI illustration" className={styles.introImage} />
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
          <div className={styles.techCard}>
            <h3>Frontend</h3>
            <ul>
              <li><FaReact /> React</li>
              <li><FaHtml5 /> HTML5</li>
              <li><FaCss3Alt /> CSS3</li>
              <li><FaBootstrap /> Bootstrap</li>
            </ul>
          </div>
          <div className={styles.techCard}>
            <h3>Backend</h3>
            <ul>
              <li><FaNodeJs /> Node.js</li>
              <li><SiFlask /> Flask</li>
              <li><FaPython /> Python</li>
            </ul>
          </div>
          <div className={styles.techCard}>
            <h3>AI/ML Libraries</h3>
            <ul>
              <li><SiTensorflow /> TensorFlow</li>
              <li><SiKeras /> Keras</li>
              <li><SiOpencv /> OpenCV</li>
              <li>EasyOCR Model</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.contributors}>
        <h2>Our Contributors</h2>
        <div className={styles.contributorsGrid}>
          <div className={styles.card}>
            <img src="con1.jpeg" alt="Contributor 1"  className={styles.cardImage} />
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

      <div className={styles.subscriptionSection}>
        <div className={styles.logo}>
            
       
        <img src="vite.svg" alt="ManageHub Logo" />
        <h1>  IntelliVision</h1>
        </div>
        <p>Subscribe to our newsletter</p>
        <div className={styles.subscriptionForm}>
            <input type="email" placeholder="Input your email" />
            <button>Subscribe</button>
        </div>
        <div>
          <li><a href=""><i className="bi bi-instagram"/></a></li>
          <li><a href=""><i className="bi bi-whatsapp"/></a></li>
          <li><a href=""><i className="bi bi-facebook"/></a></li>
        </div>
    </div>

    
    </div>
  );
}

export default Home;

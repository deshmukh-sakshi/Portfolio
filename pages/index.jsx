import Link from 'next/link';
// import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Passionate</h1>
          <h1>Developer</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Sakshi Deshmukh</h1>
            <h6 className={styles.bio}>Software Developer</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Technical Skills</h4>
                  <div className={styles.tags}>
                    <span key='Java' className='Java'>
                      Java
                    </span>
                    <span key='Python' className='Python'>
                      Python
                    </span>
                    <span key='Tensorflow' className='Tensorflow'>
                      C++
                    </span>
                    <span key='SQL' className='SQL'>
                      JavaScript
                    </span>
                    <span key='Software-Design' className='Software-Design'>
                      Spring Boot
                    </span>
                    <span key='Research' className='Research'>
                      React.js
                    </span>
                    <span key='Apache-Spark' className='Apache-Spark'>
                      Node.js
                    </span>
                    <span key='MySQL' className='MySQL'>
                      PostgreSQL
                    </span>
                    <span key='Deep-Learning' className='Deep-Learning'>
                      MongoDB
                    </span>
                    <span key='GenAI' className='GenAI'>
                      Azure OpenAI
                    </span>
                    <span key='LLMs' className='LLMs'>
                      Keras
                    </span>
                    <span key='MIM' className='MIM'>
                      DSA
                    </span>
                    <span key='MLOps' className='MLOps'>
                      Docker
                    </span>
                    <span key='AWS' className='AWS'>
                      AWS
                    </span>
                    <span key='Computer-Vision' className='Computer-Vision'>
                      Git
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/resume">
              <button className={styles.button}>Resume</button>
            </Link>
            <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}

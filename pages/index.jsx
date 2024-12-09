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
          <h1>Enthusiast</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Sakshi Deshmukh</h1>
            <h6 className={styles.bio}>Software Developer</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Skill Set</h4>
                  <div className={styles.tags}>
                    <span key='Research' className='Research'>
                      Data Visualization
                    </span>
                    <span key='Computer-Vision' className='Computer-Vision'>
                      Git and Github Version Control
                    </span>
                    <span key='MIM' className='MIM'>
                      Data Structures & Algorithms
                    </span>
                    <span key='LLMs' className='LLMs'>
                      HTML
                    </span>
                    <span key='PyTorch' className='PyTorch'>
                      CSS
                    </span>
                    <span key='GenAI' className='GenAI'>
                      Generative AI
                    </span>
                    <span key='Tensorflow' className='Tensorflow'>
                      C++
                    </span>
                    <span key='Apache-Spark' className='Apache-Spark'>
                      Python
                    </span>
                    <span key='SQL' className='SQL'>
                      Javascript
                    </span>

                    <span key='Software-Design' className='Software-Design'>
                      Software-Engineering
                    </span>
              
                  </div>
                </div>
              </div>
            </div>
            <Link href="/resume">
              <button className={styles.button}>Resume</button>
            </Link>
            {/* <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link> */}
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
           
            
          </div>
          {/* <Illustration className={styles.illustration} /> */}


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

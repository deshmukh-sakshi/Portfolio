import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Explorer.module.css';

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <span className={styles.chevron}>▼</span> PORTFOLIO
        </label>
        <div className={styles.files} style={{ display: portfolioOpen ? 'block' : 'none' }}>
          <Link href="/">
            <div className={styles.file}>
              <Image
                src="/react_icon.svg"
                alt="React Icon"
                height={18}
                width={18}
              />{' '}
              home.jsx
            </div>
          </Link>
          <Link href="/resume">
            <div className={styles.file}>
              <Image
                src="/html_icon.svg"
                alt="HTML Icon"
                height={18}
                width={18}
              />{' '}
              resume.html
            </div>
          </Link>
          <Link href="/contact">
            <div className={styles.file}>
              <Image
                src="/yml_icon.svg"
                alt="YML Icon"
                height={18}
                width={18}
              />{' '}
              contact.yml
            </div>
          </Link>
          <Link href="/projects">
            <div className={styles.file}>
              <Image
                src="/py_icon.svg"
                alt="Python Icon"
                height={18}
                width={18}
              />{' '}
              projects.py
            </div>
          </Link>
          <Link href="/achievements">
            <div className={styles.file}>
              <Image
                src="/react_icon.svg"
                alt="Python Icon"
                height={18}
                width={18}
              />{' '}
              achievements.jsx
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explorer;

import { useState } from 'react';
import styles from '../styles/AchievementsPage.module.css';

const Achievements = () => {
  const [data] = useState({
    academic: {
      'Current CGPA': '9.28/10',
      'B.Tech': 'Computer Science & Engineering | MIT AOE',
      'Honors': 'LPF Scholarship for Academic Excellence (2023)'
    },
    certifications: {
      'Cisco Packet Tracer': {
        name: 'Cisco Packet Tracer',
        date: '2024',
        issuer: 'Cisco',
        link: 'https://drive.google.com/file/d/15EROeMmgRTI4AJupP1qudilDwe7Wd2o7/view?usp=drive_link',
        description: 'Network simulation and visualization tool certification'
      },
      'Software Development': {
        name: 'Software Development',
        date: '2024',
        issuer: 'LinkedIn',
        link: 'https://drive.google.com/file/d/1l0bEtaICcX8duGcxODSdz7J8S5NeA8Jm/view?usp=sharing',
        description: 'Software Development Fundamentals'
      },
      'Python Programming': {
        name: 'Python Programming',
        date: '2023',
        issuer: 'Coursera',
        link: 'https://drive.google.com/file/d/1dIJi0zuSUMMAOhPo0SWRGTmPwSmhPQ9S/view?usp=sharing',
        description: 'Advanced Python programming and application development'
      },
      'Linux Fundamentals': {
        name: 'Linux Fundamentals',
        date: '2023',
        issuer: 'Simplilearn',
        link: 'https://simplilearn.com',
        description: 'Core Linux system administration and command line skills'
      },
      'Web Development': {
        name: 'Web Development',
        date: '2023',
        issuer: 'Udemy',
        link: 'https://udemy.com',
        description: 'Full-stack web development with modern technologies'
      },
    },
    awards: {
      'Code Without Barriers Hackathon': '🥇 1st Place - Microsoft & iNextLabs (2025)',
      'LPF Scholarship': 'Academic Excellence (2023)',
      'Maths Olympiad': 'Gold Medal (2018)',
      'Nirmal Expo [Project Exhibition]': 'Best Project Award (2019)',
      'Essay Writing Competition Winner': '(2021)',
    }
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterAchievements = (category, term) => {
    if (category !== 'all' && category !== category) return false;
    return JSON.stringify(data[category]).toLowerCase().includes(term.toLowerCase());
  };

  const calculateProgress = (value) => {
    if (value.includes('/')) {
      const [achieved, total] = value.split('/');
      return (parseFloat(achieved) / parseFloat(total)) * 100;
    }
    if (value.includes('%')) {
      return parseFloat(value);
    }
    return 100;
  };

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h2>Achievements & Certifications</h2>
        <p>
          A collection of my academic accomplishments, professional certifications, and notable awards. 
          Each achievement represents a milestone in my journey of continuous learning and growth in 
          the field of technology and computer engineering.
        </p>
      </div>

      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search achievements..."
          className={styles.searchBar}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className={styles.filters}>
          <button
            className={`${styles.filterBtn} ${selectedCategory === 'all' ? styles.active : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          {Object.keys(data).map((category) => (
            <button
              key={category}
              className={`${styles.filterBtn} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.achievements}>
        {Object.keys(data).map((category) => (
          (selectedCategory === 'all' || selectedCategory === category) &&
          filterAchievements(category, searchTerm) && (
            <div key={category} className={styles.category}>
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <div className={styles.cards}>
                {Object.entries(data[category]).map(([key, value]) => (
                  <div key={key} className={styles.card}>
                    <div className={styles.cardInner}>
                      <div className={styles.cardFront}>
                        <h4>{key}</h4>
                        {category === 'academic' && (
                          <div className={styles.progressBar}>
                            <div
                              className={styles.progress}
                              style={{ width: `${calculateProgress(value)}%` }}
                            />
                          </div>
                        )}
                        {category === 'certifications' ? (
                          <>
                            <p className={styles.certInfo}>
                              <span className={styles.issuer}>{value.issuer}</span>
                              <span className={styles.date}>{value.date}</span>
                            </p>
                            <p className={styles.certDescription}>{value.description}</p>
                          </>
                        ) : (
                          <p>{value}</p>
                        )}
                      </div>
                      <div className={styles.cardBack}>
                        {category === 'certifications' ? (
                          <div className={styles.certDetails}>
                            <a href={value.link} target="_blank" rel="noopener noreferrer" 
                               className={styles.certLink}>
                              View Certificate →
                            </a>
                          </div>
                        ) : category === 'academic' ? (
                          <div className={styles.academicDetails}>
                            <div className={styles.progressIndicator}>
                              {calculateProgress(value)}%
                            </div>
                          </div>
                        ) : (
                          <div className={styles.awardDetails}>
                            <span>{value}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Achievements;

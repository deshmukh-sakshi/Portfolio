import { useState } from 'react';
import styles from '../styles/ContactPage.module.css';

const ContactCode = () => {
  return (
    <div className={styles.codeContainer}>
      <pre className={styles.codeBlock}>
        <span className={styles.line}>
          <span className={styles.bracket}>{'{'}</span>
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>  </span><span className={styles.property}>"name"</span>: <span className={styles.string}>"Sakshi Deshmukh"</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>  </span><span className={styles.property}>"phone"</span>: <span className={styles.string}>"9699350459"</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>  </span><span className={styles.property}>"email"</span>: <span className={styles.string}>"deshmukhsakshi296@gmail.com"</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>  </span><span className={styles.property}>"location"</span>: <span className={styles.string}>"Pune, India 📍"</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>  </span><span className={styles.property}>"education"</span>: <span className={styles.string}>"B.Tech CSE @ MIT AOE | GPA: 9.28"</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>  </span><span className={styles.property}>"socials"</span>: <span className={styles.bracket}>{'{'}</span>
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.property}>"github"</span>: <a href="https://github.com/deshmukh-sakshi" target="_blank" rel="noopener noreferrer" className={styles.string}>"github.com/deshmukh-sakshi"</a>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.property}>"linkedin"</span>: <a href="https://linkedin.com/in/sakshideshmukh86" target="_blank" rel="noopener noreferrer" className={styles.string}>"linkedin.com/in/sakshideshmukh86"</a>
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>  </span><span className={styles.bracket}>{'}'}</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>  </span><span className={styles.property}>"codingProfiles"</span>: <span className={styles.bracket}>{'{'}</span>
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.property}>"codechef"</span>: <a href="https://www.codechef.com/users/mega_shine_15" target="_blank" rel="noopener noreferrer" className={styles.string}>"mega_shine_15"</a>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.property}>"leetcode"</span>: <a href="https://leetcode.com/u/Sakshi_86/" target="_blank" rel="noopener noreferrer" className={styles.string}>"Sakshi_86"</a>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.property}>"codeforces"</span>: <a href="https://codeforces.com/profile/deshmukhsakshi296" target="_blank" rel="noopener noreferrer" className={styles.string}>"deshmukhsakshi296"</a>
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>  </span><span className={styles.bracket}>{'}'}</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>  </span><span className={styles.property}>"skills"</span>: <span className={styles.bracket}>{'['}</span>
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.string}>"Java"</span>, <span className={styles.string}>"Python"</span>, <span className={styles.string}>"C++"</span>, <span className={styles.string}>"JavaScript"</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.string}>"Spring Boot"</span>, <span className={styles.string}>"React.js"</span>, <span className={styles.string}>"Node.js"</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.string}>"PostgreSQL"</span>, <span className={styles.string}>"MongoDB"</span>, <span className={styles.string}>"MySQL"</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.string}>"Keras"</span>, <span className={styles.string}>"Azure OpenAI"</span>, <span className={styles.string}>"Docker"</span>, <span className={styles.string}>"AWS"</span>
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>  </span><span className={styles.bracket}>{']'}</span>
        </span>
        <span className={styles.line}>
          <span className={styles.bracket}>{'}'}</span>
        </span>
      </pre>
    </div>
  );
};

export default ContactCode;

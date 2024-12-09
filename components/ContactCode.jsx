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
          <span className={styles.spacing}>  </span><span className={styles.property}>"email"</span>: <span className={styles.string}>"deshmukhsakshi296@gmail.com"</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>  </span><span className={styles.property}>"location"</span>: <span className={styles.string}>"Pune, India 📍"</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>  </span><span className={styles.property}>"socials"</span>: <span className={styles.bracket}>{'{'}</span>
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.property}>"github"</span>: <a href="https://github.com/deshmukh-sakshi" target="_blank" rel="noopener noreferrer" className={styles.string}>"@deshmukh-sakshi"</a>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.property}>"linkedin"</span>: <a href="https://www.linkedin.com/in/sakshi-deshmukh-0596852b8/" target="_blank" rel="noopener noreferrer" className={styles.string}>"sakshi-deshmukh"</a>
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>  </span><span className={styles.bracket}>{'}'}</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>  </span><span className={styles.property}>"projects"</span>: <span className={styles.bracket}>{'{'}</span>
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.property}>"Trirang"</span>: <span className={styles.bracket}>{'{'}</span>
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>      </span><span className={styles.property}>"description"</span>: <span className={styles.string}>"Sustainable Development project"</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>      </span><span className={styles.property}>"url"</span>: <a href="https://trirang.netlify.app/" target="_blank" rel="noopener noreferrer" className={styles.string}>"https://trirang.netlify.app/"</a>
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.bracket}>{'}'}</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.property}>"Bharat Philately"</span>: <span className={styles.bracket}>{'{'}</span>
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>      </span><span className={styles.property}>"description"</span>: <span className={styles.string}>"National Philatelic Community Platform"</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>      </span><span className={styles.property}>"url"</span>: <a href="https://bharatphilately.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.string}>"https://bharatphilately.vercel.app/"</a>
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.bracket}>{'}'}</span>
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>  </span><span className={styles.bracket}>{'}'}</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>  </span><span className={styles.property}>"interests"</span>: <span className={styles.bracket}>{'['}</span>
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.string}>"Full Stack Development"</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.string}>"Open Source"</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.string}>"Cloud Computing"</span>
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>  </span><span className={styles.bracket}>{']'}</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>  </span><span className={styles.property}>"skills"</span>: <span className={styles.bracket}>{'['}</span>
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.string}>"JavaScript"</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.string}>"React.js"</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.string}>"Node.js"</span>,
        </span>
        <span className={styles.line}>
          <span className={styles.spacing}>    </span><span className={styles.string}>"Python"</span>
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

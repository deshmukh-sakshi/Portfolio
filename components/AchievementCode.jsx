const AchievementCode = () => {
  return (
    <div className="code">
      <p className="line">
        <span className="className">class</span>{' '}
        <span className="className">Education</span>{' '}
        <span className="punctuation">{'{'}</span>
      </p>

      <p className="line">
        &nbsp;&nbsp;<span className="key">constructor</span>
        <span className="punctuation">() {'{'}</span>
      </p>

      <p className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="key">this</span>
        <span className="punctuation">.</span>
        <span className="key">degree</span> 
        <span className="punctuation">=</span>{' '}
        <span className="value">"B.Tech Computer Engineering"</span>
      </p>

      <p className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="key">this</span>
        <span className="punctuation">.</span>
        <span className="key">university</span>
        <span className="punctuation">=</span>{' '}
        <span className="value">"Your University Name"</span>
      </p>

      <p className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="key">this</span>
        <span className="punctuation">.</span>
        <span className="key">year</span>
        <span className="punctuation">=</span>{' '}
        <span className="value">"2021-2025"</span>
      </p>

      <p className="line">
        &nbsp;&nbsp;<span className="punctuation">{'}'}</span>
      </p>

      <p className="line">
        &nbsp;&nbsp;<span className="key">achievements</span>
        <span className="punctuation">() {'{'}</span>
      </p>

      <p className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="key">return</span> <span className="punctuation">{'['}</span>
      </p>

      <p className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="value">"CGPA: 8.5/10"</span>
        <span className="punctuation">,</span>
      </p>

      <p className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="value">"Class XII: 95%"</span>
        <span className="punctuation">,</span>
      </p>

      <p className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="value">"Class X: 92%"</span>
      </p>

      <p className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="punctuation">{']'}</span>
      </p>

      <p className="line">
        &nbsp;&nbsp;<span className="punctuation">{'}'}</span>
      </p>

      <p className="line">
        &nbsp;&nbsp;<span className="key">certifications</span>
        <span className="punctuation">() {'{'}</span>
      </p>

      <p className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="key">return</span> <span className="punctuation">{'['}</span>
      </p>

      <p className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="value">"Web Development - Udemy"</span>
        <span className="punctuation">,</span>
      </p>

      <p className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="value">"Python Programming - Coursera"</span>
      </p>

      <p className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="punctuation">{']'}</span>
      </p>

      <p className="line">
        &nbsp;&nbsp;<span className="punctuation">{'}'}</span>
      </p>

      <p className="line">
        <span className="punctuation">{'}'}</span>
      </p>
    </div>
  );
};

export default AchievementCode; 
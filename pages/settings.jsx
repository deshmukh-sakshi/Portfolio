import ThemeInfo from '../components/ThemeInfo';
import styles from '../styles/SettingsPage.module.css';

const SettingsPage = () => {
  return (
    <div className={styles.settings}>
      <header className={styles.header}>
        <h1>Settings</h1>
        <p className={styles.subtitle}>Customize your experience</p>
      </header>

      <section className={styles.profileSection}>
        <h2>Profile</h2>
        <div className={styles.user}>
          <img 
            src="/sakshi.jpg" 
            alt="Sakshi Deshmukh" 
            height={100} 
            width={100} 
            className={styles.avatar}
          />
          <div className={styles.userInfo}>
            <h3>Sakshi Deshmukh</h3>
            <p>Software Engineer</p>
            <span className={styles.status}>Available for hire</span>
          </div>
        </div>
      </section>

      <section className={styles.themesSection}>
        <h2>Manage Themes</h2>
        <p className={styles.sectionDescription}>
          Choose from our collection of VS Code-inspired themes
        </p>
        <div className={styles.themeGrid}>
          <ThemeInfo
            name="Dracula"
            icon="/dracula.png"
            publisher="Dracula Theme"
            theme="dracula"
            description="Official Dracula Theme. A dark theme for many editors, shells, and more."
          />
          <ThemeInfo
            name="GitHub Dark"
            icon="/github-dark.png"
            publisher="GitHub"
            theme="github-dark"
            description="GitHub theme for VS Code"
          />
          <ThemeInfo
            name="Ayu Dark"
            icon="/ayu.png"
            publisher="teabyii"
            theme="ayu-dark"
            description="A simple theme with bright colors."
          />
          <ThemeInfo
            name="Ayu Mirage"
            icon="/ayu.png"
            publisher="teabyii"
            theme="ayu-mirage"
            description="A simple theme with bright colors."
          />
          <ThemeInfo
            name="Nord"
            icon="/nord.png"
            publisher="arcticicestudio"
            theme="nord"
            description="An arctic, north-bluish clean and elegant Visual Studio Code theme."
          />
          <ThemeInfo
            name="Night Owl"
            icon="/night-owl.png"
            publisher="sarah.drasner"
            theme="night-owl"
            description="A VS Code theme for the night owls out there."
          />
        </div>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Settings' },
  };
}

export default SettingsPage;

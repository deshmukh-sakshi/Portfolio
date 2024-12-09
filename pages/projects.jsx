import ProjectCard from '../components/ProjectCard';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Trirang",
      shortDescription: "Sustainable Development",
      description: "An innovative platform dedicated to promoting sustainable development through interactive tools and real-time environmental impact tracking.",
      techStack: ["React", "JavaScript", "Node.js", "MongoDB"],
      demo: "https://trirang.netlify.app/",
      github: "https://github.com/username/trirang"
    },
    {
      id: 2,
      title: "Bharat Philately",
      shortDescription: "Digital Philatelic Platform",
      description: "A comprehensive digital platform connecting stamp collectors across India, featuring real-time auctions, secure trading, and an extensive stamp database.",
      techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "Redis"],
      demo: "https://bharatphilately.vercel.app/",
      github: "https://github.com/username/bharat-philately"
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Featured Projects</h2>
      <div className={styles.grid}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Projects' },
  };
}

export default ProjectsPage;

import ProjectCard from '../components/ProjectCard';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Nexus Feed",
      shortDescription: "Advanced Social Platform",
      description: "High-concurrency social platform using Java and Spring Boot with scalable PostgreSQL database. Features secure REST APIs and advanced algorithms for content feed optimization.",
      techStack: ["Java", "Spring Boot", "React.js", "PostgreSQL"],
      demo: "https://nexus-feed.vercel.app/"
    },
    {
      id: 2,
      title: "WorkOrbit",
      shortDescription: "Freelance Platform",
      description: "Scalable, fault-tolerant Spring Boot backend supporting 1,000+ concurrent requests with role-based JWT authentication and secure payment processing. Reduced transaction failures by 15%.",
      techStack: ["Spring Boot", "Spring Security", "JWT", "PostgreSQL"],
      demo: "https://work-orbit.netlify.app/"
    },
    {
      id: 3,
      title: "Study Mentor AI",
      shortDescription: "Multi-Agent AI Mentor",
      description: "Multi-agent AI mentor using Azure OpenAI and Autogen Framework that boosted quiz accuracy by 25% for 50+ pilot users. Delivered 99.9% uptime and 1.3s average response time.",
      techStack: ["Azure OpenAI", "Azure AI Search", "Autogen Framework"],
      demo: "https://youtu.be/Oub-omQwFWg?si=epPbjw_lym5cNhRG"
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

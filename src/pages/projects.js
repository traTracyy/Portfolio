import Head from 'next/head';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';
import projectsData from '../data/projects.json';

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects | Tracy (Khor You Qi)</title>
        <meta name="description" content="Portfolio of AI and ML projects by Tracy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>My Projects</h1>
          
          <div className={styles.projectsGrid}>
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
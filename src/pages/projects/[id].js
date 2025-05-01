import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import styles from '../../styles/ProjectDetail.module.css';
import projectsData from '../../data/projects.json';
import YouTubeEmbed from '../../components/YouTubeEmbed';
import ProjectGallery from '../../components/ProjectGallery';

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const project = projectsData.find(p => p.id === id);
  
  if (router.isFallback || !project) {
    return (
      <div className={styles.loading}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>{project.title} | Tracy (Khor You Qi)</title>
        <meta name="description" content={project.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.backLink}>
            <Link href="/projects">
              ← Back to Projects
            </Link>
          </div>
          
          <h1 className={styles.title}>{project.title}</h1>
          
          <ProjectGallery images={project.images} />
          <div className={styles.projectContent}>
            <div className={styles.description}>
              <h2>Overview</h2>
              <p>{project.description}</p>
            </div>
            
            <div className={styles.details}>
              <h2>Details</h2>
              <p>{project.details}</p>
            </div>
            
            {project.technologies && (
              <div className={styles.technologies}>
                <h2>Technologies Used</h2>
                <ul className={styles.techList}>
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.language && (
              <div className={styles.languages}>
                <h2>Programming Language Used</h2>
                <ul className={styles.langList}>
                  {project.language.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.github && (
              <div className={styles.links}>
                <h2>Project Links</h2>
                <div className={styles.linkContainer}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                    View on GitHub
                  </a>
                </div>
              </div>
            )}
            
            {project.youtube && (
              <div className="video-section">
                <h3>Project Demo</h3>
                <YouTubeEmbed embedId={project.youtube} title={`${project.title} Demo`} />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = projectsData.map(project => ({
    params: { id: project.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projectsData.find(p => p.id === params.id);
  
  if (!project) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      project,
    },
  };
}
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tracy (Khor You Qi) - Portfolio</title>
        <meta name="description" content="AI & Machine Learning Enthusiast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.heroSection}>
            <div className={styles.gridBg}></div>
            <div className={styles.introContent}>
              <h1 className={styles.title}>Hi, I'm Tracy (Khor You Qi)</h1>
              <h2 className={styles.subtitle}>Computer Science Graduate | AI & Machine Learning Enthusiast</h2>
              
              <div className={styles.bio}>
                <p>
                  A First-Class Honours graduate in Computer Science (AI) from Asia Pacific University of Technology & 
                  Innovation (APU), equipped with hands-on expertise in designing and deploying AI systems. Passionate 
                  about leveraging machine learning, data analytics, and cloud technologies to solve real-world challenges.
                </p>
              </div>
            </div>
            
            <div className={styles.avatarContainer}>
              <div className={styles.avatar}>
                {/* Character 1 image is set via CSS */}
                <div className={styles.avatarPlaceholder}></div>
              </div>
            </div>
          </div>
          
          <div className={styles.skillsSection}>
            <div className={styles.gridBg}></div>
            <div className={styles.avatarSide}>
              {/* Character 2 image is set via CSS */}
              <div className={styles.avatarSidePlaceholder}></div>
            </div>
            
            <div className={styles.skillsContent}>
              <h2 className={styles.skillsTitle}>Technical Skills</h2>
              
              <div className={styles.skillCategory}>
                <h3>Machine Learning & AI</h3>
                <ul className={styles.skillsList}>
                  <li>Deep Learning: TensorFlow, Neural Networks, LLMs (OpenAI API)</li>
                  <li>Data Analysis: Predictive Modeling, Statistical Analysis (Python, R)</li>
                  <li>MLOps: Development, End-to-end pipeline design (Scikit-learn, Azure ML)</li>
                </ul>
              </div>
              
              <div className={styles.skillCategory}>
                <h3>Programming Languages</h3>
                <ul className={styles.skillsList}>
                  <li>Proficient: Python (Pandas, NumPy), C#, Java</li>
                  <li>Intermediate: C++, SQL, R, MATLAB</li>
                  <li>Domain-Specific: AIML (Artificial Intelligence Markup Language)</li>
                </ul>
              </div>
              
              <div className={styles.skillCategory}>
                <h3>Tools & Platforms</h3>
                <ul className={styles.skillsList}>
                  <li>Cloud/Deployment: Microsoft Azure, SQL Server</li>
                  <li>Data Visualization: PowerBI, Matplotlib/Seaborn</li>
                  <li>NLP/Chatbots: Pandorabots</li>
                </ul>
              </div>
              
              <div className={styles.skillCategory}>
                <h3>Soft Skills</h3>
                <ul className={styles.skillsList}>
                  <li>Problem Solving: Analytical approach to solutions and optimization</li>
                  <li>Collaboration: Agile teamwork and cross-functional communication</li>
                  <li>Adaptability: Quick learner in emerging tech (e.g., generative AI tools)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact | Tracy (Khor You Qi)</title>
        <meta name="description" content="Contact information for Tracy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.contactSection}>
            <div className={styles.contactInfo}>
              <h2 className={styles.title}>Contact Information</h2>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <div className={styles.contactLabel}>Email:</div>
                  <div className={styles.contactValue}>
                    <a href="mailto:khoryouqi@hotmail.com">khoryouqi@hotmail.com</a>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <div className={styles.contactLabel}>Phone Number:</div>
                  <div className={styles.contactValue}>+60 13-4316833</div>
                </div>
                
                <div className={styles.contactItem}>
                  <div className={styles.contactLabel}>LinkedIn:</div>
                  <div className={styles.contactValue}>
                    <a href="https://www.linkedin.com/in/khor-you-qi-tracy/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/khor-you-qi-tracy
                    </a>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <div className={styles.contactLabel}>Github:</div>
                  <div className={styles.contactValue}>
                    <a href="https://github.com/traTracyy" target="_blank" rel="noopener noreferrer">
                      github.com/traTracyy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
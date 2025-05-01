import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          © {currentYear} Tracy (Khor You Qi). All rights reserved.
        </div>
        
        <div className={styles.socialLinks}>
          <a 
            href="https://www.linkedin.com/in/khor-you-qi-tracy/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src="/icon/linkedin-icon.svg" alt="LinkedIn" width={24} height={24} />
          </a>
          
          <a 
            href="https://github.com/traTracyy" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src="/icon/github-icon.svg" alt="GitHub" width={24} height={24} />
          </a>
          
          <a 
            href="https://www.instagram.com/tratratracy_/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src="/icon/instagram-icon.svg" alt="Instagram" width={24} height={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
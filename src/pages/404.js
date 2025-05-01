import Link from 'next/link';
import styles from '../styles/NotFound.module.css';

export default function Custom404() {
  return (
    <div className={styles.container}>
      {/* Left Section - Image loaded via CSS */}
      <div className={styles.imageSection}></div>

      {/* Right Section - Content */}
      <div className={styles.contentSection}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>Oops! Page not found.</p>
        <Link href="/" className={styles.button}>
          Return to Home Page
        </Link>
      </div>
    </div>
  );
}
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link 
          href="/" 
          className={`${styles.navItem} ${router.pathname === "/" ? styles.active : ""}`}
        >
          Home
        </Link>
        <Link 
          href="/resume" 
          className={`${styles.navItem} ${router.pathname === "/resume" ? styles.active : ""}`}
        >
          Resume
        </Link>
        <Link 
          href="/projects" 
          className={`${styles.navItem} ${router.pathname.startsWith("/projects") ? styles.active : ""}`}
        >
          Project
        </Link>
        <Link 
          href="/contact" 
          className={`${styles.navItem} ${router.pathname === "/contact" ? styles.active : ""}`}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
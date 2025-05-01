import '../styles/globals.css';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="layout">
      <AnimatedBackground />
      <main className="main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
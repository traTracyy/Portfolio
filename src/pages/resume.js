import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/Resume.module.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import pdf from "../../src/assets/../assets/resume.pdf";

// Configure PDF.js worker (required for Next.js)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Head>
        <title>Resume | Tracy (Khor You Qi)</title>
        <meta name="description" content="Resume of Tracy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.resumeHeader}>
            <h1 className={styles.title}>My Resume</h1>
            <a 
              href={pdf}
              download="[Resume] Tracy_Khor_You_Qi.pdf"
              className={styles.downloadButton}
            >
              Download PDF
            </a>
          </div>
          
          <div className={styles.resumeViewer}>
            <div className={styles.pdfContainer}>
              <Document
                file={pdf}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div className={styles.loading}>Loading resume...</div>}
                error={<div className={styles.error}>Failed to load resume</div>}
              >
                <Page 
                  pageNumber={pageNumber} 
                  width={800}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
            </div>
          </div>
          <div className={styles.avatarCorner}>
            <div className={styles.avatarPlaceholder}></div>
          </div>
        </div>
      </main>
    </div>
  );
}
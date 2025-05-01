import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/ProjectGallery.module.css';

export default function ProjectGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getImageSrc = (imgPath) => {
    return imgPath.startsWith('http') ? imgPath : imgPath;
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={getImageSrc(images[currentIndex])}
          alt={`Project image ${currentIndex + 1}`}
          width={800}
          height={450}
          className={styles.mainImage}
          priority={currentIndex === 0}
        />
        
        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className={`${styles.navButton} ${styles.prevButton}`}
              aria-label="Previous image"
            >
              ←
            </button>
            <button 
              onClick={nextImage}
              className={`${styles.navButton} ${styles.nextButton}`}
              aria-label="Next image"
            >
              →
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className={styles.thumbnailContainer}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`${styles.thumbnail} ${
                index === currentIndex ? styles.activeThumbnail : ''
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
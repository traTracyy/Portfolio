import { useEffect, useRef } from 'react';
import styles from '../styles/AnimatedBackground.module.css';

export default function AnimatedBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    if (!container) return;
  
    container.innerHTML = '';
    const squaresCount = 8;
    const squares = [];

    for (let i = 0; i < squaresCount; i++) {
      const square = document.createElement('div');
      square.className = styles.square;
      
      const startX = Math.random() * 90 + 5; 
      const startY = Math.random() * 90 + 5; 
      
      const speedX = (Math.random() - 0.5) * 0.001;
      const speedY = (Math.random() - 0.5) * 0.001;

      square.style.left = `${startX}%`;
      square.style.top = `${startY}%`;
      square.dataset.speedX = speedX;
      square.dataset.speedY = speedY;

      container.appendChild(square);
      squares.push(square);
    }

    let animationId;
    const animate = () => {
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      
      squares.forEach(square => {
        const squareWidth = square.offsetWidth;
        const squareHeight = square.offsetHeight;
        let currentX = parseFloat(square.style.left) / 100 * containerWidth;
        let currentY = parseFloat(square.style.top) / 100 * containerHeight;
        const speedX = parseFloat(square.dataset.speedX);
        const speedY = parseFloat(square.dataset.speedY);
        
        currentX += speedX * containerWidth;
        currentY += speedY * containerHeight;
        
        if (currentX <= 0 || currentX >= containerWidth - squareWidth) {
          square.dataset.speedX = -speedX;
          currentX = Math.max(0, Math.min(currentX, containerWidth - squareWidth));
        }
        
        if (currentY <= 0 || currentY >= containerHeight - squareHeight) {
          square.dataset.speedY = -speedY;
          currentY = Math.max(0, Math.min(currentY, containerHeight - squareHeight));
        }
        
        square.style.left = `${(currentX / containerWidth) * 100}%`;
        square.style.top = `${(currentY / containerHeight) * 100}%`;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <div ref={containerRef} className={styles.container}></div>;
}
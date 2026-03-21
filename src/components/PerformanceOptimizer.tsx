import { useEffect } from 'react';

// Performance optimization utilities
export const useScrollOptimization = () => {
  useEffect(() => {
    // Optimize scroll performance
    let rafId: number;
    
    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        // Throttle scroll events to 60fps
        document.body.style.setProperty('--scroll-y', `${window.scrollY}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);
};

export const useImageOptimization = () => {
  useEffect(() => {
    // Lazy load images when they come into viewport
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px'
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    return () => {
      images.forEach(img => imageObserver.unobserve(img));
    };
  }, []);
};

// CSS-in-JS performance optimizations
export const applyPerformanceStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    /* Performance optimizations */
    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    /* Hardware acceleration for transforms */
    .hover-lift,
    .glass,
    .animate-fade-in,
    .animate-fade-in-up,
    .animate-slide-in-left {
      transform: translateZ(0);
      backface-visibility: hidden;
      perspective: 1000px;
    }
    
    /* Reduce paint on scroll */
    body {
      contain: layout style paint;
    }
    
    /* Optimize images */
    img {
      content-visibility: auto;
      contain-intrinsic-size: 0 0;
    }
    
    /* Smooth scrolling with performance */
    html {
      scroll-behavior: smooth;
      scroll-padding-top: 80px;
    }
    
    /* Reduce repaints for sticky elements */
    .sticky {
      will-change: transform;
    }
  `;
  
  document.head.appendChild(style);
  
  return () => {
    if (document.head.contains(style)) {
      document.head.removeChild(style);
    }
  };
};

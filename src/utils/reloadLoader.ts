import { useState, useEffect } from 'react';

export const useReloadLoader = () => {
  const [showLoader, setShowLoader] = useState(false);

  const showReloadLoader = () => {
    setShowLoader(true);
    // Auto-hide after 2 seconds
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  };

  // Handle page reload
  useEffect(() => {
    const handleBeforeUnload = () => {
      setShowLoader(true);
    };

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        setShowLoader(true);
        setTimeout(() => {
          setShowLoader(false);
        }, 1500);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pageshow', handlePageShow);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  return {
    showLoader,
    showReloadLoader,
    setShowLoader
  };
};

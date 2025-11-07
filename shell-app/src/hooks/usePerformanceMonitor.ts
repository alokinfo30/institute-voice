import { useEffect, useRef } from 'react';

export const usePerformanceMonitor = (componentName: string) => {
  const mountTimeRef = useRef<number>(0);
  const updateCountRef = useRef<number>(0);

  useEffect(() => {
    mountTimeRef.current = performance.now();

    return () => {
      const unmountTime = performance.now();
      const lifetime = unmountTime - mountTimeRef.current;
      
      // Log component lifetime for performance analysis
      if (lifetime > 1000) { // Only log if component lived for more than 1 second
        console.log(`🚀 ${componentName} Performance:`, {
          lifetime: `${lifetime.toFixed(2)}ms`,
          updates: updateCountRef.current,
          averageUpdateTime: lifetime / (updateCountRef.current || 1),
        });
      }
    };
  }, [componentName]);

  useEffect(() => {
    updateCountRef.current += 1;
  });
};

export const useRenderCount = (componentName: string) => {
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current += 1;
    console.log(`🔄 ${componentName} rendered:`, renderCountRef.current);
  });
};
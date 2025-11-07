import { useState, useEffect } from 'react';

export const useOptimizedImage = (src: string, placeholder?: string) => {
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!src) {
      setIsLoading(false);
      return;
    }

    const img = new Image();
    let isMounted = true;

    const loadImage = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Create a promise for image loading
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });

        if (isMounted) {
          setImageSrc(src);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to load image');
          setIsLoading(false);
          console.error('Image loading error:', err);
        }
      }
    };

    loadImage();

    return () => {
      isMounted = false;
    };
  }, [src]);

  return { imageSrc, isLoading, error };
};
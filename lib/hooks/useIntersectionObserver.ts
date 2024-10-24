import { useEffect, useRef } from 'react';

interface UseIntersectionObserverProps {
  onIntersect: () => void;
  enabled?: boolean;
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export const useIntersectionObserver = ({
  onIntersect,
  enabled = true,
  threshold = 0.1,
  root = null,
  rootMargin = '0px',
}: UseIntersectionObserverProps) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect();
          }
        });
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    const element = targetRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [enabled, root, rootMargin, threshold, onIntersect]);

  return targetRef;
};

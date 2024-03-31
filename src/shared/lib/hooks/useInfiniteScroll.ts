import { type MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
  triggerRef: MutableRefObject<HTMLElement | null>;
  wrapperRef?: MutableRefObject<HTMLElement | null>;
  callback?: () => void;
}

export function useInfiniteScroll({
  callback,
  wrapperRef,
  triggerRef,
}: UseInfiniteScrollOptions) {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const wrapperElement = wrapperRef?.current || null;
    const triggerElement = triggerRef.current;

    if (triggerElement && callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      if (observer && triggerElement) {
        observer.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
}

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface IScrollRevealProps {
  children: React.ReactNode;
  direction?: 'from-bottom' | 'from-top' | 'from-left' | 'from-right' | 'fade-in';
  delay?: number;
  duration?: number;
  offset?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const ScrollReveal: React.FC<IScrollRevealProps> = ({
  children,
  direction = 'from-bottom',
  delay = 0,
  duration = 600,
  offset = 50,
  className,
  threshold = 0.1,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: `${offset}px`,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, offset, once, delay]);

  const getDirectionStyles = () => {
    const baseTransform = isVisible ? 'translate3d(0, 0, 0)' : '';
    
    switch (direction) {
      case 'from-bottom':
        return {
          transform: baseTransform || 'translate3d(0, 40px, 0)',
        };
      case 'from-top':
        return {
          transform: baseTransform || 'translate3d(0, -40px, 0)',
        };
      case 'from-left':
        return {
          transform: baseTransform || 'translate3d(-40px, 0, 0)',
        };
      case 'from-right':
        return {
          transform: baseTransform || 'translate3d(40px, 0, 0)',
        };
      case 'fade-in':
      default:
        return {
          transform: 'translate3d(0, 0, 0)',
        };
    }
  };

  const styles = {
    opacity: isVisible ? 1 : 0,
    transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    ...getDirectionStyles(),
  };

  return (
    <>
      <style jsx>{`
        .scroll-reveal-wrapper {
          will-change: opacity, transform;
        }
      `}</style>
      <div
        ref={ref}
        className={cn('scroll-reveal-wrapper', className)}
        style={styles}
      >
        {children}
      </div>
    </>
  );
};

export default ScrollReveal;
export type { IScrollRevealProps };

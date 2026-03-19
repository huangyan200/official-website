import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ICountUpNumberProps {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  className?: string;
  delay?: number;
  onEnd?: () => void;
}

const CountUpNumber: React.FC<ICountUpNumberProps> = ({
  end,
  duration = 2000,
  start = 0,
  decimals = 0,
  prefix = '',
  suffix = '',
  separator = ',',
  className,
  delay = 0,
  onEnd
}) => {
  const [current, setCurrent] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const target = ref.current;
    if (!target || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    let disconnected = false;
    const fallbackTimer = window.setTimeout(() => {
      if (!disconnected) {
        setIsVisible(true);
      }
    }, 400);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.clearTimeout(fallbackTimer);
          setIsVisible(true);
          observer.disconnect();
          disconnected = true;
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(target);

    return () => {
      disconnected = true;
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setCurrent(end);
      if (onEnd) onEnd();
      return;
    }

    const timer = setTimeout(() => {
      let startTime: number | null = null;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const value = start + (end - start) * easeOutQuart;
        
        setCurrent(value);
        
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          if (onEnd) onEnd();
        }
      };
      
      animationRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(timer);
    };
  }, [isVisible, start, end, duration, delay, onEnd]);

  const formatNumber = (num: number): string => {
    const fixed = num.toFixed(decimals);
    const parts = fixed.split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    const decimalPart = parts[1] ? `.${parts[1]}` : '';
    return `${integerPart}${decimalPart}`;
  };

  return (
    <>
      <style jsx>{`
        .countup-number {
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          font-feature-settings: 'tnum';
          font-variant-numeric: tabular-nums;
        }
        .countup-pulse {
          animation: pulse 0.5s ease-out;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
      <span
        ref={ref}
        className={cn(
          'countup-number',
          className,
          isVisible && 'countup-pulse'
        )}
      >
        {prefix}{formatNumber(current)}{suffix}
      </span>
    </>
  );
};

export default CountUpNumber;

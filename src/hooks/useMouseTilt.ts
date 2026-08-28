import { useEffect, useRef, useState } from 'react';

interface MouseTiltOptions {
  maxTilt?: number;
  maxTranslate?: number;
  sensitivity?: number;
  enabled?: boolean;
}

export function useMouseTilt<T extends HTMLElement = HTMLDivElement>(
  options: MouseTiltOptions = {}
) {
  const {
    maxTilt = 5,
    maxTranslate = 8,
    sensitivity = 1,
    enabled = true,
  } = options;
  const ref = useRef<T | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setStyle({
        transform: `
          perspective(1000px)
          rotateX(${-y * maxTilt * sensitivity}deg)
          rotateY(${x * maxTilt * sensitivity}deg)
          translateX(${x * maxTranslate * sensitivity}px)
          translateY(${y * maxTranslate * sensitivity}px)
        `,
      });
    };

    const handleLeave = () => {
      setStyle({ transform: 'none' });
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [maxTilt, maxTranslate, sensitivity, enabled]);

  return { ref, style };
}

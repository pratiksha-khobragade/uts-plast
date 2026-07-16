"use client";

import { useEffect, useRef, useState } from "react";

export function useCountUp(target, isVisible, duration = 1800, decimals = 0) {
  const [value, setValue] = useState(0);
  const frameRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      setValue(Number(current.toFixed(decimals)));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setValue(Number(target.toFixed(decimals)));
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isVisible, target, duration, decimals]);

  return decimals > 0 ? value.toFixed(decimals) : value;
}
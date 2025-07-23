// src/components/StickyOfferBar/useStickyObserver.ts
import { useEffect, useState } from "react";

export const useStickyObserver = (targetId) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [targetId]);

  return isVisible;
};

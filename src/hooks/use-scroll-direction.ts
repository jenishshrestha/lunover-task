"use client";

import { useState, useEffect } from "react";

type ScrollDirection = "up" | "down" | null;

/**
 * ===========================================================
 * Hook to determine if we are moving up or down
 * @returns
 * ===========================================================
 */
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const threshold = 10;
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - prevScrollY) < threshold) {
        ticking = false;
        return;
      }

      const newScrollDirection = scrollY > prevScrollY ? "down" : "up";

      setScrollDirection(newScrollDirection);
      setVisible(newScrollDirection === "up" || scrollY < 10);
      setPrevScrollY(scrollY > 0 ? scrollY : 0);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [prevScrollY]);

  return { scrollDirection, visible };
}

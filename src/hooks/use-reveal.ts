import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

interface RevealOptions {
  /** Fraction of the element that must be visible before it reveals. */
  threshold?: number;
  /** Keep the element revealed once it has been seen. */
  once?: boolean;
}

/**
 * Reveals an element the first time it scrolls into view. Falls back to an
 * immediately-visible state when IntersectionObserver or motion is unavailable.
 */
export const useReveal = <T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  once = true,
}: RevealOptions = {}) => {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, visible };
};

import { useEffect, useState } from "react";

/** Window scroll offset and 0–1 page progress, sampled on animation frames. */
export const useScrollPosition = () => {
  const [{ y, progress }, setState] = useState({ y: 0, progress: 0 });

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setState({
        y: window.scrollY,
        progress: scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0,
      });
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { y, progress };
};

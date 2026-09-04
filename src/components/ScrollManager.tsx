import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Keeps scrolling sane across client-side navigation: policy pages open at the
 * top, and a `/#section` link scrolls to that section once it has rendered.
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      // Wait a frame so the target section exists after a route change.
      const frame = requestAnimationFrame(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return () => cancelAnimationFrame(frame);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;

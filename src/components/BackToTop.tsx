import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll-position";

/** Floating scroll-to-top control that fades in once the page is scrolled. */
const BackToTop = () => {
  const { y } = useScrollPosition();
  const shown = y > 600;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={shown ? 0 : -1}
      className={cn(
        "fixed bottom-5 right-5 z-40 hidden h-11 w-11 items-center justify-center sm:flex rounded-full border border-border bg-card/90 text-primary backdrop-blur-md",
        "transition-all duration-300 hover:border-primary/50 hover:shadow-[0_10px_30px_-10px_hsl(42_65%_55%/0.7)]",
        shown
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default BackToTop;

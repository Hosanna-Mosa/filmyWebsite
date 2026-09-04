import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  Platform,
  getCurrentPlatform,
} from "@/lib/appLinks";
import { useScrollPosition } from "@/hooks/use-scroll-position";

/**
 * Mobile-only bar that keeps the store link one tap away once the visitor has
 * scrolled past the hero. Dismissible, and gone for the rest of the session.
 */
const StickyDownloadBar = () => {
  const [platform, setPlatform] = useState<Platform>("other");
  const [dismissed, setDismissed] = useState(false);
  const { y } = useScrollPosition();

  useEffect(() => setPlatform(getCurrentPlatform()), []);

  const shown = !dismissed && y > 560;
  const href = platform === "ios" ? APP_STORE_URL : PLAY_STORE_URL;
  const label = platform === "ios" ? "App Store" : "Google Play";

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-xl transition-transform duration-300 sm:hidden",
        shown ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!shown}
    >
      <div className="flex items-center gap-3">
        <img
          src="/filmyAppIcon.png"
          alt=""
          className="h-10 w-10 shrink-0 rounded-lg object-cover"
          width={40}
          height={40}
          loading="lazy"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground">
            FilmyConnect
          </p>
          <p className="truncate text-xs text-muted-foreground">
            Free on {label}
          </p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={shown ? 0 : -1}
          className="shrink-0 rounded-md gold-gradient px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Get
        </a>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss download bar"
          tabIndex={shown ? 0 : -1}
          className="shrink-0 p-1 text-muted-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default StickyDownloadBar;

import { Apple, ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  Platform,
  getCurrentPlatform,
  getStoreUrl,
} from "@/lib/appLinks";

const GooglePlayIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="M3.84 2.15 13.69 12 3.84 21.85A1.6 1.6 0 0 1 3 20.5V3.5c0-.59.34-1.11.84-1.35Z"
      fill="#00A0FF"
    />
    <path d="M6.05 2.66 16.81 8.88l-2.27 2.27L6.05 2.66Z" fill="#00F076" />
    <path
      d="M20.16 10.81c.36.28.59.7.59 1.19s-.23.91-.58 1.19l-2.28 1.31L15.39 12l2.5-2.5 2.27 1.31Z"
      fill="#FFC900"
    />
    <path d="M16.81 15.12 6.05 21.34l8.49-8.49 2.27 2.27Z" fill="#FF3A44" />
  </svg>
);

type StoreBadgeSize = "default" | "sm";

interface StoreBadgeProps {
  store: "apple" | "google";
  size?: StoreBadgeSize;
  className?: string;
}

const STORES = {
  apple: {
    href: APP_STORE_URL,
    eyebrow: "Download on the",
    name: "App Store",
    label: "Download FilmyConnect on the Apple App Store",
  },
  google: {
    href: PLAY_STORE_URL,
    eyebrow: "Get it on",
    name: "Google Play",
    label: "Get FilmyConnect on Google Play",
  },
} as const;

export const StoreBadge = ({
  store,
  size = "default",
  className,
}: StoreBadgeProps) => {
  const { href, eyebrow, name, label } = STORES[store];
  const small = size === "sm";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "group relative flex items-center gap-3 overflow-hidden rounded-xl border border-border bg-secondary text-foreground",
        "transition-all duration-300 hover:-translate-y-1 hover:border-primary/50",
        "hover:shadow-[0_12px_32px_-12px_hsl(42_65%_55%/0.55)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none",
        small ? "px-4 py-3" : "px-5 py-4 sm:gap-4",
        className,
      )}
    >
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/15 to-transparent transition-transform duration-700 group-hover:translate-x-full motion-reduce:hidden"
        aria-hidden="true"
      />
      <span
        className={cn(
          "relative flex shrink-0 items-center justify-center rounded-lg bg-background transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none",
          small ? "h-9 w-9" : "h-11 w-11",
        )}
      >
        {store === "apple" ? (
          <Apple className={cn("text-primary", small ? "h-4 w-4" : "h-5 w-5")} />
        ) : (
          <GooglePlayIcon className={small ? "h-4 w-4" : "h-5 w-5"} />
        )}
      </span>
      <span className="relative">
        <span
          className={cn(
            "hidden uppercase tracking-[0.2em] text-muted-foreground sm:block",
            small ? "text-[10px]" : "text-xs",
          )}
        >
          {eyebrow}
        </span>
        <span
          className={cn(
            "block font-semibold leading-tight",
            small ? "text-sm sm:text-sm" : "text-base sm:text-lg",
          )}
        >
          {name}
        </span>
      </span>
    </a>
  );
};

interface StoreButtonsProps {
  size?: StoreBadgeSize;
  className?: string;
}

/** Both store badges, stacking on narrow screens. */
const StoreButtons = ({ size = "default", className }: StoreButtonsProps) => (
  <div className={cn("flex flex-col gap-3 sm:flex-row sm:gap-4", className)}>
    <StoreBadge store="apple" size={size} />
    <StoreBadge store="google" size={size} />
  </div>
);

export default StoreButtons;

/**
 * Sends mobile visitors straight to their own store and everyone else down to
 * the download section. Resolved after mount so SSR/first paint stay stable.
 */
export const PrimaryDownloadButton = ({ className }: { className?: string }) => {
  const [platform, setPlatform] = useState<Platform>("other");

  useEffect(() => setPlatform(getCurrentPlatform()), []);

  const storeUrl = getStoreUrl(platform);
  const label =
    platform === "ios"
      ? "Download on the App Store"
      : platform === "android"
        ? "Get it on Google Play"
        : "Download the App";

  return (
    <a
      href={storeUrl ?? "#get-the-app"}
      {...(storeUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex min-h-[3.75rem] items-center gap-2 rounded-xl gold-gradient px-6 py-3 text-sm font-semibold text-primary-foreground sm:min-h-0 sm:py-3.5",
        "transition-all duration-300 hover:opacity-90 hover:shadow-[0_12px_32px_-8px_hsl(42_65%_55%/0.7)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      {storeUrl ? (
        <Download className="h-4 w-4" />
      ) : null}
      {label}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
    </a>
  );
};

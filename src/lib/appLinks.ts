export const APP_STORE_URL =
  "https://apps.apple.com/in/app/filmyconnect/id6764609441";

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=app.rork.filmy";

export type Platform = "ios" | "android" | "other";

/**
 * Detects the visitor's mobile platform so store CTAs can send them straight
 * to the right listing. iPadOS masquerades as macOS, so it is matched on the
 * touch-point count instead of the UA string alone.
 */
export const detectPlatform = (
  userAgent: string,
  maxTouchPoints = 0,
): Platform => {
  if (/android/i.test(userAgent)) return "android";
  if (/iphone|ipad|ipod/i.test(userAgent)) return "ios";
  if (/macintosh|mac os x/i.test(userAgent) && maxTouchPoints > 1) return "ios";
  return "other";
};

export const getCurrentPlatform = (): Platform => {
  if (typeof navigator === "undefined") return "other";
  return detectPlatform(navigator.userAgent, navigator.maxTouchPoints ?? 0);
};

/** The store a visitor on this platform should land on, if we can tell. */
export const getStoreUrl = (platform: Platform): string | null => {
  if (platform === "ios") return APP_STORE_URL;
  if (platform === "android") return PLAY_STORE_URL;
  return null;
};

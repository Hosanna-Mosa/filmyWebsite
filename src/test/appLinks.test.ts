import { describe, expect, it } from "vitest";
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  detectPlatform,
  getStoreUrl,
} from "@/lib/appLinks";

describe("store links", () => {
  it("points at the published listings", () => {
    expect(APP_STORE_URL).toBe(
      "https://apps.apple.com/in/app/filmyconnect/id6764609441",
    );
    expect(PLAY_STORE_URL).toBe(
      "https://play.google.com/store/apps/details?id=app.rork.filmy",
    );
  });
});

describe("detectPlatform", () => {
  it("detects Android", () => {
    expect(
      detectPlatform("Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit"),
    ).toBe("android");
  });

  it("detects iPhone", () => {
    expect(
      detectPlatform("Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)"),
    ).toBe("ios");
  });

  it("detects iPadOS masquerading as macOS", () => {
    expect(
      detectPlatform("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)", 5),
    ).toBe("ios");
  });

  it("treats a real Mac as desktop", () => {
    expect(
      detectPlatform("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)", 0),
    ).toBe("other");
  });

  it("maps platforms to their store", () => {
    expect(getStoreUrl("ios")).toBe(APP_STORE_URL);
    expect(getStoreUrl("android")).toBe(PLAY_STORE_URL);
    expect(getStoreUrl("other")).toBeNull();
  });
});

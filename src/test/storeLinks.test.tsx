import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "@/App";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/appLinks";

describe("home page store links", () => {
  it("renders both store badges pointing at the live listings", () => {
    render(<App />);

    const appleLinks = screen.getAllByRole("link", {
      name: /Apple App Store/i,
    });
    const googleLinks = screen.getAllByRole("link", {
      name: /Google Play/i,
    });

    expect(appleLinks.length).toBeGreaterThan(0);
    expect(googleLinks.length).toBeGreaterThan(0);

    for (const link of appleLinks) {
      expect(link).toHaveAttribute("href", APP_STORE_URL);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }

    for (const link of googleLinks) {
      expect(link).toHaveAttribute("href", PLAY_STORE_URL);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});

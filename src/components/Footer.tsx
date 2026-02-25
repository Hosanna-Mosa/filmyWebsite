import { Film, Apple, Play } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
    { label: "Account Deletion Policy", href: "/account-deletion-policy" },
    { label: "Contact Us", href: "/contact-us" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded">
                <img
                  src="/filmyAppIcon.png"
                  alt="FilmyApp icon"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="font-heading text-lg font-bold text-foreground">FILMYAPP</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Redefining how the world makes cinema. The exclusive ecosystem for high-end professional film production and networking.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-label text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-label text-foreground mb-4">Get the App</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Download FilmyApp for iOS and Android.
            </p>
            <div className="flex flex-col gap-3">
              <div
                title="App is under development"
                aria-disabled="true"
                className="flex cursor-not-allowed items-center gap-3 rounded-lg border border-border bg-secondary px-4 py-3 text-foreground opacity-60"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-background">
                  <Apple className="h-4 w-4 text-primary" />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Download on the
                  </span>
                  <span className="block text-sm font-semibold">App Store</span>
                </span>
              </div>
              <div
                title="App is under development"
                aria-disabled="true"
                className="flex cursor-not-allowed items-center gap-3 rounded-lg border border-border bg-secondary px-4 py-3 text-foreground opacity-60"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-background">
                  <Play className="h-4 w-4 text-primary" />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Get it on
                  </span>
                  <span className="block text-sm font-semibold">Google Play</span>
                </span>
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Apps are under development.</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 FilmyApp Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

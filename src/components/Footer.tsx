import { ArrowUp, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import StoreButtons from "@/components/StoreButtons";

const footerLinks = {
  Company: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
    { label: "Account Deletion Policy", href: "/account-deletion-policy" },
    { label: "Child Safety & CSAM Policy", href: "/child-safety" },
    { label: "Contact Us", href: "/contact-us" },
  ],
};

const Footer = () => {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border py-14 sm:py-16">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-4">
            <Link to="/" className="group flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none">
                <img
                  src="/logo.jpeg"
                  alt="FilmyConnect icon"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={32}
                  height={32}
                />
              </span>
              <span className="font-heading text-lg font-bold text-foreground">
                FILMYCONNECT
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Redefining how the world makes cinema. The exclusive ecosystem for
              high-end professional film production and networking.
            </p>
            <div className="max-w-sm rounded-xl border border-border bg-secondary p-4">
              <h4 className="text-label mb-3 text-foreground">Get in touch</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:support@filmyconnect24.com"
                    className="group/contact flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover/contact:bg-primary group-hover/contact:text-primary-foreground">
                      <Mail className="h-4 w-4" />
                    </span>
                    support@filmyconnect24.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919494894648"
                    className="group/contact flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover/contact:bg-primary group-hover/contact:text-primary-foreground">
                      <Phone className="h-4 w-4" />
                    </span>
                    +91 94948 94648
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/filmyconnectofficial"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="FilmyConnect on Instagram"
                    className="group/contact flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover/contact:bg-primary group-hover/contact:text-primary-foreground">
                      <Instagram className="h-4 w-4" />
                    </span>
                    @filmyconnectofficial
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-label mb-4 text-foreground">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-label mb-4 text-foreground">Get the App</h4>
            <p className="mb-4 text-sm text-muted-foreground">
              Download FilmyConnect for iOS and Android.
            </p>
            <StoreButtons size="sm" className="sm:flex-col" />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 FilmyConnect Inc. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

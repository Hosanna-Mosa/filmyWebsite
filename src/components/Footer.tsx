import { ArrowUp, Mail } from "lucide-react";
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
                  src="/filmyAppIcon.png"
                  alt="FilmyApp icon"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={32}
                  height={32}
                />
              </span>
              <span className="font-heading text-lg font-bold text-foreground">
                FILMYAPP
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Redefining how the world makes cinema. The exclusive ecosystem for
              high-end professional film production and networking.
            </p>
            <a
              href="mailto:Filmyconnectpvt2@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              Filmyconnectpvt2@gmail.com
            </a>
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
            © 2026 FilmyApp Inc. All rights reserved.
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

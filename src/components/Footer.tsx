import { Film, ArrowRight } from "lucide-react";

const footerLinks = {
  Platform: ["Search Talent", "Post a Project", "Showcase", "Enterprise Solutions"],
  Company: ["Our Story", "Careers", "Press Kit", "Contact Us"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded gold-gradient">
                <Film className="h-4 w-4 text-primary-foreground" />
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
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-label text-foreground mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Exclusive industry insights delivered weekly.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-md border border-border bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <button className="rounded-md gold-gradient p-2 text-primary-foreground transition-opacity hover:opacity-90">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 FilmyApp Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((link) => (
              <a key={link} href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

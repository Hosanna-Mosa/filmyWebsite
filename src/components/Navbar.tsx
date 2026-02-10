import { Film, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = ["Showcase", "Features", "Community", "Pricing"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded gold-gradient">
            <Film className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-heading text-lg font-bold tracking-wide text-foreground">
            FILMYAPP
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-label text-muted-foreground transition-colors hover:text-primary"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Login
          </a>
          <a
            href="#"
            className="rounded-md gold-gradient px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Join the Set
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background p-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-label text-muted-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <a href="#" className="text-sm text-muted-foreground">Login</a>
            <a href="#" className="rounded-md gold-gradient px-5 py-2 text-center text-sm font-semibold text-primary-foreground">
              Join the Set
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

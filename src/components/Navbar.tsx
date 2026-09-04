import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll-position";

const navLinks = [
  { label: "Features", id: "features" },
  { label: "Roles", id: "roles" },
  { label: "Workflow", id: "workflow" },
  { label: "FAQ", id: "faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const { y, progress } = useScrollPosition();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const onHome = pathname === "/";
  const scrolled = y > 24;

  // Highlight whichever section currently owns the viewport.
  useEffect(() => {
    if (!onHome || typeof IntersectionObserver === "undefined") return;

    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (inView) setActiveId(inView.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHome]);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close the sheet once the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const close = (event: MediaQueryListEvent) => {
      if (event.matches) setMobileOpen(false);
    };
    query.addEventListener("change", close);
    return () => query.removeEventListener("change", close);
  }, []);

  const goToSection = (id: string) => {
    setMobileOpen(false);
    if (onHome) {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/85 shadow-[0_8px_32px_-16px_hsl(0_0%_0%/0.9)] backdrop-blur-xl"
          : "border-transparent bg-background/40 backdrop-blur-sm",
      )}
    >
      {/* Reading-progress rail */}
      <div
        className="absolute inset-x-0 bottom-0 h-px origin-left gold-gradient transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <div className="container flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="group flex items-center gap-2"
          aria-label="FilmyApp home"
        >
          <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none">
            <img
              src="/filmyAppIcon.png"
              alt=""
              className="h-full w-full object-cover"
              width={32}
              height={32}
            />
          </span>
          <span className="font-heading text-lg font-bold tracking-wide text-foreground">
            FILMYAPP
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => goToSection(link.id)}
              className={cn(
                "relative text-label transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:gold-gradient after:transition-transform after:duration-300 hover:after:scale-x-100",
                onHome && activeId === link.id
                  ? "text-primary after:scale-x-100"
                  : "text-muted-foreground hover:text-primary",
              )}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/contact-us"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <button
            type="button"
            onClick={() => goToSection("get-the-app")}
            className="rounded-md gold-gradient px-5 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_24px_-8px_hsl(42_65%_55%/0.8)]"
          >
            Get the App
          </button>
        </div>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="animate-slide-down border-t border-border bg-background/95 p-4 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => goToSection(link.id)}
                className={cn(
                  "rounded-md px-3 py-3 text-left text-label transition-colors",
                  onHome && activeId === link.id
                    ? "bg-secondary text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-primary",
                )}
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-3 text-label text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={() => goToSection("get-the-app")}
              className="mt-2 rounded-md gold-gradient px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Get the App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-camera.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12 py-20 lg:py-32">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full gold-gradient" />
            <span className="text-xs font-medium text-primary">Now in Beta for Professionals</span>
          </div>

          <h1 className="font-heading text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl">
            Where Film<br />
            Professionals<br />
            <span className="text-primary">Connect &amp; Create</span>
          </h1>

          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            The ultimate collaboration ecosystem for filmmakers. From pre-production
            to final cut, discover award-winning talent, manage global assets, and build
            your cinematic legacy.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md gold-gradient px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              View Demo
            </a>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <span className="text-label text-muted-foreground">Trusted by:</span>
            <div className="flex gap-4 text-muted-foreground/40">
              {["●", "■", "▲", "◆", "⬟"].map((s, i) => (
                <span key={i} className="text-lg">{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative rounded-xl overflow-hidden card-glow">
            <img
              src={heroImage}
              alt="Professional cinema camera on set with warm golden lighting"
              className="w-full h-auto rounded-xl"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="rounded-lg bg-card/80 backdrop-blur-sm border border-border p-4">
                <p className="text-label mb-1">Current Project</p>
                <p className="font-heading text-lg font-semibold text-foreground">The Midnight Noir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

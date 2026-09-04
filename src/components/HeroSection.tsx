import { useEffect, useRef, useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import heroImage from "@/assets/hero-camera.jpg";
import Reveal from "@/components/Reveal";
import StoreButtons, { PrimaryDownloadButton } from "@/components/StoreButtons";

const projects = [
  "The Midnight Noir",
  "Coastal Lines",
  "Neon Monsoon",
  "Last Light at Dawn",
];

const marqueeItems = [
  "Casting Calls",
  "Crew Networking",
  "Portfolio Reels",
  "Production Boards",
  "Verified Profiles",
  "Script Breakdowns",
];

const HeroSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [projectIndex, setProjectIndex] = useState(0);

  // Rotate the "current project" chip so the hero never looks static.
  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const timer = window.setInterval(
      () => setProjectIndex((index) => (index + 1) % projects.length),
      3200,
    );
    return () => window.clearInterval(timer);
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const node = cardRef.current;
    if (!node || event.pointerType === "touch") return;

    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 10 });
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden"
    >
      {/* Ambient backdrop: soft gold aurora over a faint production grid. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 grid-backdrop opacity-60" />
        <div className="absolute -left-32 top-10 h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-[110px] animate-aurora motion-reduce:animate-none" />
        <div className="absolute -right-24 bottom-0 h-[22rem] w-[22rem] rounded-full bg-primary/[0.07] blur-[120px] animate-aurora [animation-delay:-9s] motion-reduce:animate-none" />
      </div>

      <div className="container relative z-10 flex flex-col items-center gap-12 py-16 sm:py-20 lg:flex-row lg:py-32">
        <div className="flex-1 space-y-7 text-center lg:text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-pulse-ring motion-reduce:animate-none" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full gold-gradient" />
              </span>
              <span className="text-xs font-medium text-primary">
                Now live on iOS and Android
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl xl:text-7xl">
              Where Film
              <br />
              Professionals
              <br />
              <span className="gold-text">Connect &amp; Create</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto max-w-md text-base leading-relaxed text-muted-foreground lg:mx-0">
              The ultimate collaboration ecosystem for filmmakers. From
              pre-production to final cut, discover award-winning talent, manage
              global assets, and build your cinematic legacy.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap lg:items-start lg:justify-start">
              <PrimaryDownloadButton />
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-muted"
              >
                See what's inside
                <ChevronDown className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <StoreButtons size="sm" className="items-center lg:items-start" />
          </Reveal>

          <Reveal delay={400}>
            <div className="flex items-center justify-center gap-3 pt-2 lg:justify-start">
              <span className="flex gap-0.5" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </span>
              <span className="text-xs text-muted-foreground">
                Loved by crews across India
              </span>
            </div>
          </Reveal>
        </div>

        <div className="w-full flex-1 [perspective:1200px]">
          <Reveal delay={200}>
            <div
              ref={cardRef}
              onPointerMove={handlePointerMove}
              onPointerLeave={() => setTilt({ x: 0, y: 0 })}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
              className="card-glow relative overflow-hidden rounded-xl transition-transform duration-300 ease-out will-change-transform motion-reduce:transform-none"
            >
              <img
                src={heroImage}
                alt="Professional cinema camera on set with warm golden lighting"
                className="h-auto w-full rounded-xl"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />

              <div className="absolute inset-x-4 bottom-4">
                <div className="rounded-lg border border-border bg-card/80 p-4 backdrop-blur-sm">
                  <p className="text-label mb-1">Current Project</p>
                  <p
                    key={projectIndex}
                    className="animate-fade-in-up font-heading text-lg font-semibold text-foreground"
                  >
                    {projects[projectIndex]}
                  </p>
                </div>
              </div>

              <div className="absolute right-4 top-4 hidden animate-float rounded-lg border border-border bg-card/85 px-3 py-2 backdrop-blur-sm motion-reduce:animate-none sm:block">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Crew online
                </p>
                <p className="font-heading text-base font-semibold text-primary">
                  248 now
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Continuously scrolling capability strip. */}
      <div className="marquee-mask relative z-10 border-y border-border/60 py-4">
        <div className="marquee-track flex w-max gap-10 pr-10">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex shrink-0 items-center gap-3 text-label text-muted-foreground"
            >
              <span className="h-1 w-1 rounded-full gold-gradient" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

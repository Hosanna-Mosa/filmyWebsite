import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle, MessageSquare, Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const highlights = [
  "Script-to-scene breakdowns that stay in sync with every revision.",
  "Encrypted asset management with cinematic version control.",
  "Frame-by-frame feedback on 4K reviews, from any device on set.",
];

const collaborators = [
  { role: "Editor", initials: "ED" },
  { role: "Colourist", initials: "CO" },
  { role: "1st AD", initials: "AD" },
  { role: "Sound", initials: "SD" },
];

const shots = [
  { scene: "SC 12", take: "Take 3", duration: "00:42" },
  { scene: "SC 13", take: "Take 1", duration: "01:08" },
  { scene: "SC 14", take: "Take 5", duration: "00:26" },
];

const CloudSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // A lightweight simulation of the app's live review workspace.
  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const timer = window.setInterval(
      () => setActiveIndex((index) => index + 1),
      2600,
    );
    return () => window.clearInterval(timer);
  }, []);

  const activeShot = activeIndex % shots.length;
  const activeCollaborator = activeIndex % collaborators.length;

  return (
    <section
      id="workflow"
      className="border-t border-border bg-card py-20 sm:py-24 lg:py-32"
    >
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-8">
            <Reveal>
              <p className="text-label mb-4">The Workflow</p>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Manage Your Set from the Cloud
              </h2>
            </Reveal>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <Reveal key={highlight} delay={index * 90}>
                  <div className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-secondary/60">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none" />
                    <p className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                      {highlight}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={280}>
              <a
                href="#get-the-app"
                className="group inline-flex items-center gap-2 rounded-md border-2 border-primary px-6 py-3 text-label text-primary transition-all duration-300 hover:border-transparent hover:gold-gradient hover:text-primary-foreground"
              >
                Start with the App
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="card-glow overflow-hidden rounded-xl border border-border bg-secondary">
              {/* Window chrome */}
              <div className="flex items-center gap-3 border-b border-border bg-background/40 px-4 py-3">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                </span>
                <p className="min-w-0 flex-1 truncate font-heading text-sm font-semibold text-foreground">
                  The Midnight Noir
                </p>
                <span className="shrink-0 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.15em] text-primary">
                  Day 12 / 34
                </span>
              </div>

              <div className="space-y-4 p-4 sm:p-5">
                {/* Shot review strip */}
                <div className="grid grid-cols-3 gap-3">
                  {shots.map((shot, index) => {
                    const isActive = index === activeShot;

                    return (
                      <div
                        key={shot.scene}
                        className={cn(
                          "overflow-hidden rounded-lg border transition-all duration-500",
                          isActive
                            ? "border-primary/60 shadow-[0_0_24px_-8px_hsl(42_65%_55%/0.8)]"
                            : "border-border",
                        )}
                      >
                        <div
                          className={cn(
                            "relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br transition-colors duration-500",
                            isActive
                              ? "from-primary/35 to-primary/5"
                              : "from-muted to-background",
                          )}
                        >
                          <Play
                            className={cn(
                              "h-5 w-5 transition-colors duration-500",
                              isActive ? "text-primary" : "text-border",
                            )}
                          />
                          <span className="absolute bottom-1 right-1.5 text-[9px] font-medium tabular-nums text-muted-foreground">
                            {shot.duration}
                          </span>
                        </div>
                        <div className="flex items-baseline justify-between gap-1 bg-background/40 px-2 py-1.5">
                          <span
                            className={cn(
                              "text-[10px] font-semibold uppercase tracking-wider transition-colors duration-500",
                              isActive ? "text-primary" : "text-muted-foreground",
                            )}
                          >
                            {shot.scene}
                          </span>
                          <span className="truncate text-[9px] text-muted-foreground">
                            {shot.take}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Review timeline */}
                <div className="space-y-1.5">
                  <div className="h-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className={cn(
                        "h-full rounded-full gold-gradient",
                        activeShot > 0 &&
                          "transition-[width] duration-[2500ms] ease-linear",
                      )}
                      style={{ width: `${((activeShot + 1) / shots.length) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] tabular-nums text-muted-foreground">
                    <span>Dailies reviewed</span>
                    <span>
                      {activeShot + 1} / {shots.length}
                    </span>
                  </div>
                </div>

                {/* Latest note */}
                <div className="flex items-start gap-2 rounded-lg border border-border bg-background/40 p-3">
                  <MessageSquare className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    <span className="text-foreground">Note at 00:18</span> — warm
                    the key light a quarter stop.
                  </p>
                </div>

                {/* Presence row */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex -space-x-2" aria-hidden="true">
                      {collaborators.map((person, index) => (
                        <span
                          key={person.role}
                          className={cn(
                            "flex h-6 w-6 items-center justify-center rounded-full border-2 border-secondary text-[9px] font-semibold transition-all duration-500",
                            index === activeCollaborator
                              ? "gold-gradient text-primary-foreground"
                              : "bg-muted text-muted-foreground",
                          )}
                        >
                          {person.initials}
                        </span>
                      ))}
                    </div>

                    {/* Names are stacked in one grid cell so the line never reflows. */}
                    <p className="min-w-0 truncate text-xs text-muted-foreground">
                      <span className="inline-grid">
                        {collaborators.map((person, index) => (
                          <span
                            key={person.role}
                            className={cn(
                              "col-start-1 row-start-1 text-foreground transition-opacity duration-500",
                              index === activeCollaborator
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          >
                            {person.role}
                          </span>
                        ))}
                      </span>{" "}
                      is reviewing
                    </p>
                  </div>

                  <span className="flex shrink-0 items-center gap-1.5 text-xs text-primary">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-pulse-ring motion-reduce:animate-none" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                    Live Now
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CloudSection;

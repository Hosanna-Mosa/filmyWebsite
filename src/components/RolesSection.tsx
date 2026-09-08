import { useState } from "react";
import { BarChart3, ChevronDown, Clapperboard, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import rolesPerson from "@/assets/roles-person.jpg";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { useCountUp } from "@/hooks/use-count-up";
import { useReveal } from "@/hooks/use-reveal";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface Role {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: [Stat, Stat];
}

const roles: Role[] = [
  {
    icon: Clapperboard,
    title: "Directors",
    description:
      "Streamline your creative vision. Visualize shot lists and coordinate with key departments effortlessly across all timezones.",
    stats: [
      { value: 450, suffix: "+", label: "Active Projects" },
      { value: 38, suffix: "K", label: "Shots Planned" },
    ],
  },
  {
    icon: BarChart3,
    title: "Producers",
    description:
      "Manage budgets, track production milestones, and handle global casting calls from a single, secure dashboard.",
    stats: [
      { value: 1200, suffix: "+", label: "Calls Posted" },
      { value: 96, suffix: "%", label: "Roles Filled" },
    ],
  },
  {
    icon: Star,
    title: "Actors",
    description:
      "Maintain an active digital presence. Apply to verified casting calls and showcase your performance range with ease.",
    stats: [
      { value: 12, suffix: "K+", label: "Signed Artists" },
      { value: 24, suffix: "h", label: "Avg. Response" },
    ],
  },
];

const AnimatedStat = ({ stat, active }: { stat: Stat; active: boolean }) => {
  const value = useCountUp(stat.value, active);

  return (
    <div>
      <p className="font-heading text-2xl font-bold text-primary-foreground">
        {value.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="text-xs uppercase tracking-wider text-primary-foreground/70">
        {stat.label}
      </p>
    </div>
  );
};

const RolesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, visible } = useReveal<HTMLDivElement>();
  const activeRole = roles[activeIndex];

  return (
    <section id="roles" className="border-t border-border py-20 sm:py-24 lg:py-32">
      <div className="container">
        <Reveal className="mb-10 sm:mb-12">
          <p className="text-label mb-4">Tailored Experience</p>
          <h2 className="max-w-md font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Built for Every Role on Set
          </h2>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Pick your craft to see how FilmyConnect fits into your day.
          </p>
        </Reveal>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            {roles.map((role, index) => {
              const isActive = index === activeIndex;

              return (
                <Reveal key={role.title} delay={index * 90}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-expanded={isActive}
                    className={cn(
                      "w-full rounded-xl border bg-card p-5 text-left transition-all duration-300 sm:p-6",
                      isActive
                        ? "border-primary/50 shadow-[0_12px_40px_-20px_hsl(42_65%_55%/0.9)]"
                        : "border-border hover:border-primary/30 hover:bg-card/80",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <role.icon
                        className={cn(
                          "h-5 w-5 shrink-0 transition-colors",
                          isActive ? "text-primary" : "text-muted-foreground",
                        )}
                      />
                      <h3
                        className={cn(
                          "text-label flex-1 text-sm transition-colors",
                          isActive ? "text-primary" : "text-foreground",
                        )}
                      >
                        {role.title}
                      </h3>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
                          isActive && "rotate-180 text-primary",
                        )}
                      />
                    </div>

                    <div
                      className={cn(
                        "grid transition-all duration-500 ease-out",
                        isActive
                          ? "mt-3 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
                        {role.description}
                      </p>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>

          <div ref={ref} className="relative">
            <div className="card-glow overflow-hidden rounded-xl">
              <img
                src={rolesPerson}
                alt="Film professional in formal attire"
                className="h-auto w-full rounded-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>

            <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
              <div className="flex gap-6 rounded-lg gold-gradient p-4">
                {activeRole.stats.map((stat) => (
                  <AnimatedStat
                    // Remounting restarts the count whenever the role changes.
                    key={`${activeRole.title}-${stat.label}`}
                    stat={stat}
                    active={visible}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesSection;

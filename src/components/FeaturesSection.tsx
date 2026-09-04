import {
  BellRing,
  Globe,
  MessageSquare,
  MonitorPlay,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: MonitorPlay,
    title: "Showcase Portfolios",
    description:
      "Create high-impact digital reels and portfolios that highlight your best work with cinematic player integration.",
  },
  {
    icon: Globe,
    title: "Global Talent Search",
    description:
      "Browse a curated database of award-winning directors, editors, and actors. Connect instantly with industry veterans.",
  },
  {
    icon: MessageSquare,
    title: "Real-time Collab",
    description:
      "Review dailies, annotate frames, and manage scripts in a shared workspace designed specifically for film workflows.",
  },
  {
    icon: Users,
    title: "Casting Calls",
    description:
      "Post a role or apply in seconds. Filter by craft, location, and availability so the right people find the right set.",
  },
  {
    icon: BellRing,
    title: "Instant Alerts",
    description:
      "Push notifications the moment a call goes live, a collaborator replies, or your application moves forward.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Profiles",
    description:
      "Optional ID verification and moderated posts keep the network professional and the opportunities genuine.",
  },
];

const FeatureCard = ({ feature }: { feature: Feature }) => {
  // Track the cursor so the .spotlight gradient follows it across the card.
  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className="spotlight card-glow group relative h-full overflow-hidden rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 motion-reduce:hover:transform-none sm:p-8"
    >
      <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary transition-colors duration-300 group-hover:bg-primary/15">
        <feature.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none" />
      </div>
      <h3 className="relative mb-3 font-heading text-xl font-semibold text-foreground">
        {feature.title}
      </h3>
      <p className="relative text-sm leading-relaxed text-muted-foreground">
        {feature.description}
      </p>
      <span
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 gold-gradient transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 sm:py-24 lg:py-32">
      <div className="container">
        <Reveal className="mb-12 text-center sm:mb-16">
          <p className="text-label mb-4">The Platform</p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Production-Grade Ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Everything a crew needs between the first pitch and the final cut —
            in one app, on every device.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 70} className="h-full">
              <FeatureCard feature={feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

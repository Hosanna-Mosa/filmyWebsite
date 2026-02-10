import { MonitorPlay, Globe, MessageSquare, ArrowRight } from "lucide-react";

const features = [
  {
    icon: MonitorPlay,
    title: "Showcase Portfolios",
    description: "Create high-impact digital reels and portfolios that highlight your best work with cinematic player integration.",
    cta: "Explore Gallery",
  },
  {
    icon: Globe,
    title: "Global Talent Search",
    description: "Browse a curated database of award-winning directors, editors, and actors. Connect instantly with industry veterans.",
    cta: "Find Talent",
  },
  {
    icon: MessageSquare,
    title: "Real-time Collab",
    description: "Review dailies, annotate frames, and manage scripts in a shared workspace designed specifically for film workflows.",
    cta: "Learn More",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="container">
        <div className="mb-16 text-center">
          <p className="text-label mb-4">The Platform</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl tracking-tight">
            Production-Grade Ecosystem
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 card-glow"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                {feature.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-label text-primary transition-all group-hover:gap-2"
              >
                {feature.cta} <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

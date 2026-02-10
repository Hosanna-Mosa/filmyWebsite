import { Clapperboard, BarChart3, Star } from "lucide-react";
import rolesPerson from "@/assets/roles-person.jpg";

const roles = [
  {
    icon: Clapperboard,
    title: "Directors",
    description: "Streamline your creative vision. Visualize shot lists and coordinate with key departments effortlessly across all timezones.",
  },
  {
    icon: BarChart3,
    title: "Producers",
    description: "Manage budgets, track production milestones, and handle global casting calls from a single, secure dashboard.",
  },
  {
    icon: Star,
    title: "Actors",
    description: "Maintain an active digital presence. Apply to verified casting calls and showcase your performance range with ease.",
  },
];

const RolesSection = () => {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="container">
        <div className="mb-12">
          <p className="text-label mb-4">Tailored Experience</p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl tracking-tight max-w-md">
            Built for Every Role on Set
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            {roles.map((role) => (
              <div
                key={role.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <role.icon className="h-5 w-5 text-primary" />
                  <h3 className="text-label text-foreground text-sm">{role.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {role.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="rounded-xl overflow-hidden card-glow">
              <img
                src={rolesPerson}
                alt="Film professional in formal attire"
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex gap-6 rounded-lg gold-gradient p-4">
                <div>
                  <p className="text-2xl font-bold text-primary-foreground font-heading">12K+</p>
                  <p className="text-xs text-primary-foreground/70 uppercase tracking-wider">Signed Artists</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-foreground font-heading">450+</p>
                  <p className="text-xs text-primary-foreground/70 uppercase tracking-wider">Active Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesSection;

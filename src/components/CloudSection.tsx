import { CheckCircle, ArrowRight } from "lucide-react";

const features = [
  "Script-to-Scene automated breakdowns using proprietary AI models.",
  "Encrypted asset management with cinematic version control.",
  "Real-time feedback on 4K video reviews with frame-by-frame annotation.",
];

const CloudSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-card border-t border-border">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl tracking-tight">
              Manage Your Set from the Cloud
            </h2>

            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md border-2 border-primary px-6 py-3 text-label text-primary transition-all hover:gold-gradient hover:text-primary-foreground hover:border-transparent"
            >
              Explore Workflow <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-xl border border-border bg-secondary p-6 card-glow">
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-muted p-4">
                <div className="h-3 w-3/4 rounded bg-border" />
                <div className="h-6 w-6 rounded border border-border" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-[4/3] rounded-lg bg-primary/20" />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full gold-gradient" />
                  <span className="text-xs text-muted-foreground">Editor Active</span>
                </div>
                <span className="text-xs text-primary">● Live Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudSection;

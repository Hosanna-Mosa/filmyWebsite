import { Apple, Play } from "lucide-react";

const AppDownloadSection = () => {
  return (
    <section id="get-the-app" className="border-t border-border py-16">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-label mb-3 text-primary">Get the App</p>
            <h2 className="font-heading text-3xl text-foreground sm:text-4xl">
              FilmyApp is built for on-set speed.
            </h2>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              Track projects, connect with crew, and manage talent from anywhere.
              Download on iOS and Android.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div
              title="App is under development"
              aria-disabled="true"
              className="group flex cursor-not-allowed items-center gap-4 rounded-xl border border-border bg-secondary px-5 py-4 text-foreground opacity-60"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-background">
                <Apple className="h-5 w-5 text-primary" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Download on the
                </span>
                <span className="block text-lg font-semibold">App Store</span>
              </span>
            </div>

            <div
              title="App is under development"
              aria-disabled="true"
              className="group flex cursor-not-allowed items-center gap-4 rounded-xl border border-border bg-secondary px-5 py-4 text-foreground opacity-60"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-background">
                <Play className="h-5 w-5 text-primary" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Get it on
                </span>
                <span className="block text-lg font-semibold">Google Play</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;

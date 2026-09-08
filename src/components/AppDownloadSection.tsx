import { Check, Smartphone } from "lucide-react";
import Reveal from "@/components/Reveal";
import StoreButtons from "@/components/StoreButtons";

const perks = [
  "Free to download",
  "iOS and Android",
  "No desktop required",
];

const AppDownloadSection = () => {
  return (
    <section
      id="get-the-app"
      className="relative overflow-hidden border-t border-border py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 flex justify-center"
        aria-hidden="true"
      >
        <div className="h-64 w-[36rem] max-w-full rounded-full bg-primary/10 blur-[120px] animate-aurora motion-reduce:animate-none" />
      </div>

      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <Reveal>
              <p className="text-label mb-3 text-primary">Get the App</p>
              <h2 className="font-heading text-3xl text-foreground sm:text-4xl md:text-5xl">
                FilmyConnect is built for on-set speed.
              </h2>
              <p className="mt-4 max-w-xl text-base text-muted-foreground">
                Track projects, connect with crew, and manage talent from
                anywhere. Download FilmyConnect on iOS and Android.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {perk}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="flex flex-col gap-5">
              <StoreButtons />
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Smartphone className="h-3.5 w-3.5 text-primary" />
                Opens the FilmyConnect listing in your app store.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;

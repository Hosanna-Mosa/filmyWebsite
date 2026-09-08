const ChildSafety = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto max-w-3xl px-4 py-16">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Child Safety & Protection Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: February 26, 2026
          </p>
        </header>

        <section className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            FilmyConnect strictly prohibits any form of child sexual abuse and exploitation (CSAE).
            We have zero tolerance for child sexual abuse material (CSAM) and related content on our platform.
          </p>

          <p>
            Users can report inappropriate content directly within the app. We review reports promptly and remove
            content that violates our policies immediately upon verification.
          </p>

          <p>
            Accounts that are found to violate our child safety policies are permanently banned from FilmyConnect.
            We may take additional action when necessary to protect the safety and wellbeing of children.
          </p>

          <p>
            We cooperate fully with law enforcement authorities where required and appropriate, including sharing
            relevant information in accordance with applicable laws and regulations.
          </p>

          <p>
            For any child safety concerns, suspected CSAM, or urgent safety issues involving a minor on our platform,
            please contact us at{" "}
            <a
              href="mailto:support@filmyconnect24.com"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              support@filmyconnect24.com
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
};

export default ChildSafety;


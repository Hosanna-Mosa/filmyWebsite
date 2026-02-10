const TermsAndConditions = () => {
  return (
    <main className="min-h-screen border-t border-border py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <p className="text-label text-primary">Terms and Conditions</p>
          <h1 className="mt-3 font-heading text-3xl text-foreground sm:text-4xl">
            Terms and Conditions
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: 10-02-2026
          </p>

          <p className="mt-8 text-base text-muted-foreground">
            By using our website or application, you agree to the following terms.
          </p>

          <div className="mt-10 space-y-8">
            <section>
              <h2 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                By accessing the platform, you agree to comply with these Terms and all applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">2. Account Registration</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Users must provide accurate information. You are responsible for keeping your login credentials secure.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                OTP authentication is used to verify identity. Misuse of OTP systems is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">3. Permitted Use</h2>
              <p className="mt-3 text-sm text-muted-foreground">You agree not to:</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Use the platform for illegal purposes</li>
                <li>Attempt unauthorized access</li>
                <li>Send spam or fraudulent content</li>
                <li>Interfere with system security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">4. Service Availability</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We aim to provide uninterrupted service but do not guarantee availability at all times.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">5. Data &amp; Privacy</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Your use of the platform is governed by our Privacy Policy. By using the service, you consent to data
                handling described there.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">6. Limitation of Liability</h2>
              <p className="mt-3 text-sm text-muted-foreground">FILMY CONNECT PRIVATE LIMITED is not liable for:</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Service interruptions</li>
                <li>Data loss outside our control</li>
                <li>User misuse of the platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">7. Termination</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We may suspend or terminate accounts that violate these terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">8. Changes to Terms</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We may update these Terms at any time. Continued use means acceptance of changes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">9. Governing Law</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                These Terms are governed by the laws of India.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">10. Contact</h2>
              <p className="mt-3 text-sm text-muted-foreground">FILMY CONNECT PRIVATE LIMITED</p>
              <p className="text-sm text-muted-foreground">Email: Filmyconnectpvt2@gmail.com</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditions;

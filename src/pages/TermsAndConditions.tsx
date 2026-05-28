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
              <h2 className="text-lg font-semibold text-foreground">2. Eligibility</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                You must be at least 13 years of age (or 16 in the European Economic Area) to use this platform.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">3. Account Registration</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Users must provide accurate information. You are responsible for keeping your login credentials secure.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                OTP authentication is used to verify identity. Misuse of OTP systems is strictly prohibited.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                You may delete your account at any time (available in-app under Settings → Delete My Account).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">4. Paid Services &amp; Payments</h2>
              <h3 className="mt-4 text-sm font-semibold text-foreground">4.1 Paid Features</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                FilmyConnect offers the following paid services:
              </p>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li><strong>Account Verification</strong> — One-time fee for verified badge and priority features</li>
                <li><strong>Profile Boost</strong> — Paid feature that increases profile visibility for a limited period</li>
              </ul>
              <p className="mt-2 text-sm text-muted-foreground">
                Prices are subject to change with notice.
              </p>

              <h3 className="mt-5 text-sm font-semibold text-foreground">4.2 Payment Processing</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                All payments are processed through <strong>Razorpay</strong>. We do not store full credit or debit card details.
              </p>

              <h3 className="mt-5 text-sm font-semibold text-foreground">4.3 Refunds</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                All purchases are final unless the service is not delivered as described. Refund requests may be
                submitted to Filmyconnectpvt2@gmail.com and will be evaluated on a case-by-case basis.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">5. User Conduct (Permitted Use)</h2>
              <p className="mt-3 text-sm text-muted-foreground">You agree not to:</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Use the platform for illegal purposes</li>
                <li>Attempt unauthorized access</li>
                <li>Send spam or fraudulent content</li>
                <li>Interfere with system security</li>
                <li>Post harassing, abusive, or defamatory content</li>
                <li>Impersonate any person or entity</li>
                <li>Upload malware or harmful code</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">6. Content Ownership</h2>
              <h3 className="mt-4 text-sm font-semibold text-foreground">6.1 Your Content</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                You retain ownership of the photos, videos, and text you post. By posting, you grant FilmyConnect
                a non-exclusive license to display your content within the platform for the purpose of operating
                the service.
              </p>

              <h3 className="mt-5 text-sm font-semibold text-foreground">6.2 Our Content</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The platform's design, code, trademarks, and brand assets are owned by FILMY CONNECT PRIVATE LIMITED.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">7. Service Availability</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We aim to provide uninterrupted service but do not guarantee availability at all times.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">8. Data &amp; Privacy</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Your use of the platform is governed by our Privacy Policy. By using the service, you consent to
                data handling described there.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">9. Limitation of Liability</h2>
              <p className="mt-3 text-sm text-muted-foreground">FILMY CONNECT PRIVATE LIMITED is not liable for:</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Service interruptions</li>
                <li>Data loss outside our control</li>
                <li>User misuse of the platform</li>
                <li>Indirect, incidental, or consequential damages</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                Our total liability shall not exceed the amount you have paid us in the 12 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">10. Indemnification</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                You agree to indemnify and hold FILMY CONNECT PRIVATE LIMITED harmless from any claims, damages, or
                losses arising from your violation of these Terms or your use of the platform.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">11. Termination</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We may suspend or terminate accounts that violate these terms. You will be notified where possible
                and may appeal by contacting Filmyconnectpvt2@gmail.com.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">12. Changes to Terms</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We may update these Terms at any time. Continued use means acceptance of changes. Material changes
                will be notified in-app or via email.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">13. Governing Law</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                These Terms are governed by the laws of India.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">14. Contact</h2>
              <p className="mt-3 text-sm text-muted-foreground">Company: FILMY CONNECT PRIVATE LIMITED</p>
              <p className="mt-1 text-sm text-muted-foreground">Email: Filmyconnectpvt2@gmail.com</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditions;

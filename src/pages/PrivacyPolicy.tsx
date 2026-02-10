const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen border-t border-border py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <p className="text-label text-primary">Privacy Policy</p>
          <h1 className="mt-3 font-heading text-3xl text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: 10-02-2026
          </p>

          <p className="mt-8 text-base text-muted-foreground">
            Welcome to FILMY CONNECT PRIVATE LIMITED. Your privacy is important
            to us. This Privacy Policy explains how we collect, use, and protect
            your information when you use our website and application.
          </p>

          <div className="mt-10 space-y-8">
            <section>
              <h2 className="text-lg font-semibold text-foreground">
                1. Information We Collect
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We may collect the following information:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Phone number for OTP authentication</li>
                <li>Name and email (if provided)</li>
                <li>Account details</li>
                <li>Device and usage information</li>
                <li>Communication logs related to authentication</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                We collect only the information necessary to provide secure
                login and service functionality.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                2. Use of Information
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We use your information to:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Verify your identity using OTP</li>
                <li>Create and manage your account</li>
                <li>Provide customer support</li>
                <li>Improve our services</li>
                <li>Ensure security and fraud prevention</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                We do not use your phone number for marketing or spam.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                3. OTP Authentication
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We use a trusted third-party provider (such as Twilio) to
                deliver one-time passwords (OTP) for login and verification.
                These messages are strictly transactional and used only for
                authentication.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                4. Data Protection
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We implement industry-standard security measures to protect your
                information. Access is restricted and encrypted where possible.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                5. Sharing of Information
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We do not sell or rent personal data. We only share information:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>With service providers necessary for authentication</li>
                <li>When required by law</li>
                <li>To protect user safety and platform security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                6. Data Retention
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We retain information only as long as necessary to operate the
                service and meet legal requirements.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                7. User Rights
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                You may request to:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Access your data</li>
                <li>Update your data</li>
                <li>Delete your account</li>
                <li>Contact us to make a request</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                8. Contact Information
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                FILMY CONNECT PRIVATE LIMITED
              </p>
              <p className="text-sm text-muted-foreground">
                Email: Filmyconnectpvt2@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                9. Changes to Policy
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We may update this Privacy Policy. Continued use of the service
                means you accept the updated policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;

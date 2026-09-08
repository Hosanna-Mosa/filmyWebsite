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
            your information when you use our website and mobile application.
          </p>

          <div className="mt-10 space-y-8">
            <section>
              <h2 className="text-lg font-semibold text-foreground">
                1. Information We Collect
              </h2>

              <h3 className="mt-5 text-sm font-semibold text-foreground">
                1.1 Information You Provide Directly
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                We may collect the following information:
              </p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-4 text-left font-medium text-foreground">Data Type</th>
                      <th className="py-2 text-left font-medium text-foreground">Why We Collect It</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">Phone Number</td>
                      <td className="py-2">OTP authentication, account registration, account recovery</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">Name</td>
                      <td className="py-2">Profile creation, networking</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">Email Address</td>
                      <td className="py-2">Account communication, password recovery</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">Profile Photos &amp; Videos</td>
                      <td className="py-2">Profile display, portfolio showcase, post sharing</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">Government ID / Documents</td>
                      <td className="py-2">Voluntary account verification</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">Occupation / Role</td>
                      <td className="py-2">Profile customization, industry networking</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-6 text-sm font-semibold text-foreground">
                1.2 Information Collected Automatically
              </h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-4 text-left font-medium text-foreground">Data Type</th>
                      <th className="py-2 text-left font-medium text-foreground">Why We Collect It</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">Device Information</td>
                      <td className="py-2">Device ID for push notifications, session management</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">Usage Information</td>
                      <td className="py-2">App features used, engagement — to improve our services</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">Location (approximate)</td>
                      <td className="py-2">Showing nearby events and film-industry opportunities</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">Communication Logs</td>
                      <td className="py-2">Authentication-related logs for security</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                We collect only the information necessary to provide secure
                login and service functionality.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                2. How We Use Your Information
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We use your information to:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Verify your identity using OTP</li>
                <li>Create and manage your account</li>
                <li>Process payments for verification and premium features</li>
                <li>Display your profile, posts, and portfolio to other users</li>
                <li>Provide customer support</li>
                <li>Improve our services</li>
                <li>Ensure security and fraud prevention</li>
                <li>Show nearby events and opportunities (based on location)</li>
                <li>Send push notifications (messages, likes, follows, comments)</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                We <strong>do not</strong> use your phone number for marketing or spam.
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
                information, including:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Encryption in transit (TLS/SSL)</li>
                <li>Encryption at rest (database encryption)</li>
                <li>Password hashing (bcrypt or similar)</li>
                <li>Access controls (only authorized personnel can access production data)</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                Access is restricted and encrypted where possible.
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
                <li><strong>With service providers necessary for the service:</strong>
                  <ul className="ml-5 mt-1 space-y-1">
                    <li>Razorpay — Payment processing (we do not store full card details)</li>
                    <li>Cloudinary — Media hosting for photos and videos</li>
                    <li>Twilio — OTP delivery</li>
                    <li>Expo / Firebase / Apple Push Notification Service — Push notifications</li>
                  </ul>
                </li>
                <li>When required by law</li>
                <li>To protect user safety and platform security</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                These providers are contractually bound to process data only as instructed by us.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                6. Data Retention
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We retain information only as long as necessary to operate the
                service and meet legal requirements. Specifically:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Account data is retained while your account is active</li>
                <li>If you delete your account, your data is removed within 30 days</li>
                <li>Transaction records may be retained longer as required by tax law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                7. Your Rights (GDPR &amp; CCPA)
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                You may request to:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><strong>Access</strong> your data</li>
                <li><strong>Update</strong> your data</li>
                <li><strong>Delete</strong> your account (available in-app under Settings → Delete My Account)</li>
                <li><strong>Export</strong> your data (data portability)</li>
                <li><strong>Withdraw consent</strong> at any time</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                Contact us at support@filmyconnect24.com to make a request.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                8. Children's Privacy
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                FilmyConnect is not intended for users under the age of 13 (or 16
                in the European Economic Area). We do not knowingly collect data
                from children.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                9. International Data Transfers
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                If you are located outside India, your data may be transferred to
                and processed in India or other jurisdictions where our service
                providers operate.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                10. Changes to Policy
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We may update this Privacy Policy. Continued use of the service
                means you accept the updated policy. Material changes will be
                notified in-app or via email.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                11. Contact Information
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Company: FILMY CONNECT PRIVATE LIMITED
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Email: support@filmyconnect24.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;

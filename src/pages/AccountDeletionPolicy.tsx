const AccountDeletionPolicy = () => {
    return (
        <main className="min-h-screen border-t border-border py-16">
            <div className="container">
                <div className="mx-auto max-w-3xl">
                    <p className="text-label text-primary">Policy</p>
                    <h1 className="mt-3 font-heading text-3xl text-foreground sm:text-4xl">
                        Account Deletion Policy
                    </h1>
                    <p className="mt-4 text-sm text-muted-foreground">
                        Last updated: 25-02-2026
                    </p>

                    <p className="mt-8 text-base text-muted-foreground">
                        At FILMYCONNECT, we respect your right to manage your account and data.
                        This policy outlines the process and implications of deleting your account.
                    </p>

                    <div className="mt-10 space-y-8">
                        <section>
                            <h2 className="text-lg font-semibold text-foreground">
                                1. How to Request Account Deletion
                            </h2>
                            <p className="mt-3 text-sm text-muted-foreground">
                                You can request to delete your account through the following methods:
                            </p>
                            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                                <li><strong>In-App:</strong> Go to Settings &gt; Account &gt; Delete Account and follow the prompts.</li>
                                <li><strong>Via Email:</strong> Send an email from your registered email address to <strong>support@filmyconnect24.com</strong> with the subject "Account Deletion Request".</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold text-foreground">
                                2. Data Deletion and Retention
                            </h2>
                            <p className="mt-3 text-sm text-muted-foreground">
                                Once you initiate the deletion process:
                            </p>
                            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                                <li>Your profile information, including name, email, and phone number, will be permanently removed from our active database.</li>
                                <li>Your uploaded content, portfolio entries, and connections will be deleted.</li>
                                <li>Some data may be retained for a limited period (up to 30 days) in our encrypted backup systems before being completely purged.</li>
                                <li>We may retain certain information if required by law or to resolve disputes.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold text-foreground">
                                3. Consequences of Deletion
                            </h2>
                            <p className="mt-3 text-sm text-muted-foreground">
                                Please note that account deletion is permanent and cannot be undone:
                            </p>
                            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                                <li>You will lose access to all premium features and history.</li>
                                <li>Any active subscriptions will be cancelled without refund (unless required by law).</li>
                                <li>Your username may become available for other users to claim after a certain period.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold text-foreground">
                                4. Third-Party Integrations
                            </h2>
                            <p className="mt-3 text-sm text-muted-foreground">
                                If you have linked your FILMYCONNECT account to third-party services (like social media logins),
                                deleting your FILMYCONNECT account will disconnect these links but will not delete your data on
                                those third-party platforms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-semibold text-foreground">
                                5. Contact Us
                            </h2>
                            <p className="mt-3 text-sm text-muted-foreground">
                                If you have any questions regarding our Account Deletion Policy, please contact us at:
                            </p>
                            <div className="mt-3 text-sm text-muted-foreground">
                                <p>FILMY CONNECT PRIVATE LIMITED</p>
                                <p>Email: support@filmyconnect24.com</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AccountDeletionPolicy;

const ContactUs = () => {
  return (
    <main className="min-h-screen border-t border-border py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <p className="text-label text-primary">Contact Us</p>
          <h1 className="mt-3 font-heading text-3xl text-foreground sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-6 text-base text-muted-foreground">
            For any questions or support, reach us at:
          </p>
          <div className="mt-6 rounded-xl border border-border bg-secondary px-6 py-5">
            <p className="text-sm text-muted-foreground">FILMY CONNECT PRIVATE LIMITED</p>
            <p className="mt-2 text-sm text-muted-foreground">Email: Filmyconnectpvt2@gmail.com</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;

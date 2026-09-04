import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="text-label mb-4">Error 404</p>
        <h1 className="font-heading text-5xl font-bold text-foreground sm:text-6xl">
          Scene not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
          The page you were looking for is not in this cut.
        </p>
        <Link
          to="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-md gold-gradient px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:transform-none" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import StickyDownloadBar from "@/components/StickyDownloadBar";

/** Shared chrome for every route: nav, footer, and the download shortcuts. */
const SiteLayout = () => (
  <div className="flex min-h-screen flex-col bg-background">
    <Navbar />
    <main className="flex-1 pt-16">
      <Outlet />
    </main>
    <Footer />
    <BackToTop />
    <StickyDownloadBar />
  </div>
);

export default SiteLayout;

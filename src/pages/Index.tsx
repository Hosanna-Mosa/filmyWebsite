import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import RolesSection from "@/components/RolesSection";
import CloudSection from "@/components/CloudSection";
import AppDownloadSection from "@/components/AppDownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <HeroSection />
      <FeaturesSection />
      <RolesSection />
      <AppDownloadSection />
      <Footer />
    </div>
  );
};

export default Index;

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import BentoSection from "@/components/BentoSection";
import FeatureSection from "@/components/FeatureSection";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TrustedBySection />
      <BentoSection />
      <FeatureSection />
      <AboutSection />
      <TestimonialSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;

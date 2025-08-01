import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import FeatureCards from "@/components/FeatureCards";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeatureCards />
      <FeatureSection />
      <AboutSection />
      <TestimonialSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;

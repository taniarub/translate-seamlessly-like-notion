import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import DescriptionSection from "@/components/DescriptionSection";
import FeatureSection from "@/components/FeatureSection";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PerformanceOptimizations from "@/components/PerformanceOptimizations";
import JsonLd, { 
  organizationSchema, 
  websiteSchema, 
  mobileAppSchema, 
  faqSchema,
  createBreadcrumbSchema 
} from "@/components/JsonLd";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  const breadcrumbItems = [
    { name: "Home", url: "https://anytranslator.app/" }
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Smart Translation App"
        description="Your smart companion for instant, accurate translations in 50+ languages. AI-powered translation with voice, photo, and text support."
        keywords="translator, translation, AI translation, voice translation, photo translation, instant translation, multilingual, language app, smart translator"
        url="/"
      />
      
      <PerformanceOptimizations />
      
      {/* Structured Data */}
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={mobileAppSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={createBreadcrumbSchema(breadcrumbItems)} />
      
      <Navigation />
      <HeroSection />
      <FeatureCards />
      <DescriptionSection />
      <FeatureSection />
      <AboutSection />
      <TestimonialSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;

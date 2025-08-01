import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-2xl">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/fdd005b2-ebc6-4e06-9563-bf93048276a9.png" 
            alt="AnyTranslator" 
            className="h-20 w-20"
          />
        </div>
        
        <h1 className="text-notion-4xl font-medium text-text-primary mb-6">
          AnyTranslator
        </h1>
        
        <p className="text-notion-xl text-text-secondary mb-12 max-w-2xl mx-auto">
          Your smart companion for instant, accurate translations in 50+ languages.
        </p>
        
        <Button variant="primary" size="lg" className="font-medium">
          Download Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
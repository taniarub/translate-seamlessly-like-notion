import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/Logo.jpg" 
            alt="AnyTranslator" 
            className="h-16 w-16"
          />
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold text-text-primary mb-6 tracking-tight">
          The AI translator
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            that works for you.
          </span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
          One place where teams find every answer, automate the busywork, and get translations done.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" size="lg" className="font-medium px-8 py-3 text-base">
            Get AnyTranslator free
          </Button>
          <Button variant="secondary" size="lg" className="font-medium px-8 py-3 text-base">
            Request a demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            
            <h1 className="text-5xl lg:text-7xl font-bold text-text-primary mb-6 tracking-tight">
              The AI translator
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                that works for you.
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-text-secondary mb-8 max-w-3xl lg:max-w-none mx-auto leading-relaxed">
              One place where teams find every answer, automate the busywork, and get translations done.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a 
                href="https://apps.apple.com/by/app/any-translator-ai-translate/id6738693321"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg" className="font-medium px-8 py-3 text-base">
                  Get AnyTranslator free
                </Button>
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src="/lovable-uploads/cute.jpg" 
                alt="AI Translation Illustration" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
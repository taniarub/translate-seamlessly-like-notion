import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            
            <h1 className="text-5xl lg:text-7xl font-bold text-text-primary mb-6 tracking-tight">
              {t('hero.title.part1')}
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('hero.title.part2')}
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-text-secondary mb-8 max-w-3xl lg:max-w-none mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <div className="flex flex-col items-center lg:items-start">
                <a 
                  href="https://apps.apple.com/by/app/any-translator-ai-translate/id6738693321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/lovable-uploads/Download_on_the_App_Store_Badge.svg.png" 
                    alt="Download AnyTranslator on the App Store" 
                    className="h-14 w-auto"
                  />
                </a>
                <p className="text-sm text-gray-600 mt-4 text-center lg:text-left">
                  {t('hero.iosOnly')}
                </p>
              </div>
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
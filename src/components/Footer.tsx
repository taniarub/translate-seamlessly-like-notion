import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border-light py-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a 
            href="https://apps.apple.com/by/app/any-translator-ai-translate/id6738693321"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/lovable-uploads/Logo.jpg" 
              alt="AnyTranslator" 
              className="h-6 w-6"
            />
            <span className="text-notion-base font-medium text-text-primary">
              AnyTranslator
            </span>
          </a>
          
          <div className="flex items-center gap-6">
            <a href="/terms-of-service" className="text-notion-sm text-text-muted hover:text-text-secondary transition-colors">
              {t('footer.terms')}
            </a>
            <a href="/privacy-policy" className="text-notion-sm text-text-muted hover:text-text-secondary transition-colors">
              {t('footer.privacy')}
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-1 text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
          <span className="text-notion-sm">{t('nav.language')}</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
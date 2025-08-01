import { ChevronDown } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border-light py-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/Logo.jpg" 
              alt="AnyTranslator" 
              className="h-6 w-6"
            />
            <span className="text-notion-base font-medium text-text-primary">
              AnyTranslator
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-notion-sm text-text-muted hover:text-text-secondary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-notion-sm text-text-muted hover:text-text-secondary transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-1 text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
          <span className="text-notion-sm">English</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
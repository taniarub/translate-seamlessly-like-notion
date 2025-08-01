import { ChevronDown } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="border-b border-border-light bg-background">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/fdd005b2-ebc6-4e06-9563-bf93048276a9.png" 
            alt="AnyTranslator" 
            className="h-8 w-8"
          />
          <span className="text-notion-xl font-medium text-text-primary">
            AnyTranslator
          </span>
        </div>
        
        <div className="flex items-center gap-1 text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
          <span className="text-notion-sm">English</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
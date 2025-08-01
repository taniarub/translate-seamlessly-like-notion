import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="border-b border-border-light bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/fdd005b2-ebc6-4e06-9563-bf93048276a9.png" 
              alt="AnyTranslator" 
              className="h-8 w-8"
            />
            <span className="text-notion-xl font-semibold text-text-primary">
              AnyTranslator
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1 text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
              <span className="text-notion-sm font-medium">Product</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <a href="#" className="text-notion-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Download</a>
            <a href="#" className="text-notion-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Solutions</a>
            <a href="#" className="text-notion-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Resources</a>
            <a href="#" className="text-notion-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Pricing</a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="#" className="text-notion-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
            Log in
          </a>
          <Button variant="primary" size="sm" className="font-medium">
            Get AnyTranslator free
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
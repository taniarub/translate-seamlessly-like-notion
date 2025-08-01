import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="border-b border-border-light bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/Logo.jpg" 
            alt="AnyTranslator" 
            className="h-8 w-8"
          />
          <span className="text-notion-xl font-semibold text-text-primary">
            AnyTranslator
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" className="font-medium">
            <ChevronDown className="h-4 w-4 mr-2" />
            Language
          </Button>
          <Button variant="primary" size="sm" className="font-medium">
            Open App
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
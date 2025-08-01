import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Free and efficient
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to break down
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                language barriers?
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Download now and enjoy full access for free.
            </p>
          </div>
          
          <div className="flex justify-center items-center">
            <Button variant="primary" size="lg" className="font-medium px-8 py-4 text-lg">
              <Download className="h-5 w-5 mr-2" />
              Get the App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
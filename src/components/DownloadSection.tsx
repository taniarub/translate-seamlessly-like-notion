import { Sparkles } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="py-8 lg:py-12 bg-gradient-to-b from-gray-50 to-white">
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
            <a 
              href="https://apps.apple.com/by/app/any-translator-ai-translate/id6738693321" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img 
                src="/lovable-uploads/Download_on_the_App_Store_Badge.svg.png" 
                alt="Download Any Translator on the App Store" 
                className="h-14 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
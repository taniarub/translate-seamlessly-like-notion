import translatorMascot from "@/assets/translator-mascot.png";
import globalCommunication from "@/assets/global-communication.png";
import languageLearning from "@/assets/language-learning.png";

const FeatureCards = () => {
  return (
    <section className="py-xl">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-lg max-w-6xl mx-auto">
          <div className="bg-card hover:bg-card-hover transition-colors rounded-lg p-lg text-center space-y-6">
            <div className="flex justify-center">
              <img 
                src={translatorMascot} 
                alt="Translation mascot"
                className="h-24 w-24 object-contain"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-notion-lg font-medium text-text-primary">
                Instant Translation
              </h3>
              <p className="text-notion-base text-text-secondary">
                Translate anything, anywhere, in real-time across all your favorite apps.
              </p>
            </div>
          </div>
          
          <div className="bg-card hover:bg-card-hover transition-colors rounded-lg p-lg text-center space-y-6">
            <div className="flex justify-center">
              <img 
                src={globalCommunication} 
                alt="Global communication"
                className="h-24 w-24 object-contain"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-notion-lg font-medium text-text-primary">
                50+ Languages
              </h3>
              <p className="text-notion-base text-text-secondary">
                Connect with people worldwide. From Japanese to Arabic, we've got you covered.
              </p>
            </div>
          </div>
          
          <div className="bg-card hover:bg-card-hover transition-colors rounded-lg p-lg text-center space-y-6">
            <div className="flex justify-center">
              <img 
                src={languageLearning} 
                alt="Language learning"
                className="h-24 w-24 object-contain"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-notion-lg font-medium text-text-primary">
                Learn as You Go
              </h3>
              <p className="text-notion-base text-text-secondary">
                Build vocabulary and master grammar with personalized learning features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
import translatorMascot from "@/assets/translator-mascot.png";
import globalCommunication from "@/assets/global-communication.png";

const BentoSection = () => {
  return (
    <section className="py-2xl">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* Left bento card */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-notion-sm font-medium text-blue-700 mb-6">
                🔥 AI Translation
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">New</span>
              </div>
              <h3 className="text-notion-3xl font-semibold text-text-primary mb-4 leading-tight">
                Perfect translations every time.
              </h3>
              <p className="text-notion-lg text-text-secondary mb-8 leading-relaxed">
                Advanced AI understands context, idioms, and cultural nuances for natural translations.
              </p>
              <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-notion-base group">
                Try it
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="absolute -bottom-4 -right-4">
              <img 
                src={translatorMascot} 
                alt="Translation mascot"
                className="h-32 w-32 object-contain opacity-80"
              />
            </div>
          </div>

          {/* Right bento card */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-notion-sm font-medium text-emerald-700 mb-6">
                🔍 Smart Search
                <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-0.5 rounded-full">New</span>
              </div>
              <h3 className="text-notion-3xl font-semibold text-text-primary mb-4 leading-tight">
                One search for everything.
              </h3>
              <p className="text-notion-lg text-text-secondary mb-8 leading-relaxed">
                Find any translation, conversation, or learned phrase instantly across all languages.
              </p>
              <button className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-notion-base group">
                Try it
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="absolute -bottom-4 -right-4">
              <img 
                src={globalCommunication} 
                alt="Global communication"
                className="h-32 w-32 object-contain opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
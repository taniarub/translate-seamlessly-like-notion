const FeatureSection = () => {
  const features = [
    {
      title: "Translate as You Type — Instantly",
      description: "Whether you're messaging, emailing, or writing a caption,\nAnyTranslator translates your text on the fly into any language you need. Fast, seamless, and effortless."
    },
    {
      title: "Learn Languages Smarter with AI",
      description: "AI-powered training that adapts to you.\nBuild personalized word lists, master grammar, and remember what actually matters."
    },
    {
      title: "Speak Any Language",
      description: "It supports 50+ languages, including Korean, Japanese, Russian, Arabic, Turkish, and even Swahili."
    },
    {
      title: "Beyond Words: Smarter Translation",
      description: "AnyTranslator handles tricky grammar, idioms, and real-life context using powerful AI."
    }
  ];

  return (
    <section className="py-xl">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-xl max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/Stars.png" 
                  alt="Stars" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-notion-xl font-medium text-text-primary leading-relaxed">
                  {feature.title}
                </h3>
                              <p className="text-notion-base text-text-secondary whitespace-pre-line">
                {feature.description}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
const FeatureSection = () => {
  const features = [
    {
      title: "Translate as you type without switching apps",
      description: "Works across WhatsApp, Instagram, Messenger, Telegram, and more."
    },
    {
      title: "Tap red-boxed text in images to recognize and instantly translate",
      description: "Menus, signs, manuals, and contracts."
    },
    {
      title: "Live voice translation with real-time transcription",
      description: "Bilingual subtitles. Ideal for meetings, travel, and conversation."
    },
    {
      title: "AI-powered language learning with personalized word lists",
      description: "Scenario-based dialogues. Build real fluency with grammar and idioms."
    }
  ];

  return (
    <section className="py-xl">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-xl max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-notion-xl font-medium text-text-primary leading-relaxed">
                {feature.title}
              </h3>
              <p className="text-notion-base text-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
const AboutSection = () => {
  return (
    <section className="py-xl">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-notion-lg text-text-secondary leading-loose">
            AnyTranslator goes far beyond word-by-word translation. It handles difficult grammar, 
            idiomatic phrases, and spoken context using advanced artificial intelligence. It supports 
            over 53 languages, including Russian, Korean, Japanese, and more, making it a powerful 
            tool for both everyday users and professionals.
          </p>
          
          <div className="grid md:grid-cols-2 gap-xl pt-lg">
            <div>
              <h3 className="text-notion-xl font-medium text-text-primary mb-4">
                Built for Everyone
              </h3>
              <p className="text-notion-base text-text-secondary leading-loose">
                Whether you're a student studying abroad, a business professional closing international deals, 
                or a traveler exploring new cultures, AnyTranslator adapts to your needs with context-aware translations.
              </p>
            </div>
            
            <div>
              <h3 className="text-notion-xl font-medium text-text-primary mb-4">
                Privacy First
              </h3>
              <p className="text-notion-base text-text-secondary leading-loose">
                Your conversations stay private. We use on-device processing when possible and never store 
                your personal translations. Communicate freely without worrying about data privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
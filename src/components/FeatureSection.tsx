import { useLanguage } from "@/contexts/LanguageContext";

const FeatureSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      title: t('featureSection.feature1.title'),
      description: t('featureSection.feature1.description')
    },
    {
      title: t('featureSection.feature2.title'),
      description: t('featureSection.feature2.description')
    },
    {
      title: t('featureSection.feature3.title'),
      description: t('featureSection.feature3.description')
    },
    {
      title: t('featureSection.feature4.title'),
      description: t('featureSection.feature4.description')
    }
  ];

  return (
    <section className="py-12 lg:py-16">
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
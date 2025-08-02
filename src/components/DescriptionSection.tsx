import { useLanguage } from "@/contexts/LanguageContext";

const DescriptionSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {t('description.title.part1')}
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t('description.title.part2')}</span>
          </h2>
          
          <div className="space-y-2 text-lg lg:text-xl text-gray-600 leading-relaxed">
            <p>
              {t('description.text1')}
            </p>
            
            <p>
              {t('description.text2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection; 
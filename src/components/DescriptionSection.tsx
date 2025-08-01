const DescriptionSection = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            AnyTranslator
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">more than just translation</span>
          </h2>
          
          <div className="space-y-4 text-lg lg:text-xl text-gray-600 leading-relaxed">
            <p>
              It's not about swapping words — it's about understanding meaning.
            </p>
            
            <p>
              Perfect for everyday conversations, studying, or professional use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection; 
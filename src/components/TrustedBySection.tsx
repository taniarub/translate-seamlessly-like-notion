const TrustedBySection = () => {
  const companies = [
    { name: "OpenAI", logo: "https://images.ctfassets.net/spoqsaf9291f/jWkCPMAAj0Av69704DQoB/84499b606028b276e0bf94c238f07097/OpenAI-black-wordmark-cropped.png" },
    { name: "Figma", logo: "https://images.ctfassets.net/spoqsaf9291f/502ApiNcRHgIwrDU8XRYTQ/497492503acb3fa21bbd9dd1aec193c3/Figma-logo-color.svg" },
    { name: "NVIDIA", logo: "https://images.ctfassets.net/spoqsaf9291f/7FiQxfDAOyovrCIauqR2BC/f0150affe329526bd3773c07449e747b/NVIDIA-logo.png" },
    { name: "Perplexity", logo: "https://images.ctfassets.net/spoqsaf9291f/3hzRKZTT0Mi4Q3JLPQpQyF/28256f50d0bf6b63bfbed7862b8cbe68/Perplexity_AI_logo.svg.png" },
    { name: "Vercel", logo: "https://images.ctfassets.net/spoqsaf9291f/15en0a60cYTRxNO1QlHbdg/f09657a6b8287f1db0e628a048267e2c/vercel-logotype-light.svg" }
  ];

  return (
    <section className="py-lg border-b border-border-light">
      <div className="container mx-auto">
        <p className="text-center text-notion-sm text-text-muted mb-8 font-medium">
          Trusted by top teams
        </p>
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center opacity-60 hover:opacity-100 transition-opacity">
              <img 
                src={company.logo} 
                alt={company.name}
                className="h-8 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
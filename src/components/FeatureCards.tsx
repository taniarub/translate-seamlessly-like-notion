import { Brain, Mic, Zap, Search, Image, Camera } from "lucide-react";
import { useEffect, useState } from "react";

const FeatureCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Perfect translations every time.",
      description: "Advanced AI understands context, idioms, and cultural nuances for natural translations.",
      tag: "AI Translation",
      tagColor: "blue",
      gradient: "from-blue-100/50 to-blue-50/30",
      icon: Zap,
      linkColor: "blue",
      iconGradient: "from-blue-400 to-blue-600",
      hoverBorder: "hover:ring-1 hover:ring-blue-200"
    },
    {
      id: 2,
      title: "AI Conversational Learning",
      description: "AI learns grammar and conversation scenarios for easier learning!",
      tag: "AI Learning",
      tagColor: "green",
      gradient: "from-green-100/50 to-green-50/30",
      icon: Brain,
      linkColor: "green",
      iconGradient: "from-green-400 to-green-600",
      hoverBorder: "hover:ring-1 hover:ring-green-200"
    },
    {
      id: 3,
      title: "Customized Knowledge",
      description: "Enhance your translations with context-aware knowledge expansion that adapts to your specific domain and requirements.",
      tag: "Customized Knowledge",
      tagColor: "purple",
      gradient: "from-purple-100/50 to-purple-50/30",
      icon: Brain,
      linkColor: "purple",
      iconGradient: "from-purple-400 to-purple-600",
      hoverBorder: "hover:ring-1 hover:ring-purple-200"
    },
    {
      id: 4,
      title: "Instant Voice Translation",
      description: "Break down language barriers instantly with live voice translation that works across all your conversations.",
      tag: "Instant Voice Translation",
      tagColor: "orange",
      gradient: "from-orange-100/50 to-orange-50/30",
      icon: Mic,
      linkColor: "orange",
      iconGradient: "from-orange-400 to-orange-600",
      hoverBorder: "hover:ring-1 hover:ring-orange-200"
    },
    {
      id: 5,
      title: "AI Image Interaction",
      description: "Upload images to directly chat with AI and receive answers or translations.",
      tag: "AI Image Chat",
      tagColor: "indigo",
      gradient: "from-indigo-100/50 to-indigo-50/30",
      icon: Image,
      linkColor: "indigo",
      iconGradient: "from-indigo-400 to-indigo-600",
      hoverBorder: "hover:ring-1 hover:ring-indigo-200"
    },
    {
      id: 6,
      title: "Photo Translation Tool",
      description: "Прекрасно распознаёт картинки, фото, конспекты, контракты.",
      tag: "Photo Translation",
      tagColor: "pink",
      gradient: "from-pink-100/50 to-pink-50/30",
      icon: Camera,
      linkColor: "pink",
      iconGradient: "from-pink-400 to-pink-600",
      hoverBorder: "hover:ring-1 hover:ring-pink-200"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length]);

  const getTagColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100/80 text-blue-700",
      orange: "bg-orange-100/80 text-orange-700",
      green: "bg-green-100/80 text-green-700",
      purple: "bg-purple-100/80 text-purple-700",
      indigo: "bg-indigo-100/80 text-indigo-700",
      pink: "bg-pink-100/80 text-pink-700"
    };
    return colors[color as keyof typeof colors] || colors.orange;
  };

  const getLinkColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600 hover:text-blue-700",
      green: "text-green-600 hover:text-green-700",
      purple: "text-purple-600 hover:text-purple-700",
      orange: "text-orange-600 hover:text-orange-700",
      indigo: "text-indigo-600 hover:text-indigo-700",
      pink: "text-pink-600 hover:text-pink-700"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-6 lg:py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Desktop Grid View */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-6">
            {cards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.gradient} p-6 transition-all duration-300 hover:shadow-lg ${card.hoverBorder}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-medium ${getTagColorClasses(card.tagColor)}`}>
                      <IconComponent className="h-3 w-3" />
                      <span>{card.tag}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {card.description}
                  </p>
                  
                  <a href="#" className={`inline-flex items-center font-medium transition-colors text-sm ${getLinkColorClasses(card.linkColor)}`}>
                    Try it <span className="ml-1">→</span>
                  </a>
                  
                  {/* Icon in top right corner */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-8 h-8 bg-gradient-to-br ${card.iconGradient} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Carousel View */}
          <div className="lg:hidden">
            <div className="relative overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {cards.map((card) => {
                  const IconComponent = card.icon;
                  return (
                    <div key={card.id} className="w-full flex-shrink-0">
                      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.gradient} p-4 mx-2 transition-all duration-300 hover:shadow-lg ${card.hoverBorder}`}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`flex items-center gap-2 px-2 py-1 rounded-md text-xs font-medium ${getTagColorClasses(card.tagColor)}`}>
                            <IconComponent className="h-3 w-3" />
                            <span>{card.tag}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                          {card.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                          {card.description}
                        </p>
                        
                        <a href="#" className={`inline-flex items-center font-medium transition-colors text-sm ${getLinkColorClasses(card.linkColor)}`}>
                          Try it <span className="ml-1">→</span>
                        </a>
                        
                        {/* Icon in top right corner */}
                        <div className="absolute top-3 right-3">
                          <div className={`w-6 h-6 bg-gradient-to-br ${card.iconGradient} rounded-lg flex items-center justify-center`}>
                            <IconComponent className="h-3 w-3 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center mt-4 gap-2">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards; 
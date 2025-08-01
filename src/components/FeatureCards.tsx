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
      tagColor: "orange",
      gradient: "from-blue-50 to-white",
      icon: Zap,
      linkColor: "blue",
      iconGradient: "from-blue-400 to-purple-500"
    },
    {
      id: 2,
      title: "AI Conversational Learning",
      description: "AI learns grammar and conversation scenarios for easier learning!",
      tag: "AI Learning",
      tagColor: "green",
      gradient: "from-green-50 to-white",
      icon: Brain,
      linkColor: "green",
      iconGradient: "from-green-400 to-teal-500"
    },
    {
      id: 3,
      title: "Customized Knowledge",
      description: "Enhance your translations with context-aware knowledge expansion that adapts to your specific domain and requirements.",
      tag: "Customized Knowledge",
      tagColor: "purple",
      gradient: "from-purple-50 to-white",
      icon: Brain,
      linkColor: "purple",
      iconGradient: "from-purple-400 to-pink-500"
    },
    {
      id: 4,
      title: "Instant Voice Translation",
      description: "Break down language barriers instantly with live voice translation that works across all your conversations.",
      tag: "Instant Voice Translation",
      tagColor: "orange",
      gradient: "from-orange-50 to-white",
      icon: Mic,
      linkColor: "orange",
      iconGradient: "from-orange-400 to-red-500"
    },
    {
      id: 5,
      title: "AI Image Interaction",
      description: "Upload images to directly chat with AI and receive answers or translations.",
      tag: "AI Image Chat",
      tagColor: "indigo",
      gradient: "from-indigo-50 to-white",
      icon: Image,
      linkColor: "indigo",
      iconGradient: "from-indigo-400 to-blue-500"
    },
    {
      id: 6,
      title: "Photo Translation Tool",
      description: "Прекрасно распознаёт картинки, фото, конспекты, контракты.",
      tag: "Photo Translation",
      tagColor: "pink",
      gradient: "from-pink-50 to-white",
      icon: Camera,
      linkColor: "pink",
      iconGradient: "from-pink-400 to-rose-500"
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
      orange: "bg-orange-100 text-orange-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      indigo: "bg-indigo-100 text-indigo-600",
      pink: "bg-pink-100 text-pink-600"
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
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Desktop Grid View */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-6">
            {cards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className={`relative overflow-hidden rounded-xl bg-gradient-to-b ${card.gradient} p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${getTagColorClasses(card.tagColor)}`}>
                      <IconComponent className="h-4 w-4" />
                      <span className="text-sm font-medium">{card.tag}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {card.description}
                  </p>
                  
                  <a href="#" className={`inline-flex items-center font-medium transition-colors ${getLinkColorClasses(card.linkColor)}`}>
                    Try it <span className="ml-1">→</span>
                  </a>
                  
                  {/* Cute illustration */}
                  <div className="absolute bottom-4 right-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                      <div className={`w-12 h-12 bg-gradient-to-br ${card.iconGradient} rounded-full flex items-center justify-center`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
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
                      <div className={`relative overflow-hidden rounded-xl bg-gradient-to-b ${card.gradient} p-6 shadow-lg mx-2`}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${getTagColorClasses(card.tagColor)}`}>
                            <IconComponent className="h-4 w-4" />
                            <span className="text-sm font-medium">{card.tag}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                          {card.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                          {card.description}
                        </p>
                        
                        <a href="#" className={`inline-flex items-center font-medium transition-colors text-sm ${getLinkColorClasses(card.linkColor)}`}>
                          Try it <span className="ml-1">→</span>
                        </a>
                        
                        {/* Cute illustration */}
                        <div className="absolute bottom-3 right-3">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                            <div className={`w-8 h-8 bg-gradient-to-br ${card.iconGradient} rounded-full flex items-center justify-center`}>
                              <IconComponent className="h-4 w-4 text-white" />
                            </div>
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
import { Brain, Mic, Zap, Search, Image, Camera } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeatureCards = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const cards = [
    {
      id: 1,
      title: t('features.aiTranslation.title'),
      description: t('features.aiTranslation.description'),
      tag: t('features.aiTranslation.tag'),
      tagColor: "blue",
      gradient: "from-blue-100/50 to-blue-50/30",
      icon: Zap,
      linkColor: "blue",
      iconGradient: "from-blue-400 to-blue-600",
      image: "/lovable-uploads/文字翻譯.png"
    },
    {
      id: 2,
      title: t('features.aiLearning.title'),
      description: t('features.aiLearning.description'),
      tag: t('features.aiLearning.tag'),
      tagColor: "green",
      gradient: "from-green-100/50 to-green-50/30",
      icon: Brain,
      linkColor: "green",
      iconGradient: "from-green-400 to-green-600",
      image: "/lovable-uploads/AI對話學習.png"
    },
    {
      id: 3,
      title: t('features.customizedKnowledge.title'),
      description: t('features.customizedKnowledge.description'),
      tag: t('features.customizedKnowledge.tag'),
      tagColor: "purple",
      gradient: "from-purple-100/50 to-purple-50/30",
      icon: Brain,
      linkColor: "purple",
      iconGradient: "from-purple-400 to-purple-600",
      image: "/lovable-uploads/鍵盤翻譯.png"
    },
    {
      id: 4,
      title: t('features.voiceTranslation.title'),
      description: t('features.voiceTranslation.description'),
      tag: t('features.voiceTranslation.tag'),
      tagColor: "orange",
      gradient: "from-orange-100/50 to-orange-50/30",
      icon: Mic,
      linkColor: "orange",
      iconGradient: "from-orange-400 to-orange-600",
      image: "/lovable-uploads/語音翻譯.png"
    },
    {
      id: 5,
      title: t('features.aiImageInteraction.title'),
      description: t('features.aiImageInteraction.description'),
      tag: t('features.aiImageInteraction.tag'),
      tagColor: "indigo",
      gradient: "from-indigo-100/50 to-indigo-50/30",
      icon: Image,
      linkColor: "indigo",
      iconGradient: "from-indigo-400 to-indigo-600",
      image: "/lovable-uploads/AI圖片互動.png"
    },
    {
      id: 6,
      title: t('features.photoTranslation.title'),
      description: t('features.photoTranslation.description'),
      tag: t('features.photoTranslation.tag'),
      tagColor: "pink",
      gradient: "from-pink-100/50 to-pink-50/30",
      icon: Camera,
      linkColor: "pink",
      iconGradient: "from-pink-400 to-pink-600",
      image: "/lovable-uploads/照片翻譯.png"
    }
  ];

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      if (!isPaused) {
        if (isDesktop) {
          setCurrentIndex((prevIndex) => {
            if (prevIndex >= cards.length - 2) {
              // If at the end, go to the first page
              return 0;
            }
            return prevIndex + 2;
          });
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }
      }
    }, 3000);
  }, [cards.length, isPaused, isDesktop]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  // Track screen size for navigation
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Mouse event handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default to avoid text selection
    setIsDragging(true);
    setIsPaused(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
    stopAutoPlay();
  }, [stopAutoPlay]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    
    e.preventDefault(); // Prevent default to avoid text selection
    const deltaX = e.clientX - dragStartX;
    setDragOffset(deltaX);
  }, [isDragging, dragStartX]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);
    setIsPaused(false);
    
    // Calculate if we should change slide based on drag distance
    const threshold = 100; // minimum drag distance to trigger slide change
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Swipe right - go to previous
        if (isDesktop) {
          setCurrentIndex((prevIndex) => {
            if (prevIndex <= 0) {
              // If at the beginning, go to the last page
              return Math.max(0, cards.length - 2);
            }
            return Math.max(0, prevIndex - 2);
          });
        } else {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
        }
      } else {
        // Swipe left - go to next
        if (isDesktop) {
          setCurrentIndex((prevIndex) => {
            if (prevIndex >= cards.length - 2) {
              // If at the end, go to the first page
              return 0;
            }
            return Math.min(cards.length - 2, prevIndex + 2);
          });
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }
      }
    }
    
    setDragOffset(0);
    startAutoPlay();
  }, [isDragging, dragOffset, currentIndex, cards.length, startAutoPlay, isDesktop]);

  // Touch event handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setDragStartX(e.touches[0].clientX);
    setDragOffset(0);
    stopAutoPlay();
  }, [stopAutoPlay]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    
    e.preventDefault(); // Prevent default to avoid scrolling
    const deltaX = e.touches[0].clientX - dragStartX;
    setDragOffset(deltaX);
  }, [isDragging, dragStartX]);

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);
    setIsPaused(false);
    
    // Calculate if we should change slide based on drag distance
    const threshold = 50; // smaller threshold for mobile
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Swipe right - go to previous
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
      } else {
        // Swipe left - go to next
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }
    }
    
    setDragOffset(0);
    startAutoPlay();
  }, [isDragging, dragOffset, currentIndex, cards.length, startAutoPlay]);

  // Add global mouse event listeners
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        handleMouseUp();
      }
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        // Throttle the mouse move events to improve performance
        requestAnimationFrame(() => {
          handleMouseMove(e as any);
        });
      }
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isDragging, handleMouseUp, handleMouseMove]);

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

  const getBorderColorClasses = (color: string) => {
    const colors = {
      blue: "hover:border-blue-200",
      green: "hover:border-green-200",
      purple: "hover:border-purple-200",
      orange: "hover:border-orange-200",
      indigo: "hover:border-indigo-200",
      pink: "hover:border-pink-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Desktop Carousel - 2 Cards View */}
          <div className="hidden lg:block">
            <div className="relative">
              <div 
                ref={carouselRef}
                className="relative overflow-hidden rounded-xl cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: `translateX(calc(-${Math.floor(currentIndex / 2) * 100}% + ${dragOffset}px))`,
                    transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
                  }}
                >
                  {Array.from({ length: Math.ceil(cards.length / 2) }, (_, pageIndex) => (
                    <div key={pageIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-2 gap-6">
                        {cards.slice(pageIndex * 2, pageIndex * 2 + 2).map((card) => {
                          const IconComponent = card.icon;
                          return (
                            <div
                              key={card.id}
                              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${card.gradient} p-6 min-h-[560px] transition-all duration-300 hover:shadow-lg border border-transparent ${getBorderColorClasses(card.tagColor)} ${isDragging ? 'select-none' : ''}`}
                            >
                              {/* Content Layout - Text on Top, Image on Bottom */}
                              <div className="flex flex-col h-full">
                                {/* Top - Text Content */}
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className={`flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-medium ${getTagColorClasses(card.tagColor)}`}>
                                      <IconComponent className="h-3 w-3" />
                                      <span>{card.tag}</span>
                                    </div>
                                  </div>
                                  
                                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 leading-tight">
                                    {card.title}
                                  </h3>
                                  
                                  <p className="text-gray-600 mb-4 leading-relaxed text-base">
                                    {card.description}
                                  </p>
                                  
                                  <a href="https://apps.apple.com/by/app/any-translator-ai-translate/id6738693321" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center font-medium transition-colors text-sm ${getLinkColorClasses(card.linkColor)}`}>
                                    {t('features.tryIt')} <span className="ml-1">→</span>
                                  </a>
                                </div>
                                
                                {/* Bottom - Screenshot Center Aligned */}
                                <div className="flex justify-center">
                                  <div className="opacity-95 hover:opacity-100 transition-all duration-300 hover:scale-105 -mb-6">
                                    <img 
                                      src={card.image} 
                                      alt={card.title}
                                      className="w-[600px] h-[600px] object-contain rounded-3xl"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Desktop Carousel Indicators */}
                <div className="flex justify-center mt-4 gap-2">
                  {Array.from({ length: Math.ceil(cards.length / 2) }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index * 2)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        Math.floor(currentIndex / 2) === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Carousel View */}
          <div className="lg:hidden">
            <div className="relative">
              <div 
                ref={carouselRef}
                className="relative overflow-hidden rounded-xl cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
                    transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
                  }}
                >
                  {cards.map((card) => {
                    const IconComponent = card.icon;
                    return (
                      <div key={card.id} className="w-full flex-shrink-0">
                        <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${card.gradient} p-4 mx-2 min-h-[420px] transition-all duration-300 hover:shadow-lg border border-transparent ${getBorderColorClasses(card.tagColor)} ${isDragging ? 'select-none' : ''}`}>
                          {/* Content Layout - Text on Top, Image on Bottom */}
                          <div className="flex flex-col h-full">
                            {/* Top - Text Content */}
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <div className={`flex items-center gap-2 px-2 py-1 rounded-md text-xs font-medium ${getTagColorClasses(card.tagColor)}`}>
                                  <IconComponent className="h-3 w-3" />
                                  <span>{card.tag}</span>
                                </div>
                              </div>
                              
                              <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                                {card.title}
                              </h3>
                              
                              <p className="text-gray-600 mb-3 leading-relaxed text-base">
                                {card.description}
                              </p>
                              
                              <a href="https://apps.apple.com/by/app/any-translator-ai-translate/id6738693321" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center font-medium transition-colors text-sm ${getLinkColorClasses(card.linkColor)}`}>
                                {t('features.tryIt')} <span className="ml-1">→</span>
                              </a>
                            </div>
                            
                            {/* Bottom - Screenshot Center Aligned */}
                            <div className="flex justify-center">
                              <div className="opacity-95 hover:opacity-100 transition-all duration-300 hover:scale-105 -mb-4">
                                <img 
                                  src={card.image} 
                                  alt={card.title}
                                  className="w-[399px] h-[399px] object-contain rounded-3xl"
                                />
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
      </div>
    </section>
  );
};

export default FeatureCards;
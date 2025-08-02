import { useEffect, useState, useRef, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      quote: "I used AnyTranslator on my trip to Seoul and it was a lifesaver. I don't speak Korean at all, but the instant keyboard translation let me order food, ask directions, even chat with locals.",
      name: "Samantha R.",
      role: "USA",
      logo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Really useful for messaging international colleagues. You just type and it translates — no need to switch apps.",
      name: "Michael Thompson",
      role: "UK",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Приложение очень выручает на учёбе. Я учу японский, и с помощью AnyTranslator могу быстро переводить слова прямо в переписке с преподавателем.",
      name: "Малинка",
      role: "Belarus",
      logo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "我去法国旅游时用的这个App，太方便了。应用中使用键盘翻译功能，无需切换应用。太棒了！",
      name: "李婷",
      role: "China",
      logo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Je l'utilise tous les jours pour mes devoirs d'espagnol. L'app apprend avec moi, c'est top.",
      name: "Julien Bernard",
      role: "France",
      logo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Excelente aplicación para aprender idiomas. La traducción instantánea me ayuda mucho con mis estudios de inglés.",
      name: "María González",
      role: "Spain",
      logo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "このアプリは画像翻訳が素晴らしいです。写真を撮るだけで、教科書やノートの内容をすぐに理解できます。特に手書きのメモも正確に翻訳してくれるので、勉強がとても楽になりました。",
      name: "田中 美咲",
      role: "Japan",
      logo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "이 앱은 정말 유용해요. 한국어를 배우는 동안 AnyTranslator 덕분에 영어 문장을 즉시 이해할 수 있어요. 특히 키보드 번역 기능이 훌륭해요.",
      name: "김민수",
      role: "South Korea",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Die Spracherkennung ist fantastisch! Ich kann einfach sprechen und die Übersetzung wird sofort angezeigt. Perfekt für Gespräche mit ausländischen Kollegen.",
      name: "Anna Schmidt",
      role: "Germany",
      logo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
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
            if (prevIndex >= testimonials.length - 3) {
              // If at the end, go to the first page
              return 0;
            }
            return prevIndex + 3;
          });
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }
      }
    }, 4000);
  }, [testimonials.length, isPaused, isDesktop]);

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
              return Math.max(0, testimonials.length - 3);
            }
            return Math.max(0, prevIndex - 3);
          });
        } else {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
        }
      } else {
        // Swipe left - go to next
        if (isDesktop) {
          setCurrentIndex((prevIndex) => {
            if (prevIndex >= testimonials.length - 3) {
              // If at the end, go to the first page
              return 0;
            }
            return Math.min(testimonials.length - 3, prevIndex + 3);
          });
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }
      }
    }
    
    setDragOffset(0);
    startAutoPlay();
  }, [isDragging, dragOffset, currentIndex, testimonials.length, startAutoPlay, isDesktop]);

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
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      } else {
        // Swipe left - go to next
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
    }
    
    setDragOffset(0);
    startAutoPlay();
  }, [isDragging, dragOffset, currentIndex, testimonials.length, startAutoPlay]);

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

  return (
    <section className="py-16 lg:py-20 pb-5 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-lg font-normal text-gray-600 mb-6">
              💬 {t('testimonials.title')}
            </h2>
          </div>

          {/* Desktop Carousel View */}
          <div className="hidden lg:block mb-12">
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                ref={carouselRef}
                className="flex transition-transform duration-500 ease-in-out cursor-grab active:cursor-grabbing"
                style={{ 
                  transform: `translateX(calc(-${Math.floor(currentIndex / 3) * 100}% + ${dragOffset}px))`,
                  transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
                }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, groupIndex) => (
                  <div key={groupIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-3 gap-6">
                      {testimonials.slice(groupIndex * 3, (groupIndex + 1) * 3).map((testimonial, index) => {
                        const actualIndex = (groupIndex * 3 + index) % testimonials.length;
                        const actualTestimonial = testimonials[actualIndex];
                        return (
                          <div key={index} className={`bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-200 hover:shadow-lg transition-all duration-300 h-[320px] flex flex-col ${isDragging ? 'select-none' : ''}`}>
                            <div className="mb-6">
                              <h4 className="font-semibold text-gray-900 mb-2 text-base">{actualTestimonial.name}</h4>
                              <p className="text-sm text-gray-600 mb-3">{actualTestimonial.role}</p>
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                            <blockquote className="text-base text-gray-700 leading-relaxed flex-1 overflow-hidden">
                              {actualTestimonial.quote}
                            </blockquote>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Desktop Carousel Indicators */}
              <div className="flex justify-center mt-4 gap-2">
                {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index * 3)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      Math.floor(currentIndex / 3) === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Carousel View */}
          <div className="lg:hidden">
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                ref={carouselRef}
                className="flex transition-transform duration-500 ease-in-out cursor-grab active:cursor-grabbing"
                style={{ 
                  transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
                  transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
                }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className={`bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-200 h-[360px] flex flex-col ${isDragging ? 'select-none' : ''}`}>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">{testimonial.name}</h4>
                        <p className="text-xs text-gray-600 mb-2">{testimonial.role}</p>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <blockquote className="text-sm text-gray-700 leading-relaxed flex-1 overflow-hidden">
                        {testimonial.quote}
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center mt-4 gap-2">
                {testimonials.map((_, index) => (
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

          {/* Stats Section */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
                <div className="text-sm text-gray-600">{t('testimonials.stats.users')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">Top 10</div>
                <div className="text-sm text-gray-600">{t('testimonials.stats.aiTranslation')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-sm text-gray-600">{t('testimonials.stats.languages')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">5K+</div>
                <div className="text-sm text-gray-600">{t('testimonials.stats.community')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
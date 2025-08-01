import { useEffect, useState } from "react";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Traveled through Japan without knowing a word of Japanese. AnyTranslator saved me in restaurants, train stations, and even helped me understand local customs. It's like having a local friend everywhere!",
      name: "Alex Chen",
      role: "Backpacker",
      logo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Studying in Germany was a nightmare until I found AnyTranslator. It doesn't just translate—it explains grammar, gives context, and helps me actually learn the language. My German professor is impressed!",
      name: "Maria Rodriguez",
      role: "Exchange Student",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "As a business owner, I can now confidently work with international clients. AnyTranslator helps me understand cultural nuances and business etiquette. Closed deals in 5 countries this year!",
      name: "David Kim",
      role: "Entrepreneur",
      logo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "The keyboard integration is genius! I can type in any language and it translates instantly. No more copy-pasting between apps. My productivity has doubled since I started using it.",
      name: "Sarah Johnson",
      role: "Remote Worker",
      logo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Living in Italy as an American was challenging until AnyTranslator. It explains idioms, cultural references, and even helps me sound more natural. My Italian friends think I've been studying for years!",
      name: "Michael Thompson",
      role: "Expat",
      logo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "As a doctor working with international patients, AnyTranslator helps me communicate medical terms accurately. It understands context and medical jargon—something other translators completely miss.",
      name: "Dr. Elena Petrova",
      role: "Medical Professional",
      logo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Teaching English in China was impossible without proper translation tools. AnyTranslator helps me explain complex grammar concepts to my students in their native language. Game changer!",
      name: "James Wilson",
      role: "English Teacher",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Running a global e-commerce business requires communicating with suppliers worldwide. AnyTranslator breaks down language barriers and helps me negotiate better deals in any language.",
      name: "Lisa Park",
      role: "E-commerce Owner",
      logo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "As a researcher collaborating with international teams, AnyTranslator helps me understand academic papers and communicate complex ideas across language barriers. Essential for global research!",
      name: "Dr. Carlos Mendez",
      role: "Research Scientist",
      logo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Traveling solo in Southeast Asia was daunting, but AnyTranslator made it feel safe and comfortable. I could ask for directions, order food, and even make friends despite language barriers.",
      name: "Emma Davis",
      role: "Solo Traveler",
      logo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Customer stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how teams around the world use AnyTranslator to break down language barriers
            </p>
          </div>

                    {/* Desktop Carousel View */}
          <div className="hidden lg:block mb-12">
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${Math.floor(currentIndex / 3) * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, groupIndex) => (
                  <div key={groupIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-3 gap-8">
                      {testimonials.slice(groupIndex * 3, (groupIndex + 1) * 3).map((testimonial, index) => {
                        const actualIndex = (groupIndex * 3 + index) % testimonials.length;
                        const actualTestimonial = testimonials[actualIndex];
                        return (
                          <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                            <div className="mb-6">
                              <h4 className="font-semibold text-gray-900 mb-1">{actualTestimonial.name}</h4>
                              <p className="text-sm text-gray-600 mb-2">{actualTestimonial.role}</p>
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                            <blockquote className="text-lg text-gray-700 leading-relaxed">
                              "{actualTestimonial.quote}"
                            </blockquote>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={() => setCurrentIndex((currentIndex - 3 + testimonials.length) % testimonials.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => setCurrentIndex((currentIndex + 3) % testimonials.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Carousel View */}
          <div className="lg:hidden">
            <div className="relative overflow-hidden rounded-2xl">
                             <div 
                 className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
               >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mx-2">
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
                      <blockquote className="text-base text-gray-700 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                  </div>
                                 ))}
               </div>
               
               {/* Mobile Navigation Arrows */}
               <button 
                 onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)}
                 className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
               >
                 <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                 </svg>
               </button>
               
               <button 
                 onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}
                 className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
               >
                 <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
               </button>
               
               {/* Carousel Indicators */}
               <div className="flex justify-center mt-6 gap-2">
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
                <div className="text-3xl font-bold text-gray-900 mb-2">100M+</div>
                <div className="text-sm text-gray-600">users worldwide</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">#1</div>
                <div className="text-sm text-gray-600">AI translation (G2)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-sm text-gray-600">languages supported</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">1M+</div>
                <div className="text-sm text-gray-600">community members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
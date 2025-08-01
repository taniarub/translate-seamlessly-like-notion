const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "I used AnyTranslator while traveling in Japan—worked perfectly in restaurants and stations.",
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Finally, a translator that actually understands grammar and idioms.",
      name: "Miguel Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "I love the learning features. I'm using it daily to practice French.",
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-xl">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-lg max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-6">
              <p className="text-notion-lg text-text-primary leading-loose font-medium">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-notion-sm text-text-secondary">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul M.",
      role: "Member for 1 year",
      content: "Mathi Fitness has the most advanced equipment I've seen in Gandhipuram. The trainers are extremely professional and supportive.",
      rating: 5
    },
    {
      name: "Priya S.",
      role: "Member for 6 months",
      content: "The facility is incredibly spacious and clean. I never have to wait for machines, and the hygiene standards are top-notch.",
      rating: 5
    },
    {
      name: "Karthik R.",
      role: "Member for 2 years",
      content: "Flexible timings allow me to work out late at night. The variety of workouts keeps me motivated every single day.",
      rating: 4.5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-2 text-sm">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Members Say</span>
          </h3>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-white/10 p-8 md:p-12 rounded-3xl relative"
            >
              <Quote className="w-16 h-16 text-primary/20 absolute top-8 right-8" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(reviews[currentIndex].rating) ? 'fill-primary text-primary' : 'fill-white/20 text-white/20'}`} 
                  />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 italic mb-8 leading-relaxed">
                "{reviews[currentIndex].content}"
              </p>
              
              <div>
                <h4 className="text-white font-bold text-lg">{reviews[currentIndex].name}</h4>
                <p className="text-gray-400 text-sm">{reviews[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="p-3 rounded-full bg-card border border-white/10 text-white hover:bg-primary hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="p-3 rounded-full bg-card border border-white/10 text-white hover:bg-primary hover:border-primary transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

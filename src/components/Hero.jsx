import React from 'react';
import { motion } from 'framer-motion';
import { Star, Phone, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Graphic / Overlay */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Rating Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-6"
          >
            <div className="flex items-center text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="ml-1 font-bold text-white text-sm">4.9</span>
            </div>
            <span className="text-gray-300 text-xs px-2 border-l border-gray-500">200+ Reviews</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4 leading-tight">
            Build Your <span className="text-primary text-glow">Best</span> <br className="hidden md:block"/> Version
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl font-light">
            "Witness a full fledged and advanced fitness coaching."
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#plans" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 box-glow flex items-center gap-2">
              Join Now
            </a>
            <a href="tel:+919876543210" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg transition-all border border-white/10 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="bg-secondary/20 hover:bg-secondary/30 backdrop-blur-md text-secondary border border-secondary/50 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-primary/20 blur-[120px] rounded-full point-events-none z-0" />
    </section>
  );
};

export default Hero;

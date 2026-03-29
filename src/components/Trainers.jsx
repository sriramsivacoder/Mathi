import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Link2 } from 'lucide-react';

const Trainers = () => {
  const trainers = [
    {
      name: "Marcus Johnson",
      role: "Head Coach & Strength",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Sarah Williams",
      role: "Yoga & Flexibility",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "David Chen",
      role: "HIIT & Cardio Expert",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="trainers" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-2 text-sm">Expert Team</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Trainers</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our friendly, supportive, and professional trainers are here to guide you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-900">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-left transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-white mb-1">{trainer.name}</h4>
                <p className="text-primary font-medium mb-4">{trainer.role}</p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Instagram"><Share2 className="w-5 h-5" /></a>
                  <a href="#" className="text-white hover:text-primary transition-colors" aria-label="X (Twitter)"><Link2 className="w-5 h-5" /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;

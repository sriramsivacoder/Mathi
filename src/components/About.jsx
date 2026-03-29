import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Sparkles, Maximize, Trophy } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Maximize className="w-8 h-8 text-primary" />,
      title: "Spacious Layout",
      desc: "Train without feeling crowded in our massive facility."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Clean & Hygienic",
      desc: "Strict sanitization and immaculate changing rooms."
    },
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Advanced Environment",
      desc: "A positive, energetic atmosphere for peak performance."
    }
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
              alt="Inside Mathi Fitness" 
              className="relative rounded-2xl shadow-2xl border border-white/5 object-cover h-[500px] w-full"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-2xl border border-white/10 shadow-xl flex items-center gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Dumbbell className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-3xl font-black text-white">4.9<span className="text-primary">⭐</span></p>
                <p className="text-sm font-medium text-gray-400">Top Rated Gym</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase mb-2 text-sm">About Mathi Fitness</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Witness Full-Fledged <br /> & Advanced Coaching
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              At Mathi Fitness, we don't just provide equipment; we provide an ecosystem for transformation. Located in the heart of Gandhipuram, Coimbatore, our 4.9-star facility is designed for those who demand the best from themselves. With advanced equipment, a spacious layout, and a supportive community, your fitness journey starts here.
            </p>

            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{feature.title}</h4>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Activity, Layout, Sparkles, Clock, Users } from 'lucide-react';

const Features = () => {
  const reasons = [
    {
      icon: <Dumbbell className="w-10 h-10 text-primary" />,
      title: "Advanced Equipment",
      desc: "Top-tier machines and free weights tailored for strength and conditioning."
    },
    {
      icon: <Activity className="w-10 h-10 text-primary" />,
      title: "Variety of Workouts",
      desc: "From CrossFit and HIIT to Yoga and pure bodybuilding, we have it all."
    },
    {
      icon: <Layout className="w-10 h-10 text-primary" />,
      title: "Spacious Gym",
      desc: "Never wait for a machine. Our massive floor area ensures comfortable workouts."
    },
    {
      icon: <Sparkles className="w-10 h-10 text-primary" />,
      title: "Clean & Hygienic",
      desc: "Daily deep cleaning and constant sanitization of all touches points."
    },
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: "Flexible Timings",
      desc: "Extended hours allowing you to work out whenever fits your busy schedule."
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Professional Trainers",
      desc: "Certified, friendly experts dedicated to helping you achieve your goals."
    }
  ];

  return (
    <section id="features" className="py-24 bg-card border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-2 text-sm">Why Choose Us</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
            The Mathi Fitness <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Advantage</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the gold standard in fitness with amenities and support that push you further.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-background border border-white/5 hover:border-primary/50 transition-colors group"
            >
              <div className="bg-white/5 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                {reason.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">{reason.title}</h4>
              <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

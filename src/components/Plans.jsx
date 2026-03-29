import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: "Monthly",
      price: "1,500",
      duration: "per month",
      features: ["Access to all equipment", "General guidance", "Locker facility", "Free WiFi"],
      isPopular: false
    },
    {
      name: "Quarterly",
      price: "4,000",
      duration: "per 3 months",
      features: ["Everything in Monthly", "1 Diet Consultation", "Advanced analytics app", "Guest pass (1/mo)"],
      isPopular: true
    },
    {
      name: "Yearly",
      price: "12,000",
      duration: "per year",
      features: ["Everything in Quarterly", "Personal trainer (2 sessions/mo)", "Free gym merchandise", "Unlimited guest passes"],
      isPopular: false
    }
  ];

  return (
    <section id="plans" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase mb-2 text-sm"
          >
            Membership Plans
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Commitment</span>
          </motion.h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Select the plan that matches your fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-3xl p-8 bg-card border ${
                plan.isPopular ? 'border-primary shadow-2xl shadow-primary/20 scale-105 z-10' : 'border-white/5'
              } transition-all duration-300`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase box-glow">
                  Most Popular
                </div>
              )}

              <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
              <div className="flex items-baseline gap-1 mb-6 border-b border-white/10 pb-6">
                <span className="text-4xl font-black text-white">₹{plan.price}</span>
                <span className="text-gray-400 text-sm">/{plan.duration}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/919876543210?text=I'm interested in the ${plan.name} plan at Mathi Fitness.`}
                target="_blank"
                rel="noreferrer"
                className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                  plan.isPopular 
                    ? 'bg-primary hover:bg-primary-hover text-white box-glow' 
                    : 'bg-white/5 hover:bg-white/10 text-white'
                }`}
              >
                Join Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;

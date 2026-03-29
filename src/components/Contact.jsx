import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-2 text-sm">Contact Us</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Journey Today</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-4 items-start">
              <div className="bg-white/5 p-4 rounded-xl">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Location</h4>
                <p className="text-gray-400 leading-relaxed">
                  No.6, 100 feet Road, 1st St, <br />
                  opp. Vels Grand Inn Hotel, Raju Naidu Layout, <br />
                  Gandhipuram, Coimbatore, Tamil Nadu 641012
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+919876543210" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-colors border border-white/5 flex-1">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-sm text-gray-400">Call Us</p>
                  <p className="font-bold text-white">+91 98765 43210</p>
                </div>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-xl transition-colors border border-white/5 flex-1">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="font-bold text-white">Message Us</p>
                </div>
              </a>
            </div>

            <div className="w-full h-[300px] rounded-2xl overflow-hidden border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1437!2d76.9634!3d11.0264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zExwrMDEwMiczNS40Ik4gNzbcqw1Nyc0Mi40IkU!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Mathi Fitness Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background border border-white/5 rounded-3xl p-8 shadow-2xl"
          >
            <h4 className="text-2xl font-bold text-white mb-6">Send an Enquiry</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-all box-glow"
              >
                Submit Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Zap, Quote } from 'lucide-react';

const Achievements = () => {
  const testimonials = [
    {
      name: "Senior Developer",
      role: "Tech Lead",
      company: "Techorizon IT Services",
      message: "Umesh consistently delivers exceptional results and shows remarkable problem-solving skills.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Project Manager",
      role: "PM",
      company: "Techorizon IT Services",
      message: "Outstanding performance across multiple projects. Always reliable and innovative.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Team Lead",
      role: "Engineering Manager",
      company: "Techorizon IT Services",
      message: "Umesh's technical expertise and dedication make him a valuable team member.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden animate-on-scroll">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Celebrating milestones and recognition from peers and industry leaders
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Main Achievement - Hidden Gem Award */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/30 relative overflow-hidden"
            >
              {/* Animated Background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-xl"
              />
              
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-block mb-6"
                >
                  <div className="relative">
                    <Trophy className="w-24 h-24 text-yellow-400 mx-auto" />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full opacity-60"
                    />
                  </div>
                </motion.div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  🏆 Hidden Gem Annual Award
                </h3>
                <p className="text-2xl text-yellow-400 font-semibold mb-4">2024-25</p>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  "Awarded for delivering superb results across multiple products and modules, 
                  demonstrating exceptional technical skills and consistent high-quality output."
                </p>

                {/* Achievement Video Placeholder */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="mt-8 relative max-w-md mx-auto"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-yellow-500/30 flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-yellow-400"
                    >
                      <Star className="w-16 h-16" />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <p className="text-white font-semibold">Achievement Highlight</p>
                      <p className="text-gray-300 text-sm">Recognition Video</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            What Colleagues Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="stagger-item bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 relative"
              >
                <Quote className="w-8 h-8 text-blue-400 mb-4 opacity-60" />
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.message}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/30"
                  />
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-xs">{testimonial.company}</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute top-4 right-4 w-6 h-6 border-2 border-blue-400/30 rounded-full"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Award, value: '1', label: 'Major Award', color: 'text-yellow-400' },
            { icon: Star, value: '50+', label: 'Projects Delivered', color: 'text-blue-400' },
            { icon: Zap, value: '15+', label: 'Technologies', color: 'text-green-400' },
            { icon: Trophy, value: '100%', label: 'Client Satisfaction', color: 'text-purple-400' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
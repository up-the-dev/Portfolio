import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, Shield, Smartphone, Globe, Bot, CheckCircle, ArrowRight } from 'lucide-react';

const FreelanceSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites with cutting-edge technologies'
    },
    {
      icon: Smartphone,
      title: 'Android Development',
      description: 'Native and cross-platform mobile applications'
    },
    {
      icon: Bot,
      title: 'AI-Enhanced Solutions',
      description: 'Intelligent applications powered by AI and machine learning'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Rapid development with reliable, scalable architecture'
    }
  ];

  const features = [
    'AI-enhanced development workflow',
    'Web & Android app development',
    'Fast & scalable delivery',
    'Modern tech stack expertise',
    'End-to-end project management',
    'Post-launch support & maintenance'
  ];

  return (
    <section id="freelance" className="py-20 relative overflow-hidden animate-on-scroll">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Rocket className="w-16 h-16 text-green-400" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            🚀 Hire Me to Boost Your Next Project
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            I work as a freelancer and love helping businesses launch high-performance, scalable apps and websites. 
            I deliver modern, AI-enhanced solutions using a rapid and reliable tech stack that ensures your project 
            stands out in today's competitive market.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotateY: 5
              }}
              className="stagger-item bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300 text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="inline-block p-4 bg-green-500/20 rounded-full mb-4 group-hover:bg-green-500/30"
              >
                <service.icon className="w-8 h-8 text-green-400" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Why Choose Me?</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Tech Badges */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h4 className="text-2xl font-bold text-white mb-8 text-center">Development Expertise</h4>
              
              {/* Tech Stack Badges */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Bot, label: 'AI-Enhanced', color: 'from-purple-500 to-pink-500' },
                  { icon: Zap, label: 'Fast Delivery', color: 'from-yellow-500 to-orange-500' },
                  { icon: Shield, label: 'Reliable & Secure', color: 'from-green-500 to-blue-500' },
                  { icon: Globe, label: 'Scalable Solutions', color: 'from-blue-500 to-purple-500' }
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`bg-gradient-to-r ${badge.color} bg-opacity-20 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center`}
                  >
                    <badge.icon className="w-8 h-8 mx-auto mb-2 text-white" />
                    <p className="text-white font-semibold text-sm">{badge.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: '50+', label: 'Projects' },
                  { value: '100%', label: 'Success Rate' },
                  { value: '24/7', label: 'Support' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-white/5 rounded-lg"
                  >
                    <div className="text-2xl font-bold text-green-400">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-60"
            />
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FreelanceSection;
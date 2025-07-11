import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/up-the-dev', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/umeshpawarsde', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:umeshpawarsde@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-slate-900/50 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Umesh Pawar
            </motion.div>
            <p className="text-gray-400 max-w-md">
              Full Stack Developer passionate about creating innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-gray-400">umeshpawarsde@gmail.com</p>
              <p className="text-gray-400">+91 8208709752</p>
              <p className="text-gray-400">Pune, India</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-white/5 rounded-full border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <link.icon size={18} className="text-gray-400 hover:text-blue-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>and</span>
            <Code className="w-4 h-4 text-blue-400" />
            <span>by Umesh Pawar</span>
          </div>
          
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            © 2024 Umesh Pawar. All rights reserved.
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white shadow-lg transition-colors z-50"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
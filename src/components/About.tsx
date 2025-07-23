import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, MapPin, Calendar } from "lucide-react";
import { useScrollAnimations } from "./ScrollAnimations";

const About = () => {
  useScrollAnimations();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16 animate-on-scroll"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-500 shadow-2xl">
                <img
                  src="profilepic.jpeg"
                  alt="Umesh Pawar"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500 rounded-full opacity-60"
              />
            </div>

            {/* Quick Info Cards */}
            <div className="mt-8 space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              >
                <MapPin className="w-6 h-6 text-blue-400" />
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-400">Pune, India</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              >
                <Calendar className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="text-white font-semibold">Experience</p>
                  <p className="text-gray-400">2.7 Years</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Software Developer
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern
                web technologies. Currently working at{" "}
                <span className="text-blue-400 font-semibold">
                  Techorizon IT Services Pvt Ltd{" "}
                </span>
                in Pune, I specialize in building scalable applications using
                Golang, Node.js, and React.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in software development has been driven by a
                curiosity to solve complex problems and create meaningful user
                experiences. I believe in writing clean, maintainable code and
                staying updated with the latest industry trends.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span>Education</span>
              </h4>
              <div className="space-y-3">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <p className="text-white font-semibold">
                    Masters in Computer Science
                  </p>
                  <p className="text-gray-400">
                    Dr. Babasaheb Ambedkar Marathwada University
                  </p>
                  {/* <p className="text-blue-400">2023-2025</p> */}
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <p className="text-white font-semibold">
                    Bachelors in Computer Science
                  </p>
                  <p className="text-gray-400">
                    Dr. Babasaheb Ambedkar Marathwada University
                  </p>
                  <p className="text-green-400 font-semibold">CGPA: 8.7</p>
                </div>
              </div>
            </div>

            {/* Awards */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>Recognition</span>
              </h4>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-lg p-4 border border-yellow-500/30"
              >
                <p className="text-white font-semibold">
                  🏆 Hidden Gem Annual Award
                </p>
                <p className="text-yellow-400">2024-25</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

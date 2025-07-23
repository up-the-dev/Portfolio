import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building, Award } from "lucide-react";
import { useScrollAnimations } from "./ScrollAnimations";

const Experience = () => {
  useScrollAnimations();

  const timeline = [
    {
      type: "work",
      title: "Software Developer",
      company: "Techorizon IT Services Pvt Ltd",
      location: "Pune, India",
      duration: "2022 - Present",
      description:
        "Developing scalable web applications using modern technologies including Golang, Node.js, and React. Leading backend architecture design and implementing secure REST APIs.",
      achievements: [
        "Built 15+ production-ready web applications",
        "Improved system performance by 40%",
        "Implemented JWT authentication and RBAC",
        "Mentored 3 junior developers",
      ],
      icon: Building,
    },
    {
      type: "education",
      title: "Masters in Computer Science",
      company: "Dr. Babasaheb Ambedkar Marathwada University",
      location: "India",
      duration: "2023 - 2025",
      description:
        "Advanced studies in software engineering, algorithms, and distributed systems.",
      achievements: [
        "Specializing in Backend Systems",
        "Research in Microservices Architecture",
        "Advanced Database Design",
        "Cloud Computing Fundamentals",
      ],
      icon: Award,
    },
    {
      type: "education",
      title: "Bachelors in Computer Science",
      company: "Dr. Babasaheb Ambedkar Marathwada University",
      location: "India",
      duration: "2018 - 2022",
      description:
        "Comprehensive computer science education with focus on programming fundamentals and software development.",
      achievements: [
        "CGPA: 8.7/10",
        "Dean's List recipient",
        "Final year project on Web Development",
        "Active member of coding club",
      ],
      icon: Award,
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 animate-on-scroll"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey in software development and continuous learning
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
              >
                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0
                      ? "md:text-right md:pr-8"
                      : "md:text-left md:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-${
                      item.type === "work" ? "blue" : "purple"
                    }-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-${
                      item.type === "work" ? "blue" : "purple"
                    }-500/25`}
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <div
                        className={`p-2 rounded-full ${
                          item.type === "work"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-purple-500/20 text-purple-400"
                        }`}
                      >
                        <item.icon size={20} />
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          item.type === "work"
                            ? "bg-blue-500/20 text-blue-300"
                            : "bg-purple-500/20 text-purple-300"
                        }`}
                      >
                        {item.type === "work" ? "Work" : "Education"}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-1">
                      {item.company}
                    </p>

                    <div className="flex items-center space-x-4 text-gray-400 text-sm mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                      {item.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className="flex items-center space-x-2"
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              item.type === "work"
                                ? "bg-blue-400"
                                : "bg-purple-400"
                            }`}
                          />
                          <span className="text-gray-300 text-sm">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 hidden md:block">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-4 h-4 rounded-full ${
                      item.type === "work" ? "bg-blue-500" : "bg-purple-500"
                    } border-4 border-slate-900 shadow-lg`}
                  />
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-full md:w-5/12 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Recent Recognition
          </h3>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30"
          >
            <div className="flex items-center justify-center space-x-3">
              <Award className="w-8 h-8 text-yellow-400" />
              <div>
                <p className="text-xl font-bold text-white">
                  Hidden Gem Annual Award
                </p>
                <p className="text-yellow-400">2024-25</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

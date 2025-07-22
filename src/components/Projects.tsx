import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useScrollAnimations } from "./ScrollAnimations";

const Projects = () => {
  useScrollAnimations();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "IoT Data Ingestion & Processing Platform",
      description:
        "Designed a centralized and flexible IoT platform for secure data ingestion and real-time processing using MQTT and Kafka.",
      image:
        "https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Golang", "Kafka", "MQTT", "PostgreSQL"],
      features: [
        "Real-time IoT Data Collection",
        "Kafka-based Message Queuing",
        "Real-time Data Transformation",
        "Persistent Data Storage",
      ],
      github: "https://github.com/up-the-dev",
      demo: "https://demo.example.com",
    },
    {
      id: 2,
      title: "Centralized Accounting System (Backend)",
      description:
        "Built a scalable backend accounting system with custom financial ledger modules, API endpoints, and audit mechanisms.",
      image:
        "https://c1.wallpaperflare.com/preview/898/284/844/stock-trading-monitor-desk.jpg",
      tech: ["Golang", "PostgreSQL", "Redis", "Docker"],
      features: [
        "Ledger & Transaction Modules",
        "RESTful API for Financial Operations",
        "Audit Trails & Error Handling",
        "Enterprise-Grade Scalability",
      ],
      github: "https://github.com/up-the-dev",
      demo: "https://demo.example.com",
    },
    {
      id: 4,
      title: "Full-Stack Web Applications",
      description:
        "Built 15+ production-ready web applications using modern technologies with scalable architecture and secure authentication systems.",
      image:
        "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      features: [
        "JWT Authentication",
        "RBAC Implementation",
        "REST APIs",
        "Scalable Architecture",
      ],
      github: "https://github.com/up-the-dev",
      demo: "https://demo.example.com",
    },
    {
      id: 4,
      title: "Backend Systems & APIs",
      description:
        "Developed robust backend systems with Golang and Node.js, implementing secure REST APIs and database optimization.",
      image:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Golang", "Node.js", "PostgreSQL", "MySQL", "Redis"],
      features: [
        "REST API Development",
        "Database Optimization",
        "Security Implementation",
        "Performance Tuning",
      ],
      github: "https://github.com/up-the-dev",
      demo: "https://demo.example.com",
    },
    {
      id: 5,
      title: "Vue.js & Nuxt.js Applications",
      description:
        "Created dynamic frontend applications using Vue.js and Nuxt.js with modern UI/UX design and responsive layouts.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Vue.js", "Nuxt.js", "TypeScript", "TailwindCSS", "Vuex"],
      features: [
        "Component Architecture",
        "State Management",
        "SSR Implementation",
        "Responsive Design",
      ],
      github: "https://github.com/up-the-dev",
      demo: "https://demo.example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 animate-on-scroll"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my latest work, featuring modern web applications
            built with cutting-edge technologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Github size={18} className="text-white" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink size={18} className="text-white" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.button
                  onClick={() =>
                    setSelectedProject(
                      selectedProject === project.id ? null : project.id
                    )
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                >
                  <span>View Details</span>
                  <ArrowRight size={18} />
                </motion.button>

                <AnimatePresence>
                  {selectedProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-white/10"
                    >
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-gray-300 flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

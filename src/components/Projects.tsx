import React from 'react';
import { motion } from 'framer-motion';
import {  Github } from 'lucide-react';

const Projects: React.FC = () => {

  const featuredProjects = [
    {
  "title": "AI Short Video Creator",
  "description": "An AI-powered tool for creating short videos automatically. Built with Python, utilizing AI models for video generation and editing.",
  "image": "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=600",
  "technologies": ["Python", "FastAPI", "NextJS",  "HTML", "CSS", "TailwindCSS", "Gemini", "HuggingFace", "Edge_TTS/gTTS", "MongoDB"],
  "github": "https://github.com/jamess19/AIShortVideoCreator"
},
{
  "title": "MedicalSystem – Hospital Management System",
  "description": "A full-stack hospital management system for managing appointments, patients, doctors, drugs, prescriptions with real-time chat, video calls, and VNPAY payment integration",
  "image": "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=600",
  "technologies": ["Java", "Spring Boot", "ReactJS", "Knex.js", "SQL Server", "JavaScript", "HTML", "CSS"],
  "github": "https://github.com/jamess19/MedicalSystem"
},
{
  "title": "James Shop Web – E-commerce Platform",
  "description": "A full-stack e-commerce platform for product listing, searching, adding, and updating. Implement modern UI/UX and integrate Arcjet for rate limiting and bot protection.",
  "image": "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
  "technologies": ["PostgreSQL", "Node.js", "React", "HTML", "CSS", "JavaScript"],
  "github": "https://github.com/jamess19/EcommerceWeb"
}
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my featured projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
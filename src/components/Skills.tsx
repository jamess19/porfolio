import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Award, GraduationCap } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { icon: <Code className="h-6 w-6" />, name: 'Frontend', description: 'HTML, CSS, Tailwind CSS, JavaScript, React, NextJS, Shadcn, MaterialUI' },
    { icon: <Database className="h-6 w-6" />, name: 'Backend', description: 'Spring Boot, Java, C#, C++, Python, Django, FastAPI' },
    { icon: <Globe className="h-6 w-6" />, name: 'Databases', description: 'PostgreSQL, MongoDB, SQL Server, MySQL, Oracle' },
    { icon: <Smartphone className="h-6 w-6" />, name: 'Tools', description: 'Git, GitHub, Docker, IntelliJ IDEA, VS Code, Figma, Postman, Jira' },
    { icon: <Award className="h-6 w-6" />, name: 'Methodology', description: 'Agile/Scrum' },
    { icon: <GraduationCap className="h-6 w-6" />, name: 'Soft Skills', description: 'Problem-Solving, Fast Learning, Time Management' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-sky-500 dark:text-sky-400 mt-1">
                {skill.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">{skill.name}</h4>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

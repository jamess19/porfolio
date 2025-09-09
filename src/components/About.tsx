import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';

const About: React.FC = () => {

  const certifications = [
    "Not yet, but currently attending classes aiming for 7+ in IELTS"
  ];

  const education = [
    {
      degree: 'Bachelor of Information System',
      school: 'University of Science',
      year: '09/2022 - 09/2026',
      gpa: '3.4/4.0'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              I'm a passionate fullstack developer with experience building scalable 
              web applications. I love turning complex problems into simple, beautiful solutions.
              Started my programming journey in 2022 with a passion for creating digital solutions. 
              Over the years, I've learned and studied on various projects ranging from dynamic websites 
              to innovative applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              I specialize in modern web technologies and enjoy staying up-to-date with the latest 
              trends in software development. My goal is to create user-friendly applications that 
              solve real-world problems.
              Additionally, I have a strong passion for exploring emerging technologies and delving
              into AI concepts to create innovative solutions and applications.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="h-8 w-8 text-sky-500 dark:text-sky-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white text-lg">{edu.degree}</h4>
                <p className="text-sky-500 dark:text-sky-400 font-medium">{edu.school}</p>
                <p className="text-gray-600 dark:text-gray-300">{edu.year}</p>
                <p className="text-gray-600 dark:text-gray-300">GPA: {edu.gpa}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-sky-500 dark:text-sky-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="w-2 h-2 bg-sky-500 dark:bg-sky-400 rounded-full"></div>
                  <span className="text-gray-900 dark:text-white font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
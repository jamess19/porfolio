import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from 'lucide-react';

const Contact: React.FC = () => {

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'qthong2004@gmail.com',
      href: 'mailto:qthong2004@gmail.com',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      content: '+84 354 747 227',
      href: 'tel:+84354747227',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      content: 'Ho Chi Minh City, Vietnam',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      name: 'GitHub',
      href: 'https://github.com/jamess19',
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/thông-nguyễn-8b9389155/',
    },
    {
      icon: <Facebook className="h-6 w-6" />,
      name: 'Facebook',
      href: 'https://facebook.com/nuqato.204',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-12">Contact Information</h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-400 rounded-lg">
                    {item.icon}
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                    <a
                      href={item.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200"
                    >
                      {item.content}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Follow Me</h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.1 }}
                    viewport={{ once: true }}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-sky-100 dark:hover:bg-sky-900 rounded-lg transition-all duration-200"
                    title={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
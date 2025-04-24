import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'DiagnoSense',
      description: 'A full-stack medical diagnostics platform using machine learning microservices for early detection of diseases like CKD, Pneumonia, and Prostate Cancer.',
      image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg',
      technologies: ['React', 'Flask', 'Python', 'JavaScript', 'Tensorflow', 'XGBoost', 'Scikit-learn'],
      githubLink: '#',
      demoLink: '#',
    },
    {
      title: 'Sentiment Analysis Made Modular',
      description: 'A scalable NLP-based sentiment analysis platform using a microservices architecture with multiple ML and DL models to interpret user sentiments.',
      image: 'https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg',
      technologies: ['React', 'Node.js', 'Flask', 'Python', 'Tensorflow', 'LightGBM', 'XGBoost', 'Scikit-learn'],
      githubLink: '#',
    },
    {
      title: 'EcoSmart',
      description: 'An IoT-based solution for smart energy management in homes using real-time analytics and automation.',
      image: 'https://images.pexels.com/photos/4318041/pexels-photo-4318041.jpeg',
      technologies: ['React Native', 'Node.js', 'IoT', 'AWS'],
      githubLink: '#',
      demoLink: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-zinc-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 px-4 py-2 rounded-md transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      className="flex items-center gap-2 text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 px-4 py-2 rounded-md transition-colors"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
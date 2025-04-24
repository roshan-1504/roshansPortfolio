import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Rocket, Globe, Flag } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const interests = [
    {
      icon: <Code className="w-6 h-6 text-primary-500" />,
      title: 'Building with Purpose',
      description: 'From late-night bugs to deployments gone wrong, I love solving problems that matter.',
    },
    {
      icon: <Rocket className="w-6 h-6 text-primary-500" />,
      title: 'Side Projects',
      description: 'I love turning random ideas into actual working apps.',
    },
    {
      icon: <Globe className="w-6 h-6 text-primary-500" />,
      title: 'Languages',
      description: 'Fluent in 3 human languages & 4+ programming languages',
    },
    {
      icon: <Flag className="w-6 h-6 text-primary-500" />,
      title: 'Formula 1 Enthusiast',
      description: 'I live for race weekends and yell "box, box!" every time my code hits a bug.',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center bg-white dark:bg-zinc-900 text-gray-900 dark:text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-4"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-primary-500"></div>
              <img 
                src="/dp.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full shadow-lg"
              />
            </div>
          </motion.div>

          <div className="space-y-8">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300">
              Hello! I'm a final year Information Technology student at VIT Vellore, with a passion for building innovative and impactful applications. I specialize in full-stack development, machine learning, and cloud technologies.<br></br><br></br> My journey in tech began with a curiosity about how things work, which evolved into a love for solving complex problems through elegant code. <br></br><br></br> I'm constantly learning new technologies and frameworks to expand my skillset. When I'm not coding, you can find me exploring the outdoors, reading tech blogs, or contributing to open-source projects.


              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 bg-gray-50 dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {interest.icon}
                    <h3 className="font-semibold">{interest.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
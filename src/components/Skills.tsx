import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import { Coffee, Database, Phone as Python, Hash, FileJson, Globe, Palette, Atom, FlaskRound as Flask, Layout, Package, Server, Leaf, Pocket as Docker, Code2, Github, BarChart, PieChart, Github as Git } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faJava,
  faPython,
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faNodeJs,
  faBootstrap,
  faGithub,
  faDocker,
  faGit,
} from '@fortawesome/free-brands-svg-icons';

import {
  faDatabase,
  faCode,
  faChartBar,
  faChartPie,
  faC,
} from '@fortawesome/free-solid-svg-icons';


const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', icon: <FontAwesomeIcon icon={faJava} size="2x" /> },
        { name: 'SQL', icon: <FontAwesomeIcon icon={faDatabase} size="2x" /> },
        { name: 'Python', icon: <FontAwesomeIcon icon={faPython} size="2x" /> },
        { name: 'C', icon: <FontAwesomeIcon icon={faC} size="2x" /> },
        { name: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} size="2x" /> },
        { name: 'HTML', icon: <FontAwesomeIcon icon={faHtml5} size="2x" /> },
        { name: 'CSS', icon: <FontAwesomeIcon icon={faCss3Alt} size="2x" /> },
      ],
    },
    {
      title: 'Technologies & Frameworks',
      skills: [
        { name: 'React', icon: <FontAwesomeIcon icon={faReact} size="2x" /> },
        { name: 'Flask', icon: <FontAwesomeIcon icon={faCode} size="2x" /> }, // no official Flask icon
        { name: 'Bootstrap', icon: <FontAwesomeIcon icon={faBootstrap} size="2x" /> },
        { name: 'Node.js', icon: <FontAwesomeIcon icon={faNodeJs} size="2x" /> },
        { name: 'Express.js', icon: <FontAwesomeIcon icon={faCode} size="2x" /> }, // no official Express icon
        { name: 'MongoDB', icon: <FontAwesomeIcon icon={faDatabase} size="2x" /> }, // MongoDB icon is paid; fallback
      ],
    },
    {
      title: 'Developer Tools',
      skills: [
        { name: 'Docker', icon: <FontAwesomeIcon icon={faDocker} size="2x" /> },
        { name: 'VS Code', icon: <FontAwesomeIcon icon={faCode} size="2x" /> },
        { name: 'GitHub', icon: <FontAwesomeIcon icon={faGithub} size="2x" /> },
        { name: 'Tableau', icon: <FontAwesomeIcon icon={faChartBar} size="2x" /> },
        { name: 'Power BI', icon: <FontAwesomeIcon icon={faChartPie} size="2x" /> },
        { name: 'Git', icon: <FontAwesomeIcon icon={faGit} size="2x" /> },
      ],
    },
  ];
  

  return (
    <section id="skills" className="min-h-screen flex items-center bg-gray-50 dark:bg-zinc-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-4"></div>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">{category.title}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    className="bg-white dark:bg-zinc-800 rounded-lg p-3 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
                  >
                    <div className="text-primary-500 dark:text-primary-400 mb-2">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
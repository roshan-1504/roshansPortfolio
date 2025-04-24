// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Briefcase, GraduationCap, Award, BookOpen } from 'lucide-react';

// interface ExperienceItem {
//   id: number;
//   date: string;
//   title: string;
//   organization: string;
//   location: string;
//   description: string;
//   icon: 'work' | 'education' | 'award' | 'learning';
// }

// const Experience = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const experiences: ExperienceItem[] = [
//     {
//       id: 1,
//       date: 'August 2025',
//       title: 'Graduate Software Engineer',
//       organization: 'CBA India, Bengaluru',
//       location: 'Bengaluru',
//       description: 'Offered a full-time role post-graduation, recognizing strong technical foundation and project experience in full stack development, cloud computing, and ML.',
//       icon: 'work',
//     },
//     {
//       id: 2,
//       date: '2021 - 2025',
//       title: 'B.Tech in Information Technology',
//       organization: 'VIT, Vellore',
//       location: 'Vellore',
//       description: 'Balanced academic consistency (GPA: 9.18/10), alongside project-based learning in Full Stack Development and Machine Learning.',
//       icon: 'education',
//     },
//     {
//       id: 3,
//       date: 'Dec 2023',
//       title: 'Google Cloud Accreditation',
//       organization: 'Google, Remote',
//       location: 'Remote',
//       description: 'Earned certifications in Google Cloud Digital Leader and Cloud Computing Foundations, demonstrating a strong foundation in cloud technologies and architecture.',
//       icon: 'award',
//     },
//     {
//       id: 4,
//       date: 'June 2022 - Present',
//       title: 'Learning & Upskilling',
//       organization: 'Remote',
//       location: 'Remote',
//       description: 'Engaged in continuous self-driven learning to broaden technical knowledge, explore emerging technologies, and strengthen problem-solving skills through hands-on practice.',
//       icon: 'learning',
//     },
//   ];

//   const getIcon = (iconType: string) => {
//     switch (iconType) {
//       case 'work':
//         return <Briefcase size={24} />;
//       case 'education':
//         return <GraduationCap size={24} />;
//       case 'award':
//         return <Award size={24} />;
//       case 'learning':
//         return <BookOpen size={24} />;
//       default:
//         return <Briefcase size={24} />;
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <section id="experience" className="py-20 bg-white dark:bg-dark-900">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Experience</h2>
//           <div className="w-16 h-1 bg-primary-500 mx-auto mb-4"></div>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             My professional journey and achievements
//           </p>
//         </div>

//         <motion.div 
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="relative max-w-4xl mx-auto"
//         >
//           {/* Timeline line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-dark-700"></div>

//           {experiences.map((exp, index) => (
//             <motion.div 
//               key={exp.id}
//               variants={itemVariants}
//               className={`mb-12 flex items-center ${
//                 index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
//               }`}
//             >
//               {/* Timeline dot */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary-500 border-4 border-white dark:border-dark-900 z-10"></div>
              
//               {/* Content container */}
//               <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
//                 <div className="mb-1">
//                   <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-800 dark:bg-primary-900/40 dark:text-primary-300 rounded-full">
//                     {exp.date}
//                   </span>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
//                 <h4 className="text-lg text-primary-600 dark:text-primary-400 mb-2">{exp.organization}</h4>
//                 <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
//               </div>
              
//               {/* Icon */}
//               <div className={`w-1/12 flex justify-center ${
//                 index % 2 === 0 ? 'order-first' : 'order-last'
//               }`}>
//                 <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
//                   {getIcon(exp.icon)}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Award, BookOpen } from 'lucide-react';

interface ExperienceItem {
  id: number;
  date: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  icon: 'work' | 'education' | 'award' | 'learning';
}

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      date: 'August 2025',
      title: 'Graduate Software Engineer',
      organization: 'CBA India, Bengaluru',
      location: 'Bengaluru',
      description: 'Offered a full-time role post-graduation, recognizing strong technical foundation and project experience in full stack development, cloud computing, and ML.',
      icon: 'work',
    },
    {
      id: 2,
      date: '2021 - 2025',
      title: 'B.Tech in Information Technology',
      organization: 'VIT, Vellore',
      location: 'Vellore',
      description: 'Balanced academic consistency (GPA: 9.18/10), alongside project-based learning in Full Stack Development and Machine Learning.',
      icon: 'education',
    },
    {
      id: 3,
      date: 'Dec 2023',
      title: 'Google Cloud Accreditation',
      organization: 'Google, Remote',
      location: 'Remote',
      description: 'Earned certifications in Google Cloud Digital Leader and Cloud Computing Foundations, demonstrating a strong foundation in cloud technologies and architecture.',
      icon: 'award',
    },
    {
      id: 4,
      date: 'June 2022 - Present',
      title: 'Learning & Upskilling',
      organization: 'Remote',
      location: 'Remote',
      description: 'Engaged in continuous self-driven learning to broaden technical knowledge, explore emerging technologies, and strengthen problem-solving skills through hands-on practice.',
      icon: 'learning',
    },
  ];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'work':
        return <Briefcase size={24} />;
      case 'education':
        return <GraduationCap size={24} />;
      case 'award':
        return <Award size={24} />;
      case 'learning':
        return <BookOpen size={24} />;
      default:
        return <Briefcase size={24} />;
    }
  };

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
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Experience</h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and achievements
          </p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-zinc-700"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              variants={itemVariants}
              className={`mb-12 flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary-500 border-4 border-white dark:border-zinc-900 z-10"></div>
              
              {/* Content container */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="mb-1">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-800 dark:bg-primary-900/40 dark:text-primary-300 rounded-full">
                    {exp.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                <h4 className="text-lg text-primary-600 dark:text-primary-400 mb-2">{exp.organization}</h4>
                <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
              </div>
              
              {/* Icon */}
              <div className={`w-1/12 flex justify-center ${
                index % 2 === 0 ? 'order-first' : 'order-last'
              }`}>
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  {getIcon(exp.icon)}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

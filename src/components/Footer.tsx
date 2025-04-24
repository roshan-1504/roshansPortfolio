// import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
  
//   const socialLinks = [
//     { icon: <Github size={20} />, href: 'https://github.com/', label: 'GitHub' },
//     { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/', label: 'LinkedIn' },
//     { icon: <Twitter size={20} />, href: 'https://twitter.com/', label: 'Twitter' },
//     { icon: <Mail size={20} />, href: 'mailto:roshan15.work@gmail.com', label: 'Email' },
//   ];

//   return (
//     <footer className="bg-gray-100 dark:bg-dark-900 py-10 border-t border-gray-200 dark:border-dark-700">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0">
//             <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">Roshan</span>
//             <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
//               Building digital experiences that matter.
//             </p>
//           </div>
          
//           <div className="flex space-x-4">
//             {socialLinks.map((link, index) => (
//               <a
//                 key={index}
//                 href={link.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-300"
//                 aria-label={link.label}
//               >
//                 {link.icon}
//               </a>
//             ))}
//           </div>
//         </div>
        
//         <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-700 text-center">
//           <p className="text-gray-600 dark:text-gray-400 text-sm">
//             &copy; {currentYear} Roshan. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com/', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:roshan15.work@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-black py-10 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-white">Roshan</span>
            <p className="mt-2 text-gray-300 text-sm">
              Building digital experiences that matter.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-300 text-sm">
            &copy; {currentYear} Roshan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
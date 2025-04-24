// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';

// const Contact = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });
  
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
  
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
  
//   const contactInfo = [
//     {
//       icon: <Mail size={24} />,
//       title: 'Email',
//       value: 'roshan15.work@gmail.com',
//       link: 'mailto:roshan15.work@gmail.com',
//     },
//     {
//       icon: <Phone size={24} />,
//       title: 'Phone',
//       value: '+91 9866955986',
//       link: 'tel:+919866955986',
//     },
//     {
//       icon: <MapPin size={24} />,
//       title: 'Location',
//       value: 'Hyderabad, India',
//       link: null,
//     },
//   ];
  
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormState((prev) => ({ ...prev, [name]: value }));
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors((prev) => {
//         const newErrors = { ...prev };
//         delete newErrors[name];
//         return newErrors;
//       });
//     }
//   };
  
//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};
    
//     if (!formState.name.trim()) {
//       newErrors.name = 'Name is required';
//     }
    
//     if (!formState.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
//       newErrors.email = 'Email is invalid';
//     }
    
//     if (!formState.subject.trim()) {
//       newErrors.subject = 'Subject is required';
//     }
    
//     if (!formState.message.trim()) {
//       newErrors.message = 'Message is required';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };
  
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (validateForm()) {
//       setIsSubmitting(true);
      
//       // Simulate form submission
//       setTimeout(() => {
//         setIsSubmitting(false);
//         setSubmitSuccess(true);
//         setFormState({
//           name: '',
//           email: '',
//           subject: '',
//           message: '',
//         });
        
//         // Reset success message after 5 seconds
//         setTimeout(() => {
//           setSubmitSuccess(false);
//         }, 5000);
//       }, 1500);
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
//     <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-800">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Contact Me</h2>
//           <div className="w-16 h-1 bg-primary-500 mx-auto mb-4"></div>
//           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Let's get in touch
//           </p>
//         </div>
        
//         <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
//           <motion.div 
//             ref={ref}
//             variants={containerVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             className="lg:w-1/3 space-y-8"
//           >
//             {contactInfo.map((item, index) => (
//               <motion.div 
//                 key={index}
//                 variants={itemVariants}
//                 className="flex items-start gap-4"
//               >
//                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
//                   {item.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{item.title}</h3>
//                   {item.link ? (
//                     <a 
//                       href={item.link} 
//                       className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
//                     >
//                       {item.value}
//                     </a>
//                   ) : (
//                     <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
          
//           <motion.div 
//             variants={containerVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             className="lg:w-2/3"
//           >
//             <motion.div 
//               variants={itemVariants}
//               className="bg-white dark:bg-dark-700 rounded-lg shadow-md p-8"
//             >
//               {submitSuccess ? (
//                 <div className="text-center py-8">
//                   <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Message Sent!</h3>
//                   <p className="text-gray-600 dark:text-gray-400">
//                     Thank you for reaching out. I'll get back to you soon.
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit}>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                         Your Name
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formState.name}
//                         onChange={handleChange}
//                         className={`w-full px-4 py-2 border ${
//                           errors.name ? 'border-red-500' : 'border-gray-300 dark:border-dark-600'
//                         } rounded-md focus:ring focus:ring-primary-200 dark:focus:ring-primary-900/30 focus:border-primary-500 dark:focus:border-primary-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white`}
//                       />
//                       {errors.name && (
//                         <p className="mt-1 text-sm text-red-500">{errors.name}</p>
//                       )}
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                         Your Email
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formState.email}
//                         onChange={handleChange}
//                         className={`w-full px-4 py-2 border ${
//                           errors.email ? 'border-red-500' : 'border-gray-300 dark:border-dark-600'
//                         } rounded-md focus:ring focus:ring-primary-200 dark:focus:ring-primary-900/30 focus:border-primary-500 dark:focus:border-primary-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white`}
//                       />
//                       {errors.email && (
//                         <p className="mt-1 text-sm text-red-500">{errors.email}</p>
//                       )}
//                     </div>
//                   </div>
//                   <div className="mb-6">
//                     <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                       Subject
//                     </label>
//                     <input
//                       type="text"
//                       id="subject"
//                       name="subject"
//                       value={formState.subject}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-2 border ${
//                         errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-dark-600'
//                       } rounded-md focus:ring focus:ring-primary-200 dark:focus:ring-primary-900/30 focus:border-primary-500 dark:focus:border-primary-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white`}
//                     />
//                     {errors.subject && (
//                       <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
//                     )}
//                   </div>
//                   <div className="mb-6">
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                       Your Message
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       rows={5}
//                       value={formState.message}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-2 border ${
//                         errors.message ? 'border-red-500' : 'border-gray-300 dark:border-dark-600'
//                       } rounded-md focus:ring focus:ring-primary-200 dark:focus:ring-primary-900/30 focus:border-primary-500 dark:focus:border-primary-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white`}
//                     />
//                     {errors.message && (
//                       <p className="mt-1 text-sm text-red-500">{errors.message}</p>
//                     )}
//                   </div>
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300 w-full sm:w-auto"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <Send size={18} className="mr-2" />
//                         Send Message
//                       </>
//                     )}
//                   </button>
//                 </form>
//               )}
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Contact;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'roshan15.work@gmail.com',
      link: 'mailto:roshan15.work@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 9866955986',
      link: 'tel:+919866955986',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Hyderabad, India',
      link: null,
    },
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
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
    <section id="contact" className="min-h-screen flex items-center bg-gray-50 dark:bg-zinc-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Me</h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let's get in touch
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:w-1/3 space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:w-2/3"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-8"
            >
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${
                          errors.name ? 'border-red-500' : 'border-gray-300 dark:border-zinc-700'
                        } rounded-md focus:ring focus:ring-primary-200 dark:focus:ring-primary-900/30 focus:border-primary-500 dark:focus:border-primary-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${
                          errors.email ? 'border-red-500' : 'border-gray-300 dark:border-zinc-700'
                        } rounded-md focus:ring focus:ring-primary-200 dark:focus:ring-primary-900/30 focus:border-primary-500 dark:focus:border-primary-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${
                        errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-zinc-700'
                      } rounded-md focus:ring focus:ring-primary-200 dark:focus:ring-primary-900/30 focus:border-primary-500 dark:focus:border-primary-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                    )}
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${
                        errors.message ? 'border-red-500' : 'border-gray-300 dark:border-zinc-700'
                      } rounded-md focus:ring focus:ring-primary-200 dark:focus:ring-primary-900/30 focus:border-primary-500 dark:focus:border-primary-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300 w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
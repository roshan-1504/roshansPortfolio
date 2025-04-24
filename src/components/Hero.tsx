import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <div className="absolute inset-0 rounded-full border-2 border-primary-500"></div>
            <img
              src="/dp.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>

          <h1 className="text-6xl font-bold mb-4">I'm Roshan.</h1>
          <h2 className="text-2xl text-gray-400 mb-6">A final year undergrad student.</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            This portfolio showcases hands-on experience, technical projects, and passion for technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="flex flex-col items-center cursor-pointer text-gray-400 hover:text-white transition-colors"
          >
            <span className="mb-2">Scroll Down</span>
            <ChevronDown size={24} className="animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
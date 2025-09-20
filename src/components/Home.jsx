import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import profile from "../assets/dhanush.jpg"

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
          className="w-60 h-65 rounded-full overflow-hidden mx-auto mb-6 border-4 border-blue-500"
        >
          {/* Replace with your profile image */}
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          ANUSH THAMBIMUTHU
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-2xl md:text-3xl font-medium text-gray-300 mb-6"
        >
          Software Engineer Intern
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          I am a confident, energetic, and self-motivated third-year IT undergraduate who takes responsibility for tasks 
          and completes them with assurance. I excel in team environments, fostering a positive work atmosphere 
          and contributing to collective success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex justify-center space-x-4 mb-8"
        >
          <motion.a
            whileHover={{ scale: 1.1, backgroundColor: "#4299e1" }}
            whileTap={{ scale: 0.9 }}
            href="#contact"
            className="px-6 py-3 bg-transparent border-2 border-blue-600 text-white font-medium rounded-lg transition duration-300 flex items-center gap-2"
          
          >
            Get in Touch
            
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, backgroundColor: "rgba(66, 153, 225, 0.3)" }}
            whileTap={{ scale: 0.9 }}
            href="#projects"
            className="px-6 py-3 bg-transparent border-2 border-blue-600 text-white font-medium rounded-lg transition duration-300 flex items-center gap-2">
            View Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, backgroundColor: "rgba(66, 153, 225, 0.3)" }}
            whileTap={{ scale: 0.9 }}
            href="./Anush Thambimuthu-CV.pdf" 
            download
            className="px-6 py-3 bg-transparent border-2 border-blue-600 text-white font-medium rounded-lg transition duration-300 flex items-center gap-2"
          >
            <FaDownload /> Download CV
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex justify-center space-x-6"
        >
          <motion.a
            whileHover={{ y: -3, color: "#0A66C2" }}
            href="https://www.linkedin.com/in/anush-thambimuthu-b4b8bb267/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin size={28} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3, color: "#FFFFFF" }}
            href="https://github.com/ThambimuthuAnush24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={28} />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;

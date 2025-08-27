import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUser, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div ref={ref} className="max-w-6xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center mb-16"
      >
        <motion.h2 
          variants={itemVariants} 
          className="text-4xl font-bold mb-2"
        >
          About Me
        </motion.h2>
        <motion.div 
          variants={itemVariants}
          className="w-20 h-1 bg-blue-500 mx-auto mb-8"
        ></motion.div>
        <motion.p 
          variants={itemVariants}
          className="text-xl text-gray-400 max-w-3xl mx-auto"
        >
          Get to know me better, my background, and what drives my passion for creating amazing digital experiences.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <motion.div variants={itemVariants} className="space-y-6">
          <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
          <p className="text-gray-400 leading-relaxed">
            As a proactive and enthusiastic third-year IT undergraduate, I approach responsibilities with determination and deliver results with confidence. I enjoy collaborating in team settings, promoting a supportive environment, and contributing meaningfully to shared success.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I embrace challenges as opportunities for personal and professional growth, continuously improving 
            my IT abilities. My goal is to enhance the working environment while advancing my skills in the field of IT.
          </p>
          <p className="text-gray-400 leading-relaxed">
            When I'm not coding, you can find me playing cricket, volleyball and carrom. I'm also actively involved in 
            AIESEC as a Member & Team Leader and serve as a TLA Batch Coordinator.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="bg-gray-800 rounded-lg p-8 h-full">
            <h3 className="text-2xl font-semibold mb-6">Personal Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <FaUser className="text-blue-500 text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Name</h4>
                  <p className="text-gray-400">Anush Thambimuthu</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <FaLaptopCode className="text-purple-500 text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Role</h4>
                  <p className="text-gray-400">Software Engineer Intern</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-600/20 flex items-center justify-center">
                  <FaGraduationCap className="text-teal-500 text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Education</h4>
                  <p className="text-gray-400">B.Sc. (Hons) in Information Technology</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-medium mb-2">Education Details</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>University of Moratuwa, Colombo</span>
                      <span>2023 - Present</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">B.Sc. (Hons) in Information Technology</p>
                    
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Jaffna Vavadian Central College</span>
                      <span>2008 - 2021</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">G.C.E. Advanced Level (Physical Science Stream)</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;

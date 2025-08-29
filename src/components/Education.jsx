import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGraduationCap, FaCertificate, FaLaptopCode } from 'react-icons/fa';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [filter, setFilter] = useState('all');

  const educationData = [
    {
      id: 1,
      type: "education",
      title: "B.Sc. (Hons) in Information Technology",
      institution: "University of Moratuwa, Colombo",
      date: "2023 - Present",
      description: "I'm currently pursuing my degree with a keen interest in Software Development and DevOps Engineering.",
      icon: <FaGraduationCap />
    },
    {
      id: 2,
      type: "education",
      title: "Primary & Secondary Education",
      institution: "Jaffna Vayavilan Central College",
      date: "2008 - 2021",
      description: "Successfully completed GCE Ordinary Level with good results and GCE Advanced Level in Combined Mathematics, Physics, and Chemistry.",
      icon: <FaGraduationCap />
    },

    {
      id: 3,
      type: "certificate",
      title: "Algo Xplore 1.0 Hackathon",
      institution: "NSBM Green University",
      date: "2024",
      description: "Participated in AlgoXplore 1.0 Hackathon, NSBM Green University  Gained experience in problem-solving, critical thinking, and teamwork.",
      icon: <FaCertificate />
    },
    {
      id: 4,
      type: "certificate",
      title: " CODE RUSH Coding Competition",
      institution: "INTECS University of Moratuwa",
      date: "2024",
      description: "Participated in CodeRush Coding Competition, INTECS  University of Moratuwa  Gained experience in problem-solving, critical thinking, teamwork, time management, coding efficiency, and adaptability under pressure.",
      icon: <FaCertificate />
    },
    {
      id: 5,
      type: "certificate",
      title: "Foundations of Spring Boot & MVC Architecture – Coursera",
      date: "2025 (Ongoing)",
      description: "It introduces the basics of Spring Boot and the Model-View-Controller (MVC) design pattern, focusing on building structured, maintainable, and efficient Java web applications. It covers core concepts like controllers, services, views, and request handling",
      icon: <FaCertificate />
    },
    {
      id: 6,
      type: "certificate",
      title: "Full-Stack React with Spring Boot – Coursera",
      date: "2025 (Ongoing)",
      description: "It is a practical course that teaches how to build modern full-stack web applications using React for the frontend and Spring Boot for the backend. You’ll learn how to connect the two with REST APIs, manage data with databases, and deploy applications. The course covers building responsive UIs, handling authentication, and applying best practices for scalable app development.",
      icon: <FaCertificate />
    },
  ];

  // Filter the education data based on the selected filter
  const filteredData = educationData.filter(item => 
    filter === 'all' || item.type === filter
  );

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
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-2">Education & Experience</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          My academic background, certifications, and professional journey.
        </p>
      </motion.div>

      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-sm font-medium text-white ${filter === 'all' ? 'bg-blue-600 border-blue-600' : 'bg-gray-800 border-gray-600 hover:bg-gray-700'} border rounded-l-lg focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors`}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setFilter('education')}
            className={`px-4 py-2 text-sm font-medium text-white ${filter === 'education' ? 'bg-blue-600 border-blue-600' : 'bg-gray-800 border-gray-600 hover:bg-gray-700'} border-t border-b border-r focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors`}
          >
            Education
          </button>
          <button
            type="button"
            onClick={() => setFilter('certificate')}
            className={`px-4 py-2 text-sm font-medium text-white ${filter === 'certificate' ? 'bg-blue-600 border-blue-600' : 'bg-gray-800 border-gray-600 hover:bg-gray-700'} border rounded-r-lg focus:z-10 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors`}
          >
            Certificate
          </button>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative border-l-2 border-gray-700 ml-3 md:ml-0 md:mx-auto md:max-w-3xl"
      >
        {filteredData.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            layout
            className={`mb-10 ml-6 ${index % 2 === 0 ? 'md:ml-auto md:mr-auto md:pl-10' : 'md:mr-auto md:ml-auto md:pr-10'} md:w-1/2`}
          >
            <motion.span 
              className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-5 ring-8 ring-gray-900 bg-blue-600"
              whileHover={{ scale: 1.2, backgroundColor: "#3B82F6" }}
            >
              {item.icon}
            </motion.span>
            <motion.div 
              className="p-6 bg-gray-800 rounded-lg shadow-md"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" 
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-between items-center mb-2">
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded ${
                    item.type === 'education' 
                      ? 'bg-blue-900 text-blue-300' 
                      : item.type === 'certificate' 
                        ? 'bg-green-900 text-green-300'
                        : 'bg-purple-900 text-purple-300'
                  }`}
                >
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </motion.span>
                <time className="text-xs font-normal text-gray-400">
                  {item.date}
                </time>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm font-normal text-gray-400 mb-3">
                {item.institution}
              </p>
              <p className="text-sm text-gray-400">
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython,
  FaDatabase, FaGit, FaJava, FaServer, FaGithub, FaDocker
} from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";
import { 
  SiDart, SiFlutter, SiNextdotjs, SiTailwindcss, 
  SiDjango, SiMysql, SiPostgresql, 
  SiSpringboot, SiPostman, SiFirebase, SiCloudinary
} from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava />, color: "#007396" },
        { name: "C", icon: "C", color: "#A8B9CC" },
        { name: "Python", icon: <FaPython />, color: "#3776AB" },
        { name: "Dart", icon: <SiDart />, color: "#0175C2" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "Django", icon: <SiDjango />, color: "#092E20" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" }
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "Flutter", icon: <SiFlutter />, color: "#02569B" }
      ]
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Django REST Framework", icon: <FaServer />, color: "#092E20" }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" }
      ]
    },
    {
      title: "Cloud",
      skills: [
        { name: "Cloudinary", icon: <SiCloudinary />, color: "#3448C5" },
        { name: "Azure", icon: <VscAzure />, color: "#0078D4" },
        { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" }
      ]
    },
  
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGit />, color: "#F05032" },
        { name: "GitHub", icon: <FaGithub />, color: "#181717" },
        { name: "VS Code", icon: < VscVscode />, color: "#007ACC" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" }
      ]
    },
    {
      title: "Currently Learning",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Add animation variants for skill items
  const skillItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    },
    hover: { 
      scale: 1.05,
      x: 10,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  // Animation variant for category titles
  const titleVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
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
        <h2 className="text-4xl font-bold mb-2">My Skills</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Here are my technical skills and proficiency levels in various technologies and tools.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={skillVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
            className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-blue-900/20 hover:shadow-2xl transition-all duration-300 border border-gray-700/50 flex flex-col h-full"
          >
            <motion.h3 
              variants={titleVariants}
              className="text-xl font-semibold mb-4 text-blue-400 border-b border-gray-700 pb-2 text-center"
              whileHover={{
                textShadow: "0 0 8px rgb(96, 165, 250)",
                transition: { duration: 0.3 }
              }}
            >
              {category.title}
            </motion.h3>
            
            <motion.div 
              className="grid grid-cols-1 gap-3"
              variants={containerVariants}
            >
              {category.skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skillIndex} 
                  className="flex items-center p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                  variants={skillItemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover="hover"
                  transition={{ delay: skillIndex * 0.1 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.1}
                >
                  <motion.div 
                    className="w-10 h-10 rounded-md flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${skill.color}20` }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.span 
                      className="text-2xl" 
                      style={{ color: skill.color }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      animate={{ 
                        scale: [1, 1.1, 1],
                        transition: { 
                          repeat: Infinity, 
                          repeatType: "reverse", 
                          duration: 2 
                        }
                      }}
                    >
                      {typeof skill.icon === 'string' ? (
                        <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-white font-bold text-sm">
                          {skill.icon}
                        </div>
                      ) : (
                        skill.icon
                      )}
                    </motion.span>
                  </motion.div>
                  <span className="font-medium text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
            

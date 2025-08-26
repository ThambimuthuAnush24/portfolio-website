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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={skillVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-gray-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400 border-b border-gray-700 pb-2">
              {category.title}
            </h3>
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center">
                  <span className="text-2xl mr-3" style={{ color: skill.color }}>
                    {typeof skill.icon === 'string' ? (
                      <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-white font-bold text-sm">
                        {skill.icon}
                      </div>
                    ) : (
                      skill.icon
                    )}
                  </span>
                  <span className="font-medium text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

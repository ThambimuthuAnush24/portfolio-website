import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "HABITRO - AI-Powered Habit Tracking App",
      description: "A gamified habit tracking platform with AI capabilities to help users develop good habits and track their progress through personalized recommendations.",
      image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      categories: ["mobile", "fullstack", "ai"],
      technologies: ["Flutter", "Django", "MySQL", "RESTful API", "Firebase"],
      githubLink: "https://github.com/ThambimuthuAnush24/HABITRO"
    },
    {
      id: 2,
      title: "Product Hub",
      description: "A full-featured application to manage electronic products with complete CRUD functionality.",
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80",
      categories: ["fullstack", "backend"],
      technologies: ["Spring Boot", "Thymeleaf", "HTML", "CSS", "MySQL"],
      githubLink: "https://github.com/ThambimuthuAnush24/CRUD"
    },
    {
      id: 3,
      title: "EduManage REST Service",
      description: "A comprehensive student management system providing simple CRUD operations for student records through RESTful endpoints.",
      image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      categories: ["backend"],
      technologies: ["Spring Boot", "MySQL", "Postman"],
      githubLink: "https://github.com/ThambimuthuAnush24/RESTapiProject"
    },
    {
      id: 4,
      title: "EX Studios - Movie Ticket Booking Platform",
      description: "A responsive movie ticket booking interface with seat selection, schedule viewing, and booking features with payment integration.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
      categories: ["frontend"],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Stripe API"],
      githubLink: "https://github.com/ThambimuthuAnush24/ExStudios"
    },
    {
      id: 5,
      title: "Automatic Jaggery Maker",
      description: "Arduino-based smart hardware project to automate the jaggery production process, improving efficiency and safety through sensor integration and process optimization.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      categories: ["hardware"],
      technologies: ["Arduino", "C/C++", "Sensors", "Breadboard Prototyping", "IoT"]
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing skills, projects, education, and contact information with modern animations and responsive design.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      categories: ["frontend"],
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Responsive Design"],
      githubLink: "https://github.com/ThambimuthuAnush24/portfolio-website",
    },
    {
      id: 7,
      title: "Money Manager ",
      description: "Built a fully functional Income Tracker application with category selection, emoji icons, record management, input validation, category filtering, confirmation modals, real-time notifications, and loading indicators to enhance responsiveness and user experience.",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      categories: ["fullstack"],
      technologies: ["React", "Tailwind CSS", "Spring Boot", "MySQL", "JWT Authentication"],
      githubLink: "https://github.com/ThambimuthuAnush24/full-stack",
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(filter));

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
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-2">My Projects</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Browse through my recent projects and see my skills in action.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            filter === 'all' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => setFilter('frontend')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            filter === 'frontend' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Frontend
        </button>
        <button
          onClick={() => setFilter('backend')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            filter === 'backend' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Backend
        </button>
        <button
          onClick={() => setFilter('fullstack')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            filter === 'fullstack' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Full Stack
        </button>
        <button
          onClick={() => setFilter('mobile')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            filter === 'mobile' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Mobile
        </button>
        <button
          onClick={() => setFilter('hardware')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            filter === 'hardware' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Hardware
        </button>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative group">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center hover:bg-gray-200 transition"
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center hover:bg-gray-200 transition"
                  >
                    <FaExternalLinkAlt size={18} />
                  </motion.a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 bg-gray-700 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center py-16"
        >
          <FaSearch className="text-5xl text-gray-600 mx-auto mb-4" />
          <h3 className="text-2xl font-medium mb-2">No projects found</h3>
          <p className="text-gray-400">
            No projects match the selected filter. Try another category.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;

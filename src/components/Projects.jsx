import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiShoppingCart, 
  FiDollarSign, 
  FiSmartphone, 
  FiActivity, 
  FiGlobe, 
  FiCheckSquare,
  FiGithub,
  FiFilter,
  FiChevronDown,
  FiArrowRight
} from 'react-icons/fi';

const Projects = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef(null);
  const filterRef = useRef(null);

  // Simulate loading completion
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Project categories
  const filters = ['all', 'web', 'app', 'devops'];

  // Projects data with modern icons
  const projects = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      description: 'A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order processing.',
      tags: ['React', 'Node.js', 'MongoDB'],
      type: 'web',
      icon: <FiShoppingCart className="text-4xl text-purple-500" />,
      link: 'https://github.com/Mdparwej000/Mdparwej000'
    },
    {
      id: 2,
      title: 'Finance Tracker App',
      description: 'Mobile application for tracking expenses, creating budgets, and visualizing financial data with charts.',
      tags: ['React Native', 'Spring Boot', 'Firebase'],
      type: 'app',
      icon: <FiDollarSign className="text-4xl text-green-500" />,
      link: 'https://github.com/Mdparwej000/Mdparwej000'
    },
    {
      id: 3,
      title: 'Social Media Platform',
      description: 'A full-featured social networking platform with real-time messaging, posts, and user profiles.',
      tags: ['react.js', 'Express', 'Socket.io'],
      type: 'web',
      icon: <FiSmartphone className="text-4xl text-blue-500" />,
      link: 'https://github.com/Mdparwej000/Mdparwej000'
    },
    {
      id: 4,
      title: 'Fitness App',
      description: 'Mobile application for workout tracking, nutrition planning, and progress monitoring.',
      tags: ['React Native', 'Spring Boot', 'Firebase'],
      type: 'app',
      icon: <FiActivity className="text-4xl text-red-500" />,
      link: 'https://github.com/Mdparwej000/Mdparwej000'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with animations, dark mode, and responsive design.',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      type: 'web',
      icon: <FiGlobe className="text-4xl text-cyan-500" />,
      link: 'https://github.com/Mdparwej000/Mdparwej000'
    },
    {
      id: 6,
      title: 'Task Management App',
      description: 'Collaborative task management application with teams, projects, and deadlines.',
      tags: ['React.js', 'Node.js', 'MongoDB'],
      type: 'web',
      icon: <FiCheckSquare className="text-4xl text-yellow-500" />,
      link: 'https://github.com/Mdparwej000/Mdparwej000'
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  // Show only first 6 projects initially
  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6);

  // Handle filter click
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setShowFilterOptions(false);
  };

  // Handle view all click
  const handleViewAllClick = () => {
    setShowAllProjects(!showAllProjects);
  };

  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilterOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`relative min-h-screen py-20 overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'}`}
    >
      {/* Floating tech icons background */}
      <div className={`absolute inset-0 overflow-hidden ${darkMode ? 'opacity-10' : 'opacity-5'}`}>
        {[<FiShoppingCart />, <FiDollarSign />, <FiSmartphone />, <FiActivity />, <FiGlobe />, <FiCheckSquare />].map((Icon, index) => (
          <div
            key={index}
            className={`absolute text-2xl animate-float ${darkMode ? 'text-purple-500/20' : 'text-purple-400/20'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 20}s`
            }}
          >
            {Icon}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isLoading ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`text-5xl md:text-6xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}
        >
          Projects
        </motion.h2>
        
        {/* Filter dropdown */}
        <div className="flex justify-center mb-12 relative" ref={filterRef}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-purple-600 text-white flex items-center gap-2 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
            onClick={() => setShowFilterOptions(!showFilterOptions)}
          >
            <FiFilter />
            <span>Filter</span>
            <motion.span
              animate={{ rotate: showFilterOptions ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiChevronDown />
            </motion.span>
          </motion.button>
          
          <AnimatePresence>
            {showFilterOptions && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`absolute top-full mt-2 backdrop-blur-md rounded-lg p-2 shadow-xl z-10 border ${
                  darkMode 
                    ? 'bg-gray-800/95 border-gray-700/50' 
                    : 'bg-white/95 border-gray-300/50'
                }`}
              >
                {filters.map((filter, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-4 py-2 rounded-md transition-all duration-300 ${
                      activeFilter === filter 
                        ? 'bg-purple-600/80 text-white' 
                        : darkMode 
                          ? 'text-gray-300 hover:bg-gray-700/80' 
                          : 'text-gray-700 hover:bg-gray-200/80'
                    }`}
                    onClick={() => handleFilterClick(filter)}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={isLoading ? {} : { opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="relative"
              >
                {/* Project card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`h-full backdrop-blur-md rounded-xl p-5 border shadow-lg cursor-pointer overflow-hidden relative transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-900/40 border-gray-800/50 hover:shadow-purple-500/10 hover:border-purple-500/30' 
                      : 'bg-white/90 border-gray-300/50 hover:shadow-purple-400/10 hover:border-purple-400/30'
                  }`}
                >
                  {/* Rotating border effect - slower */}
                  <div className="rotating-border-slow"></div>
                  
                  {/* GitHub link icon */}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`absolute top-4 right-4 opacity-70 hover:opacity-100 transition-opacity duration-300 z-10 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    <FiGithub className="text-xl" />
                  </a>
                  
                  {/* Project icon */}
                  <div className={`w-full h-32 rounded-lg mb-4 flex items-center justify-center ${
                    darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-100 to-gray-200'
                  }`}>
                    {project.icon}
                  </div>
                  
                  {/* Project title */}
                  <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {project.title}
                  </h3>
                  
                  {/* Project description */}
                  <p className={`text-sm mb-4 line-clamp-3 leading-relaxed ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                  
                  {/* Project tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`px-2 py-1 rounded-md text-xs font-medium transition-all duration-300 ${
                          darkMode 
                            ? 'bg-purple-900/40 text-purple-200 hover:bg-purple-900/60' 
                            : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
            
            {/* Show Work in Progress for DevOps if no projects */}
            {activeFilter === 'devops' && displayedProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={isLoading ? {} : { opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="relative col-span-full"
              >
                <div className={`backdrop-blur-md rounded-xl p-8 border shadow-xl text-center transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-900/40 border-gray-800/50' 
                    : 'bg-white/90 border-gray-300/50'
                }`}>
                  <div className="text-5xl mb-4">🚧</div>
                  <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Work in Progress</h3>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>DevOps projects coming soon!</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* View All button */}
        {filteredProjects.length > 6 && (
          <motion.div 
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-purple-600 text-white flex items-center gap-2 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
              onClick={handleViewAllClick}
            >
              <span>{showAllProjects ? 'Show Less' : 'View All'}</span>
              <motion.span
                animate={{ rotate: showAllProjects ? 180 : 0, x: showAllProjects ? -2 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiArrowRight />
              </motion.span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
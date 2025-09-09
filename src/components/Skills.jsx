import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef(null);

  // Simulate loading completion
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Skill categories data
  const categories = [
    {
      id: 'web',
      title: 'Web',
      color: 'rgba(59, 130, 246, 0.3)',
      icon: '🌐',
      skills: {
        'Frontend': ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind'],
        'Backend': ['Node.js', 'Express.js', 'SQL', 'MongoDB'],
        'Other': ['Firebase', 'Redis', 'Socket.io']
      }
    },
    {
      id: 'app',
      title: 'App',
      color: 'rgba(16, 185, 129, 0.3)',
      icon: '📱',
      skills: {
        'Frontend': ['HTML5', 'React Native', 'Tailwind'],
        'Backend': ['Spring Boot', 'Java', 'MongoDB', 'Express.js'],
        'Other': ['JWT', 'OAuth', 'Firebase']
      }
    },
    {
      id: 'devops',
      title: 'DevOps',
      color: 'rgba(245, 158, 11, 0.3)',
      icon: '⚙️',
      skills: {
        'Containerization': ['Docker', 'Kubernetes'],
        'CI/CD & Cloud': ['GitHub Actions', 'Jenkins', 'AWS', 'Google Cloud', 'Vercel'],
        'Monitoring & Tools': ['Prometheus', 'Kafka', 'Nginx', 'Bash', 'Turborepo']
      }
    },
    {
      id: 'other',
      title: 'Other',
      color: 'rgba(139, 92, 246, 0.3)',
      icon: '🛠️',
      skills: {
        'Tools': ['Git', 'GitHub', 'npm', 'Slack', 'VSCode', 'Postman'],
        'AI & OS': ['Gemini', 'ChatGPT', 'Notion', 'Arch Linux', 'Kali Linux', 'Ubuntu'],
        'Hardware & Other': ['Raspberry Pi', 'Arduino', 'Vim', 'Solidity']
      }
    }
  ];

  // Icon mapping for technologies
  const iconMap = {
    'HTML5': '🔴', 'CSS3': '🔵', 'JavaScript': '🟡', 'TypeScript': '🔷', 
    'React': '⚛️', 'Next.js': '⏭️', 'Tailwind': '🎨', 'Node.js': '🟢', 
    'Express.js': '🚂', 'SQL': '🗃️', 'MongoDB': '🍃', 'Firebase': '🔥', 
    'Redis': '🔴', 'Socket.io': '🔌', 'React Native': '📱', 'Spring Boot': '🌱', 
    'Java': '☕', 'JWT': '🔐', 'OAuth': '🆗', 'Turborepo': '⚡', 
    'Docker': '🐳', 'GitHub Actions': '⚙️', 'Jenkins': '🤖', 'Nginx': '🎯', 
    'Kubernetes': '☸️', 'Prometheus': '🔥', 'Vercel': '▲', 'Kafka': '🐦', 
    'AWS': '☁️', 'Google Cloud': '🔵', 'Bash': '💻', 'Git': '📝', 
    'GitHub': '🐙', 'npm': '📦', 'Slack': '💬', 'VSCode': '📝', 
    'Vim': '⬛', 'Gemini': '🤖', 'ChatGPT': '💬', 'Notion': '📝', 
    'Postman': '📬', 'Solidity': '💎', 'Arch Linux': '🐧', 'Kali Linux': '🐉', 
    'Ubuntu': '🐧', 'Raspberry Pi': '🍓', 'Arduino': '🔌'
  };

  // Handle category click
  const handleCategoryClick = (categoryId) => {
    if (activeCategory === categoryId) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryId);
    }
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`relative min-h-screen py-20 overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'}`}
    >
      {/* Floating tech icons background */}
      <div className={`absolute inset-0 overflow-hidden ${darkMode ? 'opacity-10' : 'opacity-5'}`}>
        {Object.keys(iconMap).map((tech, index) => (
          <div
            key={index}
            className="absolute text-2xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 20}s`
            }}
          >
            {iconMap[tech]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isLoading ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-5xl md:text-6xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-800'}`}
        >
          Skills
        </motion.h2>
        
        {/* Category circles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isLoading ? {} : { opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="relative flex justify-center items-center"
            >
              {/* Outer tech icons */}
              <div className="absolute inset-0 rounded-full animate-spin-slow">
                {Object.keys(iconMap).slice(index * 5, index * 5 + 8).map((tech, i) => (
                  <div
                    key={i}
                    className="absolute text-xl md:text-2xl"
                    style={{
                      transform: `rotate(${i * 45}deg) translate(80px) rotate(-${i * 45}deg)`
                    }}
                  >
                    {iconMap[tech]}
                  </div>
                ))}
              </div>
              
              {/* Main category circle */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center backdrop-blur-lg border shadow-2xl cursor-pointer transition-all duration-300 ${
                  darkMode 
                    ? 'bg-black/30 border-gray-700/30' 
                    : 'bg-white/80 border-gray-300/50'
                }`}
                style={{ 
                  boxShadow: activeCategory === category.id 
                    ? `0 0 30px 5px ${category.color}` 
                    : darkMode 
                      ? '0 8px 32px 0 rgba(0, 0, 0, 0.1)' 
                      : '0 8px 32px 0 rgba(0, 0, 0, 0.05)'
                }}
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="flex flex-col items-center">
                  <span className="text-3xl mb-2">{category.icon}</span>
                  <span className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {category.title}
                  </span>
                </div>
                
                {/* Subtle glow effect */}
                <div 
                  className="absolute inset-0 rounded-full opacity-70"
                  style={{ 
                    boxShadow: `inset 0 0 30px 5px ${category.color}`,
                    filter: 'blur(5px)'
                  }}
                ></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Category details */}
        <AnimatePresence>
          {activeCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl mx-auto mt-12"
            >
              <div className={`backdrop-blur-xl rounded-3xl p-6 md:p-8 border shadow-2xl ${
                darkMode 
                  ? 'bg-black/40 border-gray-700/30' 
                  : 'bg-white/90 border-gray-300/50'
              }`}>
                {categories
                  .filter(cat => cat.id === activeCategory)
                  .map(category => (
                    <div key={category.id}>
                      <h3 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        {category.title} Skills
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {Object.entries(category.skills).map(([skillType, skills], index) => (
                          <motion.div
                            key={skillType}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`backdrop-blur-md rounded-2xl p-6 border shadow-lg ${
                              darkMode 
                                ? 'bg-black/30 border-gray-700/30' 
                                : 'bg-white/80 border-gray-300/50'
                            }`}
                          >
                            <h4 className={`text-xl font-semibold mb-4 text-center ${
                              darkMode ? 'text-white' : 'text-gray-800'
                            }`}>
                              {skillType}
                            </h4>
                            
                            <div className="flex flex-wrap justify-center gap-3">
                              {skills.map((skill, i) => (
                                <motion.div
                                  key={i}
                                  whileHover={{ scale: 1.1, y: -5 }}
                                  whileTap={{ scale: 0.95 }}
                                  className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 cursor-default shadow-md transition-all ${
                                    darkMode 
                                      ? 'bg-black/50 text-gray-300' 
                                      : 'bg-white text-gray-700'
                                  }`}
                                >
                                  <span>{iconMap[skill]}</span>
                                  <span>{skill}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))
                }
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';
import { 
  FaReact, FaJs, FaPython, FaHtml5, FaCss3Alt, FaNode, FaVuejs, FaAngular, FaJava,
  FaFigma, FaSass, FaDocker, FaAws, FaGitAlt, FaNpm, FaAndroid, FaApple, FaDatabase
} from 'react-icons/fa';
import ProfileImage from '../assets/profile.jpg'; 
import ResumePDF from '../assets/PARWEZCV.pdf';  // ✅ Import your actual CV

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showOpenToWork, setShowOpenToWork] = useState(false);
  
  const roles = [
    'Software Developer',
    'Web Developer',
    'App Developer',
    'Full Stack Developer'
  ];

  const matrixSymbols = '!@#$%^&*()_+-=[]{}|;:,.<>?~';
  
  useEffect(() => {
    let animationFrame;
    let frameCount = 0;
    const targetText = roles[currentRole];
    
    setIsAnimating(true);
    
    const animate = () => {
      frameCount++;
      const tempText = Array(targetText.length)
        .fill(null)
        .map((_, i) => {
          if (frameCount > i * 5 + 10) return targetText[i];
          return matrixSymbols[Math.floor(Math.random() * matrixSymbols.length)];
        })
        .join('');
      
      setDisplayText(tempText);
      
      if (frameCount < targetText.length * 5 + 20) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setIsAnimating(false);
        }, 2000);
      }
    };
    
    animate();
    
    return () => cancelAnimationFrame(animationFrame);
  }, [currentRole]);

  const downloadCV = () => {
    window.open(ResumePDF, '_blank');  // ✅ Opens your actual PDF
  };

  const techIcons = [
    FaReact, FaJs, FaPython, FaHtml5, FaCss3Alt, FaNode, FaVuejs, 
    FaAngular, FaJava, FaFigma, FaSass, FaDocker, FaAws, FaGitAlt,
    FaNpm, FaAndroid, FaApple, FaDatabase
  ];

  return (
    <section className="hero-section pt-32 pb-20 md:pt-40 md:pb-28 bg-white dark:bg-black overflow-hidden relative" id="home">
      {/* Floating Tech Icons Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(30)].map((_, i) => {
          const Icon = techIcons[Math.floor(Math.random() * techIcons.length)];
          const size = Math.random() * 30 + 20;
          return (
            <div 
              key={i}
              className="tech-icon absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${size}px`,
                opacity: Math.random() * 0.2 + 0.1,
                animation: `float ${Math.random() * 20 + 15}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
                color: `hsl(${Math.random() * 360}, 70%, 60%)`,
              }}
            >
              <Icon />
            </div>
          );
        })}
      </div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white rubik-doodle">
            Hi, I'm 
            <span className="ml-3">
              {' Parwez'.split('').map((letter, index) => (
                <span 
                  key={index} 
                  className="name-letter inline-block transition-all duration-300 hover:-translate-y-1 text-purple-600 dark:text-purple-400"
                >
                  {letter}
                </span>
              ))}
            </span>
          </h1>
          <div className="text-2xl md:text-3xl font-medium mb-8 min-h-[2.5rem] text-purple-600 dark:text-purple-400 matrix-font">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>
          
          {/* First Paragraph with strikethrough */}
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-0 max-w-lg">
            23-year-old <span className="line-through text-white">skipping the buzzwords</span> software engineer from India (🇮🇳)
          </p>

          {/* Second Paragraph with colored underlines */}
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-lg">
            I like building 
            <span className="underline decoration-red-500 decoration-2"> Full-stack apps </span>, 
            <span className="underline decoration-purple-500 decoration-2"> AI powered products </span>, 
            <span className="underline decoration-green-500 decoration-2"> Orchestrate deployments </span>, 
            and don't mind spending hours automating stuff that take minutes.
          </p>
          
          {/* Download CV Button */}
          <div className="mb-8">
            <button 
              onClick={downloadCV}
              className="download-btn relative overflow-hidden font-medium py-2 px-6 rounded-lg group"
            >
              <span className="absolute bottom-0 left-0 w-0 h-full bg-gradient-to-r from-purple-500 to-violet-600 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FaDownload className="text-sm" />
                Open CV
              </span>
            </button>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-6 justify-center md:justify-start">
            <a 
              href="https://linkedin.com/in/parwez-sheikh-427888236" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors" />
            </a>
            <a 
              href="https://github.com/Mdparwej000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors" />
            </a>
            <a 
              href="mailto:mdparvejmehsi@gmail.com"  
              className="social-icon"
              aria-label="Email"
            >
              <FaEnvelope className="text-2xl text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors" />
            </a>
          </div>
        </div>
        
        {/* Profile Section */}
        <div 
          className="md:w-1/2 flex justify-center animate-fadeIn animate-delay-100 relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative">
            <div className="profile-container relative">
              <div className="profile-image-container relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden z-10 group">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                  <div className="w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full overflow-hidden border-2 border-white dark:border-gray-800">
                    <img 
                      src={ProfileImage} 
                      alt="Parwez Sheikh" 
                      className="w-full h-full object-cover"
                      onMouseEnter={() => setShowOpenToWork(true)}
                      onMouseLeave={() => setShowOpenToWork(false)}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-purple-500 border-t-transparent animate-spin-slow"></div>
                <div className="absolute inset-0 rounded-full border-4 border-violet-600 border-b-transparent animate-spin-slow-reverse"></div>
              </div>
              <div className="glow-effect absolute inset-0 rounded-full animate-pulse-slow"></div>
            </div>
            <div className={`open-to-work-badge absolute -bottom-4 -right-4 px-6 py-2 rounded-full font-bold z-30 transition-all duration-500 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 shadow-md ${
              isHovering || showOpenToWork ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              Open to Work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

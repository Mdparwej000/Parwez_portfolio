import React, { useState, useEffect, useRef } from 'react';

// Import certificate images (update these paths with your actual image paths)
// import awsCert from '../assets/aws-certificate.jpg';
import googlePlay from '../assets/GOOGLE PLAY ACADEMY.jpg';
import nodeCert from '../assets/node-certificate.jpg';
import uiuxCert from '../assets/uiux-certificate.jpg';

const About = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('education');
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  // Education data
  const educationData = [
    {
      degree: 'B.Tech ( Computer Science Engineering )',
      institution: 'P.I.E.T College',
      year: '2021-2025',
      description: 'Specialized in software development and algorithms.'
    },
    {
      degree: 'Higher Secondary Education (12th)',
      institution: 'Senior Secondry School',
      year: '2019-2021',
      description: 'Science stream ( P.C.M). Scored 60% 🥶 in final exams.'
    }
  ];

  // Experience data
  const experienceData = [
    {
      role: 'Softwere Development',
      company: 'Looking For a job to enhance my skill on enterprise level',
      year: 'Open to relocate globally',
      description: 'Passionate developer eager to build scalable enterprise solutions and grow with global opportunities.'
    },
   
  ];

  // Certification data with images
  const certificationData = [
    {
      title: 'IDEATHON',
      issuer: 'P.I.E.T',
      year: '2021',
      credential: 'WFHJSDFHDHJ',
      // image: awsCert
    },
    {
      title: 'Google Play Academy',
      issuer: 'Google',
      year: '2022',
      credential: '127515411',
      image: googlePlay
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Youtube',
      year: '2024',
      credential: 'SELF-STUDY',
      // image: nodeCert
    },
    {
      title: 'React Native App Development',
      issuer: 'Youtube',
      year: '2025',
      credential: 'SELF-STUDY',
      // image: uiuxCert
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className={`py-20 relative overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 relative">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} rubik-doodle ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            About
          </h2>
          
          {/* Enhanced tubelight effect with angular gradient */}
          <div className={`relative w-72 mx-auto h-3 overflow-hidden rounded-sm ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-80 rounded-sm"></div>
            <div className="absolute top-0 left-0 w-10 h-3 bg-gradient-to-r from-purple-400 to-violet-400 animate-tubelight rounded-sm"></div>
            
            {/* Light spread effect - angular gradient */}
            <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-purple-500/20 via-purple-400/10 to-transparent -translate-y-48"></div>
          </div>
        </div>
        
        {/* Transparent glass card for Education/Experience */}
        <div className={`relative backdrop-blur-md rounded-xl p-6 border mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${
          darkMode ? 'bg-black/40 border-gray-800' : 'bg-white/90 border-gray-200'
        }`}>
          {/* Rotating border effect */}
          <div className="rotating-border"></div>
          
          {/* Centered tabs */}
          <div className={`flex justify-center border-b mb-8 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <div className={`relative flex rounded-lg p-1 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
              <button
                className={`py-3 px-8 font-semibold text-lg relative transition-all duration-300 rounded-lg ${activeTab === 'education' 
                  ? 'text-white bg-purple-600 shadow-lg' 
                  : darkMode ? 'text-gray-400 hover:text-purple-300' : 'text-gray-600 hover:text-purple-500'}`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
              <button
                className={`py-3 px-8 font-semibold text-lg relative transition-all duration-300 rounded-lg ${activeTab === 'experience' 
                  ? 'text-white bg-purple-600 shadow-lg' 
                  : darkMode ? 'text-gray-400 hover:text-purple-300' : 'text-gray-600 hover:text-purple-500'}`}
                onClick={() => setActiveTab('experience')}
              >
                Work Experience
              </button>
            </div>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-6 top-0 h-full w-0.5 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${
              darkMode ? 'bg-purple-500/30' : 'bg-purple-400/50'
            }`}></div>
            
            <div className="space-y-8">
              {(activeTab === 'education' ? educationData : experienceData).map((item, index) => (
                <div key={index} className={`relative pl-20 group transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-4 w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  
                  <div className={`p-5 rounded-xl border transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg relative ${
                    darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white/80 border-gray-200'
                  }`}>
                    {/* Rotating border for content cards */}
                    <div className="rotating-border-thin"></div>
                    
                    <h4 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {activeTab === 'education' ? item.degree : item.role}
                    </h4>
                    <p className={`font-medium mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                      {item.institution || item.company} | {item.year}
                    </p>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Certifications Section */}
        <div className={`relative backdrop-blur-md rounded-xl p-6 border transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${
          darkMode ? 'bg-black/40 border-gray-800' : 'bg-white/90 border-gray-200'
        }`}>
          {/* Rotating border effect */}
          <div className="rotating-border"></div>
          
          <h3 className={`text-2xl font-bold text-center mb-8 rubik-doodle ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificationData.map((cert, index) => (
              <div key={index} className={`relative p-5 rounded-xl border group hover:border-purple-500/30 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} ${
                darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white/80 border-gray-200'
              }`}
                style={{ transitionDelay: `${index * 100}ms` }}>
                
                {/* Rotating border for certification cards */}
                <div className="rotating-border-thin"></div>
                
                <div className="text-center mb-4">
                  <div className="w-full h-40 mx-auto mb-4 rounded-lg overflow-hidden relative">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                      <span className="text-white text-sm font-medium">View Certificate</span>
                    </div>
                  </div>
                  
                  <h4 className={`font-bold mb-1 text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>{cert.title}</h4>
                  <p className={`text-sm mb-1 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>{cert.issuer}</p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{cert.year}</p>
                </div>
                <div className="text-center">
                  <p className={`text-xs font-mono p-2 rounded ${darkMode ? 'text-gray-300 bg-black/30' : 'text-gray-700 bg-gray-100'}`}>
                    ID: {cert.credential}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
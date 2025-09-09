import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-12 ${darkMode ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Social media links with enhanced hover effects */}
          <div className="flex justify-center space-x-8 mb-6">
            {[
              { 
                platform: 'twitter', 
                url: 'https://x.com/MParwej9143', 
                color: 'hover:text-blue-400',
                bgColor: 'hover:bg-blue-400/20',
                iconColor: darkMode ? 'text-blue-500' : 'text-blue-600'
              },
              { 
                platform: 'linkedin-in', 
                url: 'https://www.linkedin.com/in/parwez-sheikh-427888236/', 
                color: 'hover:text-blue-600',
                bgColor: 'hover:bg-blue-600/20',
                iconColor: darkMode ? 'text-blue-700' : 'text-blue-800'
              },
              { 
                platform: 'github', 
                url: 'https://github.com/Mdparwej000/Mdparwej000', 
                color: 'hover:text-purple-500',
                bgColor: 'hover:bg-purple-500/20',
                iconColor: darkMode ? 'text-purple-600' : 'text-purple-700'
              }
            ].map((item, index) => (
              <a 
                key={index}
                href={item.url} 
                target="_blank"
                rel="noopener noreferrer"
                className={`relative group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${item.bgColor} ${
                  darkMode ? 'bg-gray-800/30' : 'bg-white/80'
                }`}
              >
                {/* Animated ring on hover */}
                <div className="absolute inset-0 rounded-full bg-transparent group-hover:animate-ping group-hover:border-2 group-hover:border-current opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {/* Icon with color transition and bounce effect */}
                <i className={`fab fa-${item.platform} text-xl transition-all duration-300 transform group-hover:scale-110 ${item.iconColor} ${item.color}`}></i>
                
                {/* Tooltip */}
                <span className={`absolute -top-9 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium px-2 py-1 rounded ${
                  darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 shadow-md'
                }`}>
                  {item.platform.replace('-in', '')}
                </span>
              </a>
            ))}
          </div>
          
          {/* Copyright text */}
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            &copy; {new Date().getFullYear()} ParwezPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
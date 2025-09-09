import React, { useState, useEffect } from 'react';

const Header = ({ mobileMenuOpen, setMobileMenuOpen, darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Closes the mobile menu when a click occurs outside of it or its button.
    const handleClickOutside = (e) => {
      if (mobileMenuOpen &&
        !e.target.closest('#mobile-menu') &&
        !e.target.closest('#mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
    };

    // Handles the scroll effect for the header, making it shrink and add a shadow.
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Add event listeners for clicks and scrolls.
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    // Clean up event listeners on component unmount to prevent memory leaks.
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]); // Dependency array: re-run effect if mobileMenuOpen changes.

  // Define SVG icons with 'fill="none"' and 'stroke="currentColor"' for outlined style.
  // Paths are chosen for a clean, modern, outlined appearance.
  const HouseIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10l-9-9-9 9z"></path></svg>;
  const UserIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>;
  const CodeIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>;
  const FolderIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>;
  const EnvelopeIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 10a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v12z"></path></svg>;
  const LinkedinIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"></path></svg>;
  const SunIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h1M2 12h1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>;
  const MoonIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>;


  // Define the navigation items, using the inline SVG icons.
  const navItems = [
    { id: 'home', text: 'Home', icon: HouseIcon, href: '#' },
    { id: 'about', text: 'About', icon: UserIcon, href: '#about' },
    { id: 'skills', text: 'Skills', icon: CodeIcon, href: '#skills' },
    { id: 'projects', text: 'Projects', icon: FolderIcon, href: '#projects' },
    { id: 'contact', text: 'Contact', icon: EnvelopeIcon, href: '#contact' },
  ];

  return (
    <header
      // Dynamically applies header styles based on scroll position (scrolled state).
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? `header-glass-effect glass-shadow py-2 ${darkMode ? 'bg-black/80' : 'bg-white/80'}`
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo section with a rotating gradient text effect. */}
        <a
          href="#"
          className="flex items-center group"
          onClick={() => setMobileMenuOpen(false)} // Close mobile menu if logo is clicked
        >
          <span className="logo-text text-2xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-400 to-silver-300 animate-gradient-rotate">
              PARWEZ
            </span>
          </span>
        </a>

        {/* Desktop Navigation - hidden on small screens, flex on medium and up. */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              // Each navigation item is an anchor tag.
              // 'group' enables group-hover utilities for children.
              // 'relative' is crucial for positioning absolute children (text/icon/underline).
              // 'flex items-center justify-center' centers the content (text/icon) within the link.
              // 'h-10' sets a fixed height to ensure consistent vertical alignment.
              className={`nav-item group relative px-4 py-2 font-medium ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-purple-600'} transition-colors
                          flex items-center justify-center overflow-hidden h-10`}
            >
              {/* This span holds the text. It's initially visible. */}
              {/* On hover, it shrinks to scale-0 (collapses to center) and fades out (opacity-0). */}
              {/* 'z-10' ensures it's on top initially. */}
              <span className="nav-text relative z-10 transition-all duration-300 group-hover:opacity-0 group-hover:scale-0">
                {item.text}
              </span>
              {/* This span holds the icon. It's initially hidden and scaled to 0. */}
              {/* On hover, it grows to scale-100 (arises from center) and fades in (opacity-100). */}
              {/* 'absolute' positions it over the text. 'z-0' ensures it's underneath initially. */}
              <span className={`nav-icon absolute z-0 transition-all duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`}>
                {item.icon}
              </span>
              {/* Underline effect: starts at 0 width and expands on hover. */}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-400 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></div>
            </a>
          ))}

          {/* Social Icons (LinkedIn) and Dark Mode Toggle. */}
          {/* Added px-6 to the border-l div for more pronounced separation. */}
          {/* Ensured icons are aligned vertically with nav items by making the container a flex item. */}
          <div className={`ml-6 flex items-center space-x-5 border-l ${darkMode ? 'border-gray-700' : 'border-gray-300'} pl-6 h-10`}>
            <a
              href="https://linkedin.com/in/parwez-sheikh-427888236"
              target="_blank"
              rel="noreferrer"
              className={`${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors flex items-center justify-center`}
              aria-label="LinkedIn"
            >
              {LinkedinIcon}
            </a>
            <button
              onClick={toggleDarkMode}
              className={`${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors flex items-center justify-center`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? SunIcon : MoonIcon}
            </button>
          </div>
        </nav>

        {/* Mobile menu button - visible only on small screens. */}
        <button
          id="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            // Close icon (X) when menu is open.
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon when menu is closed.
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation - slides in from the right with glass effect */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 right-0 h-full w-64 z-50 transition-transform duration-300 backdrop-blur-lg ${darkMode ? 'bg-black/75' : 'bg-white/80'} ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className={`flex justify-between items-center p-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
          <a
            href="#"
            className="flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="logo-text text-xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-400">
                PARWEZ
              </span>
            </span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className={darkMode ? 'text-gray-300' : 'text-gray-700'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-6 flex flex-col space-y-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center py-3 px-4 rounded-lg ${darkMode ? 'text-gray-300 hover:bg-purple-900/50 hover:text-white' : 'text-gray-700 hover:bg-purple-100 hover:text-purple-600'} transition-colors`}
            >
              <span className={`mr-3 ${darkMode ? 'text-purple-400' : 'text-purple-500'} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </span>
              <span>{item.text}</span>
            </a>
          ))}
        </nav>

        {/* Social icons and Dark Mode Toggle for mobile. */}
        <div className={`absolute bottom-0 left-0 right-0 p-6 flex justify-center space-x-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
          <a
            href="https://linkedin.com/in/parwez-sheikh-427888236"
            target="_blank"
            rel="noreferrer"
            className={`${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}
            aria-label="LinkedIn"
          >
            {LinkedinIcon}
          </a>
          <button
            onClick={toggleDarkMode}
            className={`${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? SunIcon : MoonIcon}
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
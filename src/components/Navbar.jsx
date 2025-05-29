import React, { useState, useEffect } from 'react';

const PremiumNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Optional: Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'experience','services', 'contact'];
      const currentSection = sections.find(section => {
        if (section === 'home' && window.scrollY < 300) return true;
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    setActiveSection(sectionId);
    setMobileMenuOpen(false); // Close mobile menu after selection
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 backdrop-blur-md bg-black/80 border-b border-red-900/20 shadow-lg shadow-black/20'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center group"
          >
            <div className="w-8 h-8 mr-2 rounded-full bg-gradient-to-br from-red-600 to-black p-0.5">
              <div className="w-full h-full rounded-full border border-red-600/30 flex items-center justify-center">
                <div className="text-sm font-light text-red-600">P</div>
              </div>
            </div>
            <span className="text-xl font-medium bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:from-red-500 group-hover:to-white transition-all duration-300">
              Portfolio
            </span>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {['home', 'about', 'projects','experience','services', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`relative text-sm uppercase tracking-wider font-light transition-colors duration-300 ${
                  activeSection === item 
                    ? 'text-red-600' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item}</span>
                {activeSection === item && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></span>
                )}
              </button>
            ))}
          </nav>
            
          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-1.5 rounded-full border border-red-600/20 text-gray-300 hover:text-white hover:border-red-600/50 transition-colors"
            aria-label="Menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden backdrop-blur-md bg-black/90 border-t border-b border-red-900/20">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col gap-4">
              {['home', 'about', 'projects', 'experience', 'services', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-left py-2 text-sm uppercase tracking-wider font-light transition-colors duration-300 ${
                    activeSection === item 
                      ? 'text-red-600' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <span className="ml-2 inline-block w-4 h-px bg-red-600"></span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
      
      {/* Subtle glow effect */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"></div>
      )}
    </header>
  );
};

export default PremiumNavbar;
import React from 'react';
import { Instagram, Facebook, Linkedin, Code } from 'lucide-react';

const ContactSection = () => {
  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-black text-white w-full" id="contact">
      {/* CTA Section */}
      <section className="py-16 w-full">
        <div className="w-full px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's work together on your next project</h2>
              <p className="text-gray-400">
                Collaboration is key! Let's join forces and combine our skills to tackle your next 
                project with a powerful synergy that guarantees success.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <a 
                href="tel:+917558192899" 
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-800 py-12">
        <div className="w-full px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and Copyright */}
            <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start">
              <div className="w-12 h-12 text-red-600 mb-3">
                {/* Replace with your actual logo */}
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                </svg>
              </div>
              <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Jitto Shalvin. All rights reserved.</p>
            </div>

            {/* Navigation Links */}
            <nav className="mb-8 md:mb-0">
              <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-gray-400 hover:text-red-500 transition-colors font-medium"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-gray-400 hover:text-red-500 transition-colors font-medium"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="text-gray-400 hover:text-red-500 transition-colors font-medium"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-400 hover:text-red-500 transition-colors font-medium"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-400 hover:text-red-500 transition-colors font-medium"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a href="https://www.instagram.com/jittoshalvin/" target="_blank" rel="noopener noreferrer" 
                 className="text-white hover:text-red-500 transition-colors">
                <Instagram size={22} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-white hover:text-red-500 transition-colors">
                <Facebook size={22} />
              </a>
              <a href="https://www.linkedin.com/in/jitto-shalvin/" target="_blank" rel="noopener noreferrer" 
                 className="text-white hover:text-red-500 transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="https://github.com/JittoShalvin?tab=repositories" target="_blank" rel="noopener noreferrer" 
                 className="text-white hover:text-red-500 transition-colors">
                <Code size={22} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactSection;
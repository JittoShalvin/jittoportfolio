import React, { useState, useEffect } from 'react';
import { Quote, Shield, Code, Zap, ChevronRight } from 'lucide-react';
import Img from './images/image.png';

const EnhancedPremiumAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



  return (
    <section id="about" className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating orbs with animation */}
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-red-600/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-red-600/10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-red-400/5 blur-2xl animate-pulse delay-500"></div>
        
        {/* Dynamic mouse follower */}
        <div 
          className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-10 transition-all duration-500 ease-out"
          style={{
            background: `radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, transparent 70%)`,
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Enhanced accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-40 animate-pulse delay-500"></div>
      
      {/* Section header with enhanced animations */}
      <div className="container mx-auto px-6 mb-16 relative z-20">
        <div className="text-center">
          <div className={`inline-block relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
              About <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse"></div>
          </div>
          <p className={`text-gray-400 text-lg mt-6 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Crafting intelligent solutions at the intersection of AI and cybersecurity
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Enhanced image section */}
          <div className={`w-full lg:w-2/5 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-2xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-black border border-red-500/20">
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/5 to-transparent mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
                
                {/* Placeholder for image - replace with actual image */}
                <img
                  src={Img}
                  alt="Fullstack Developer"
                  className="w-full h-96 object-cover relative z-10"
                />
                
                {/* Floating tech icons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-8 h-8 bg-red-600/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Shield size={16} className="text-red-400" />
                  </div>
                  <div className="w-8 h-8 bg-red-600/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Zap size={16} className="text-red-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced content section */}
          <div className={`w-full lg:w-3/5 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Title with enhanced styling */}
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Fullstack Developer & 
                <span className="block bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                  Machine Learning Engineer
                </span>
              </h3>
              <div className="h-px w-32 bg-gradient-to-r from-red-600 to-transparent mb-4"></div>
            </div>
            
            {/* Enhanced text content */}
            <div className="text-gray-300 space-y-6 text-lg leading-relaxed">
              <p className="relative pl-6">
                <ChevronRight className="absolute left-0 top-1 text-red-500" size={16} />
                I'm <span className="text-white font-semibold">Jitto Shalvin</span>, a fullstack machine learning engineer with deep expertise in cybersecurity. I specialize in building end-to-end intelligent systems that protect, analyze, and secure digital infrastructures while delivering powerful <span className="text-red-400 font-medium">AI-driven solutions</span>.
              </p>
              
              <p className="relative pl-6">
                <ChevronRight className="absolute left-0 top-1 text-red-500" size={16} />
                My expertise spans across machine learning model development, from data preprocessing to deployment, combined with robust cybersecurity practices. I develop secure ML pipelines, implement threat detection systems, and create intelligent security solutions that adapt to evolving <span className="text-white font-medium">cyber threats</span>.
              </p>
            </div>
            
            {/* Enhanced quote section */}
            <div className="mt-10 relative group">
              {/* Glowing background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-red-400/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 rounded-xl backdrop-blur-sm">
                <Quote className="text-red-500/30 mb-4" size={32} />
                <blockquote className="text-gray-300 italic text-lg leading-relaxed font-light">
                  "The future of <span className="text-red-400">cybersecurity</span> lies in intelligent systems. I build ML solutions that don't just detect threats, but anticipate and adapt to them, creating robust defenses for tomorrow's digital landscape."
                </blockquote>
                
                {/* Animated accent */}
                <div className="mt-4 w-16 h-px bg-gradient-to-r from-red-600 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span>Passionate about AI & Security</span>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedPremiumAbout;
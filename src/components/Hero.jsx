import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function UltraPremiumHero() {
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [typedText, setTypedText] = useState('');
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  // Updated titles for ML and cybersecurity
  const wordsToType = ['ML Engineer', 'Security Specialist', 'Fullstack Developer'];
  
  // Typing effect
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % wordsToType.length;
      const fullText = wordsToType[i];
      
      setCurrentText(isDeleting 
        ? fullText.substring(0, typedText.length - 1) 
        : fullText.substring(0, typedText.length + 1)
      );
      
      setTypingSpeed(isDeleting ? 80 : 150);
      
      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    
    const timer = setTimeout(() => {
      setTypedText(currentText);
      handleTyping();
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, currentText]);
  
  // Check for mobile viewport
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Premium particle background - ENHANCED FOR VISIBILITY
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create luxury particle system - INCREASED COUNT FOR VISIBILITY
    const particlesCount = isMobile ? 2000 : 5000; // Increased particle count
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);
    
    // Create two-tone particle system with LARGER DISTRIBUTION
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Wider spherical distribution for better visibility
      const radius = 8 + Math.random() * 10; // Increased radius for wider distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i+1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i+2] = radius * Math.cos(phi);
      
      // Increased sizes for better visibility
      scaleArray[i/3] = Math.random() * 1.0 + 1.0; // Larger scale values
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));
    
    // Primary particles (red) - INCREASED SIZE AND BRIGHTNESS
    const primaryParticlesMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.015 : 0.01, // Increased size significantly
      color: 0xff0a2d,
      transparent: true,
      opacity: 0.9, // Increased opacity
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true // Enables perspective (particles closer look bigger)
    });
    
    // Secondary particles (cyan for cybersecurity theme) - INCREASED SIZE AND BRIGHTNESS
    const secondaryParticlesMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.02 : 0.015, // Increased size significantly
      color: 0x00ffff, // Cyan for tech/security theme
      transparent: true,
      opacity: 0.8, // Increased opacity
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true // Enables perspective
    });
    
    // Create primary particle system
    const primaryParticlesMesh = new THREE.Points(particlesGeometry, primaryParticlesMaterial);
    scene.add(primaryParticlesMesh);
    
    // Create secondary particle system WITH MORE PARTICLES
    const secondaryGeometry = new THREE.BufferGeometry();
    const secondaryPosArray = new Float32Array(Math.floor(particlesCount * 0.4) * 3); // Doubled the secondary particles
    
    for (let i = 0; i < secondaryPosArray.length; i += 3) {
      const radius = 7 + Math.random() * 8; // Wider distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      secondaryPosArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      secondaryPosArray[i+1] = radius * Math.sin(phi) * Math.sin(theta);
      secondaryPosArray[i+2] = radius * Math.cos(phi);
    }
    
    secondaryGeometry.setAttribute('position', new THREE.BufferAttribute(secondaryPosArray, 3));
    const secondaryParticlesMesh = new THREE.Points(secondaryGeometry, secondaryParticlesMaterial);
    scene.add(secondaryParticlesMesh);
    
    // Position camera FURTHER BACK for better field of view
    camera.position.z = 10; // Moved camera back to see more particles
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Elegant mouse tracking for premium feel - INCREASED SENSITIVITY
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.0005; // Increased sensitivity
      mouseY = (event.clientY - window.innerHeight / 2) * 0.0005; // Increased sensitivity
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Sophisticated animation loop with ENHANCED MOVEMENT
    const clock = new THREE.Clock();
    
    const animate = () => {
      requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      
      targetX = mouseX * 0.8; // Increased mouse influence
      targetY = mouseY * 0.8; // Increased mouse influence
      
      // MORE DYNAMIC movement for primary particles
      primaryParticlesMesh.rotation.x += 0.0003; // Increased rotation speed
      primaryParticlesMesh.rotation.y += 0.0005; // Increased rotation speed
      
      // MORE DYNAMIC movement for secondary particles
      secondaryParticlesMesh.rotation.y += 0.0008; // Increased rotation speed
      secondaryParticlesMesh.rotation.x -= 0.0004; // Increased rotation speed
      
      // Elegant mouse interaction with FASTER RESPONSE
      primaryParticlesMesh.rotation.y += (targetX - primaryParticlesMesh.rotation.y) * 0.05; // Faster response
      primaryParticlesMesh.rotation.x += (targetY - primaryParticlesMesh.rotation.x) * 0.05; // Faster response
      
      secondaryParticlesMesh.rotation.y += (targetX - secondaryParticlesMesh.rotation.y) * 0.08; // Faster response
      secondaryParticlesMesh.rotation.x += (targetY - secondaryParticlesMesh.rotation.x) * 0.08; // Faster response
      
      // STRONGER pulsing for cyan particles
      secondaryParticlesMesh.scale.set(
        1 + Math.sin(elapsedTime * 0.7) * 0.15, // Increased frequency and amplitude
        1 + Math.sin(elapsedTime * 0.7) * 0.15,
        1 + Math.sin(elapsedTime * 0.7) * 0.15
      );
      
      // Add subtle pulsing to primary particles too
      primaryParticlesMesh.scale.set(
        1 + Math.sin(elapsedTime * 0.5) * 0.08,
        1 + Math.sin(elapsedTime * 0.5) * 0.08,
        1 + Math.sin(elapsedTime * 0.5) * 0.08
      );
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      scene.remove(primaryParticlesMesh);
      scene.remove(secondaryParticlesMesh);
      
      primaryParticlesMaterial.dispose();
      secondaryParticlesMaterial.dispose();
      particlesGeometry.dispose();
      secondaryGeometry.dispose();
      
      renderer.dispose();
    };
  }, [isMobile]);

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="home" className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Premium particle background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0"
      />
      
      {/* REDUCED overlay gradients to show particles better */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 z-1"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-30 z-1"></div>
      
      {/* Subtle cyan accent line for tech theme */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-70"></div>
      
      {/* Central content area - Adjusted for navbar */}
      <div className="container relative z-10 mx-auto px-6 lg:px-10 flex flex-col items-center justify-center text-center min-h-screen pt-24">
        <div className="max-w-4xl">
          {/* Updated header with name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-none">
            <div className="mb-2">
              <span className="text-white">Hi, I'm </span> 
              <span className="text-red-600">Jitto Shalvin</span>
            </div>
          </h1>
          
          {/* Elegant separator */}
          <div className="flex items-center justify-center mb-6 md:mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            <div className="mx-2 h-1 w-1 rounded-full bg-red-600"></div>
            <div className="h-px w-36 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
            <div className="mx-2 h-1 w-1 rounded-full bg-red-600"></div>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </div>
          
          {/* Premium typing effect */}
          <div className="h-6 md:h-10 mb-8">
            <p className="text-lg md:text-2xl font-light tracking-wide">
              <span className="text-red-600 font-normal">{typedText || 'ML Engineer'}</span>
            </p>
          </div>
          
          {/* Updated description for ML and cybersecurity */}
          <p className="text-gray-300 text-base md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Building intelligent systems and secure applications with <span className="text-white">machine learning</span> and 
            <span className="text-red-600"> cybersecurity expertise</span>. Specialized in creating robust, scalable solutions 
            that protect digital infrastructures while delivering cutting-edge AI-driven experiences.
          </p>
          
          {/* Updated CTA section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 mb-12">
            {/* CV Download Button */}
            <a 
              href="/Jitto-Shalvin-CV.pdf" 
              download
              className="px-10 py-4 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-md font-medium tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-red-900/20 group"
            >
              <span className="flex items-center justify-center">
                <span>View my CV</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </span>
            </a>
            
            {/* Contact Button */}
            <button 
              onClick={scrollToContact}
              className="px-10 py-4 border border-red-600/30 hover:border-red-600 hover:bg-red-600/5 text-white rounded-md font-medium tracking-wide transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact
            </button>
          </div>
          
          {/* Elegant credentials - Made responsive and updated for ML/Security */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-8 md:space-x-12 space-y-6 sm:space-y-0">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">ML</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Engineering</p>
            </div>
            
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">CYBER</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Security</p>
            </div>
            
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">FULL</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Stack</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
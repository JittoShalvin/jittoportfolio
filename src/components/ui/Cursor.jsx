import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NormalCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isOverLink, setIsOverLink] = useState(false);
  
  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseEnter = () => {
      setVisible(true);
    };
    
    const handleMouseLeave = () => {
      setVisible(false);
    };
    
    // Simple link detection
    const handleLinkDetection = () => {
      const links = document.querySelectorAll('a, button');
      
      links.forEach(link => {
        link.addEventListener('mouseenter', () => setIsOverLink(true));
        link.addEventListener('mouseleave', () => setIsOverLink(false));
      });
    };
    
    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Initialize link detection
    handleLinkDetection();
    
    // Cleanup
    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        width: isOverLink ? '20px' : '12px',
        height: isOverLink ? '20px' : '12px',
        borderRadius: '50%',
        border: '1px solid #333',
        backgroundColor: isOverLink ? 'transparent' : 'rgba(0, 0, 0, 0.2)'
      }}
      animate={{
        x: position.x - (isOverLink ? 10 : 6),
        y: position.y - (isOverLink ? 10 : 6),
        opacity: visible ? 1 : 0
      }}
      transition={{
        type: 'tween',
        ease: 'linear',
        duration: 0.1
      }}
    />
  );
};

export default NormalCursor;
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 200);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="w-20 h-20 flex items-center justify-center bg-blue-600 text-white rounded-lg">
          <Code size={36} />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 mix-blend-multiply rounded-lg"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </div>
        
        <motion.div
          className="absolute -bottom-3 -left-3 -right-3 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Jitto Shalvin's Portfolio
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Loading amazing projects...
        </p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
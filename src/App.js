import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/about';
import Services from './components/services';
import Footer from './components/Footer';
import Cursor from './components/ui/Cursor';
import ScrollToTop from './components/ui/ScrollToTop';
import LoadingScreen from './components/ui/LoadingScreen';
import PremiumSkills from './components/Skills';
import ExperienceSection from './components/Experience';
import WhatsAppRobot from './components/WhatsAppRobot'; // Import the new robot component



function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time for the initial animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (

      <Router>
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Skills />
                  <PremiumSkills />
                  <Projects />
                  
                  <ExperienceSection/>
                  <Services />
                </>
              } />
            </Routes>
            <Footer />
            <ScrollToTop />
            <WhatsAppRobot /> {/* Add the WhatsApp robot component here */}
          </>
        )}
      </Router>

  );
}

export default App;
import React, { useState, useEffect } from 'react';

const WhatsAppRobot = () => {
  const [whatsappHover, setWhatsappHover] = useState(false);
  const [phoneHover, setPhoneHover] = useState(false);
  const [bounce, setBounce] = useState(false);
  const phoneNumber = '7558192899';
  
  useEffect(() => {
    // Create bouncing animation effect
    const bounceInterval = setInterval(() => {
      setBounce(prev => !prev);
    }, 2000);
    
    return () => clearInterval(bounceInterval);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col space-y-4">
      {/* WhatsApp Icon */}
      <div 
        className={`relative transition-transform duration-300 ${bounce ? 'transform -translate-y-1' : ''} cursor-pointer`}
        onMouseEnter={() => setWhatsappHover(true)}
        onMouseLeave={() => setWhatsappHover(false)}
        onClick={handleWhatsAppClick}
      >
        <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-green-500 shadow-lg transform transition-all duration-300 ${whatsappHover ? 'scale-110' : 'scale-100'}`}>
          {/* WhatsApp SVG Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </div>
        
        {/* Tooltip */}
        {whatsappHover && (
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap">
            Chat on WhatsApp
          </div>
        )}
      </div>

      {/* Phone Icon */}
      <div 
        className={`relative transition-transform duration-300 ${bounce ? 'transform -translate-y-1' : ''} cursor-pointer`}
        onMouseEnter={() => setPhoneHover(true)}
        onMouseLeave={() => setPhoneHover(false)}
        onClick={handlePhoneClick}
      >
        <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 shadow-lg transform transition-all duration-300 ${phoneHover ? 'scale-110' : 'scale-100'}`}>
          {/* Phone SVG Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        
        {/* Tooltip */}
        {phoneHover && (
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap">
            Call Phone
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsAppRobot;
import React, { useState } from 'react';
import { 
  Monitor, 
  Server, 
  Brain, 
  ChevronRight,
  Code,
  Database,
  Cpu
} from 'lucide-react';

const Services = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces using modern frameworks like React, Vue, and Angular. Focus on performance, accessibility, and seamless user experiences.",
      icon: <Monitor size={32} className="text-red-500" />,
      technologies: ["React", "Vue.js", "TypeScript", "Tailwind CSS"],
      color: "red"
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Building robust server-side applications, APIs, and databases. Expertise in scalable architectures, security, and performance optimization.",
      icon: <Server size={32} className="text-red-500" />,
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
      color: "red"
    },
    {
      id: 3,
      title: "Machine Learning",
      description: "Developing intelligent systems using AI and ML algorithms. From data analysis to predictive models and neural networks for real-world applications.",
      icon: <Brain size={32} className="text-red-500" />,
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      color: "red"
    }
  ];

  const getColorClasses = (color, isHovered) => {
    const colors = {
      red: {
        border: 'border-red-500/50',
        shadow: 'shadow-red-900/30',
        accent: 'bg-red-600',
        text: 'text-red-400'
      }
    };
    return colors[color];
  };
  
  return (
    <section id="services" className="bg-gradient-to-b from-black via-gray-900 to-black py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Premium section header */}
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-1 bg-red-600 rounded-full"></div>
            <span className="text-gray-400 font-medium mx-4 tracking-wider uppercase text-sm">My Expertise</span>
            <div className="w-16 h-1 bg-red-600 rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-4">
            What I <span className="text-red-500">Build</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Crafting digital solutions across the full technology stack
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color, hoverIndex === index);
            
            return (
              <div
                key={service.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div 
                  className={`bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 h-full transition-all duration-500 border ${
                    hoverIndex === index 
                      ? `${colorClasses.border} ${colorClasses.shadow} shadow-2xl transform -translate-y-2 scale-[1.02]`
                      : 'border-gray-800/50'
                  }`}
                >
                  {/* Icon container with animated background */}
                  <div className={`mb-8 w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center transition-all duration-500 ${
                    hoverIndex === index ? 'scale-110 rotate-3' : ''
                  }`}>
                    <div className={`transition-all duration-300 ${
                      hoverIndex === index ? 'scale-110' : ''
                    }`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Service title */}
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    hoverIndex === index ? colorClasses.text : 'text-white'
                  }`}>
                    {service.title}
                  </h3>
                  
                  {/* Service description */}
                  <p className="text-gray-400 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                            hoverIndex === index 
                              ? `${colorClasses.accent} text-white`
                              : 'bg-gray-800 text-gray-300'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Animated accent line */}
                  <div className={`h-1 bg-gradient-to-r rounded-full transition-all duration-500 ${
                    hoverIndex === index 
                      ? `w-full ${colorClasses.accent}`
                      : 'w-12 bg-gray-700'
                  }`}></div>
                  
                  {/* Hover arrow */}
                  <div className={`absolute top-8 right-8 transition-all duration-300 ${
                    hoverIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                  }`}>
                    <ChevronRight size={20} className="text-red-400" />
                  </div>
                </div>
                
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                  hoverIndex === index ? 'opacity-100' : 'opacity-0'
                } bg-red-600/10 blur-xl -z-10`}></div>
              </div>
            );
          })}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">
            Ready to bring your project to life?
          </p>
          <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-1">
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
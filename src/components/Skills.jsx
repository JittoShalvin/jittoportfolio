import React, { useState, useEffect } from 'react';
import { 
  Code, 
  FileCode, 
  Database, 
  Server, 
  Shield, 
  FileText,
  Box,
  Terminal,
  Zap
} from 'lucide-react';

const ModernSkillsDesign = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const skills = [
    {
      name: "Java",
      icon: Code,
      color: "#ED8B00",
      gradient: "from-red-500 to-orange-600",
      description: "Object-oriented programming"
    },
    {
      name: "Python",
      icon: Code,
      color: "#3776AB",
      gradient: "from-red-500 to-red-700",
      description: "Data science & automation"
    },
    {
      name: "C",
      icon: Terminal,
      color: "#A8B9CC",
      gradient: "from-gray-600 to-black",
      description: "System programming"
    },
    {
      name: "SQL",
      icon: Database,
      color: "#336791",
      gradient: "from-red-600 to-black",
      description: "Database management"
    },
    {
      name: "JavaScript",
      icon: FileCode,
      color: "#F7DF1E",
      gradient: "from-red-400 to-red-600",
      description: "Dynamic web development"
    },
    {
      name: "HTML",
      icon: FileText,
      color: "#E34F26",
      gradient: "from-red-500 to-red-700",
      description: "Web structure & markup"
    },
    {
      name: "CSS",
      icon: FileText,
      color: "#1572B6",
      gradient: "from-red-600 to-black",
      description: "Styling & animations"
    },
    {
      name: "React",
      icon: Code,
      color: "#61DAFB",
      gradient: "from-red-400 to-red-800",
      description: "Component-based UI"
    },
    {
      name: "Node.js",
      icon: Server,
      color: "#339933",
      gradient: "from-red-500 to-black",
      description: "Backend development"
    },
    {
      name: "Flask",
      icon: Box,
      color: "#000000",
      gradient: "from-black to-red-900",
      description: "Python web framework"
    },
    {
      name: "Machine Learning",
      icon: Zap,
      color: "#FF6B6B",
      gradient: "from-red-500 to-red-700",
      description: "AI & predictive models"
    },
    {
      name: "Cybersecurity",
      icon: Shield,
      color: "#4ECDC4",
      gradient: "from-red-600 to-black",
      description: "Security & protection"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Mouse follower gradient */}
      <div 
        className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-20 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)`,
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="relative z-20 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              const isActive = activeSkill === index;
              
              return (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setActiveSkill(index)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  {/* Card */}
                  <div className={`
                    relative bg-black/40 backdrop-blur-xl border border-red-500/20 rounded-3xl p-8
                    transition-all duration-500 ease-out cursor-pointer
                    ${isActive ? 'scale-105 bg-black/60 border-red-500/40' : 'hover:bg-black/50 hover:border-red-500/30'}
                  `}>
                    {/* Gradient overlay on hover */}
                    {isActive && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-10 rounded-3xl`}></div>
                    )}
                    
                    {/* Icon container */}
                    <div className={`
                      relative mb-6 w-16 h-16 mx-auto rounded-2xl
                      bg-gradient-to-br ${skill.gradient} p-0.5
                      transition-all duration-300 
                      ${isActive ? 'scale-110 shadow-2xl' : ''}
                    `}>
                      <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                        <IconComponent 
                          size={28} 
                          color="white"
                          className="transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Skill name */}
                    <h3 className={`
                      text-xl font-bold text-center mb-2 transition-all duration-300
                      ${isActive ? 'text-white' : 'text-gray-200'}
                    `}>
                      {skill.name}
                    </h3>

                    {/* Description */}
                    <p className={`
                      text-sm text-center transition-all duration-300
                      ${isActive ? 'text-gray-200 opacity-100' : 'text-gray-400 opacity-70'}
                    `}>
                      {skill.description}
                    </p>

                    {/* Progress bar animation */}
                    <div className="mt-4 h-1 bg-red-900/30 rounded-full overflow-hidden">
                      <div className={`
                        h-full bg-gradient-to-r ${skill.gradient} rounded-full
                        transition-all duration-700 ease-out
                        ${isActive ? 'w-full' : 'w-0'}
                      `}></div>
                    </div>

                    {/* Floating particles effect */}
                    {isActive && (
                      <>
                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-400/60 rounded-full animate-ping"></div>
                        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-red-500/50 rounded-full animate-ping delay-200"></div>
                        <div className="absolute top-1/2 -right-3 w-1.5 h-1.5 bg-red-600/60 rounded-full animate-ping delay-400"></div>
                      </>
                    )}
                  </div>

                  {/* Glow effect */}
                  {isActive && (
                    <div className={`
                      absolute inset-0 bg-gradient-to-br ${skill.gradient} 
                      opacity-20 blur-2xl rounded-3xl -z-10
                      animate-pulse
                    `}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-red-500/20 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm">Always learning & growing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSkillsDesign;
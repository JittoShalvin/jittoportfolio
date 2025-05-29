import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, Shield, Code } from 'lucide-react';

const ExperienceSection = () => {
  const [expandedJob, setExpandedJob] = useState(0);
  
  const experiences = [
    {
      id: 1,
      title: "Software Developer",
      company: "K Labs Technology & Solutions (P) Ltd",
      duration: "Mar 2025 - Apr 2025",
      location: "Chennai, Tamil Nadu, India",
      type: "Internship · On-site",
      description: "Gained hands-on experience in full-stack development with focus on React.js and Node.js technologies. Worked on real-world projects to develop practical software development skills.",
      achievements: [
        "Developed responsive web applications using React.js with modern JavaScript features",
        "Built backend services and APIs using Node.js for seamless client-server communication",
        "Collaborated with development team to understand industry best practices and coding standards",
        "Participated in code reviews and learned version control workflows using Git",
        "Worked on database integration and data management solutions"
      ],
      skills: ["React.js", "Node.js", "JavaScript", "HTML/CSS", "Git"],
      icon: <Code size={20} className="text-red-500" />
    },
    {
      id: 2,
      title: "Cyber Security Intern",
      company: "Rootecstak",
      duration: "Jul 2024 - Jul 2024",
      location: "Remote",
      type: "Internship · Remote",
      description: "Gained foundational knowledge in cybersecurity principles, threat analysis, and security protocols. Learned about various security frameworks and best practices in the industry.",
      achievements: [
        "Studied cybersecurity fundamentals including network security and threat assessment",
        "Learned about common security vulnerabilities and mitigation strategies",
        "Gained exposure to security tools and techniques used in the industry",
        "Participated in security awareness training and workshops",
        "Understood the importance of secure coding practices and data protection"
      ],
      skills: ["Cybersecurity", "Network Security", "Threat Analysis", "Security Protocols", "Risk Assessment"],
      icon: <Shield size={20} className="text-red-500" />
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center mb-3">
            <div className="w-12 h-1 bg-red-600 rounded-full"></div>
            <span className="text-red-600 font-medium mx-4 tracking-wider uppercase text-sm">My Journey</span>
            <div className="w-12 h-1 bg-red-600 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Professional <span className="text-red-600">Experience</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Building expertise through hands-on experience in software development and cybersecurity
          </p>
        </div>
        
        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((job, index) => (
            <div key={job.id} className="mb-8 last:mb-0">
              <div 
                className={`relative border-l-2 ${
                  index === expandedJob ? 'border-red-600' : 'border-gray-800'
                } pl-8 pb-8 transition-all duration-300`}
              >
                {/* Timeline Dot */}
                <div 
                  className={`absolute left-0 top-0 w-4 h-4 rounded-full -translate-x-1/2 ${
                    index === expandedJob ? 'bg-red-600' : 'bg-gray-800'
                  } border-2 border-black transition-all duration-300`}
                />
                
                {/* Job Card */}
                <div 
                  className={`bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 border ${
                    index === expandedJob 
                      ? 'border-red-600/50 shadow-lg shadow-red-900/20' 
                      : 'border-gray-800 hover:border-gray-700'
                  } transition-all duration-300 cursor-pointer group`}
                  onClick={() => setExpandedJob(index === expandedJob ? null : index)}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {job.icon}
                        <h3 className="text-xl font-bold text-white ml-2">{job.title}</h3>
                      </div>
                      <p className="text-red-500 font-medium text-lg">{job.company}</p>
                      <p className="text-gray-400 text-sm mt-1">{job.type}</p>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end mt-3 md:mt-0">
                      <div className="flex items-center mb-2">
                        <Calendar size={16} className="text-gray-400 mr-2" />
                        <span className="text-gray-300 text-sm font-medium">{job.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="text-gray-500 mr-2" />
                        <span className="text-gray-400 text-sm">{job.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>
                  
                  {/* Expanded Content */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    index === expandedJob ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    {/* Key Achievements */}
                    <div className="mt-4 mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                        Key Achievements & Learning:
                      </h4>
                      <ul className="space-y-3">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <ChevronRight size={16} className="text-red-500 mr-3 flex-shrink-0 mt-1" />
                            <span className="text-gray-300 leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Skills */}
                    <div className="mt-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                        Technologies & Skills:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1.5 text-sm bg-gray-800 hover:bg-red-600 text-gray-300 hover:text-white rounded-full transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Toggle Indicator */}
                  <div className="flex justify-center mt-6">
                    <button 
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        index === expandedJob 
                          ? 'bg-red-600 hover:bg-red-700' 
                          : 'bg-gray-800 hover:bg-gray-700 group-hover:bg-gray-700'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedJob(index === expandedJob ? null : index);
                      }}
                    >
                      <ChevronRight 
                        size={18} 
                        className={`text-white transition-transform duration-300 ${
                          index === expandedJob ? 'rotate-90' : 'rotate-0'
                        }`} 
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">
            Ready to contribute to your team's success?
          </p>
          <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-1">
            View My Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
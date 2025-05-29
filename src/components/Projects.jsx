import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
   {
  id: 1,
  title: "AI-based Plant Disease Detection System",
  description: "An end-to-end AI-powered system using Computer Vision and Machine Learning to detect plant diseases from leaf images. Supports both image-based (CNN) and symptom-based (Random Forest) predictions.",
  image: "/images/plant.png", // Update with correct path if needed
  tags: ["React", "Flask", "TensorFlow", "Scikit-learn", "CNN", "Random Forest"],
  liveLink: "https://github.com/JittoShalvin/plant", // GitHub or live demo link
},

{
  id: 2,
  title: "Chennai Traffic Congestion Predictor",
  description: "A real-time traffic prediction web app for Chennai that uses machine learning to estimate congestion levels between source and destination points. Displays results as High, Moderate, or Low congestion to assist commuters, planners, and smart city systems.",
  image: "/images/traffic.png", // Update this path based on your public image folder
  tags: ["React", "Machine Learning", "Smart City", "Urban Mobility"],
  liveLink: "https://traffic-git-main-jitto-shalvins-projects.vercel.app/"
},
{
  id: 4,
  title: "Fake News Checker",
  description: "A web application that allows users to input news headlines or content and receive an assessment indicating whether the news is likely to be real or fake, utilizing machine learning models trained on historical data.",
  image: "/images/web.png", // Update this path based on your public image folder
  tags: ["React", "Machine Learning", "Natural Language Processing", "Fake News Detection"],
  liveLink: "https://news-fe-git-main-jitto-shalvins-projects.vercel.app/"
},
  ];

  return (
    <section id="projects" className="bg-black py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my recent work and personal projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-900 rounded-lg overflow-hidden border border-red-900 hover:border-red-600 transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-500 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-medium bg-red-900/30 text-red-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-red-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
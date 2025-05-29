import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Anchor, ExternalLink, Code, Layers, Calendar, Users, ArrowRight } from 'lucide-react';

// This would typically come from an API or data store
// For this example, we'll include it directly
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce platforms with real-time analytics, inventory management, and customer insights.",
    longDescription: "Developed a full-featured admin dashboard for e-commerce businesses that provides real-time sales analytics, inventory tracking, and customer management. The dashboard includes customizable widgets, dark mode support, and responsive design for all devices. Implemented advanced filtering and search functionality for products and orders.",
    challenge: "The main challenge was to create a unified interface that could handle large amounts of data and present it in an intuitive way while ensuring quick loading times and smooth interactions.",
    solution: "I implemented data virtualization techniques to handle large datasets, used efficient state management patterns with Redux, and created reusable chart components with optimized rendering cycles.",
    features: [
      "Real-time analytics dashboard with customizable widgets",
      "Comprehensive inventory management system",
      "Customer relationship management tools",
      "Advanced filtering and search capabilities",
      "Dark/light mode toggle",
      "Role-based permissions system",
      "Responsive design for all screen sizes"
    ],
    images: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    technologies: ["React", "Redux", "Tailwind CSS", "Chart.js"],
    category: "web",
    github: "https://github.com/username/ecommerce-dashboard",
    live: "https://ecommerce-dashboard.example.com",
    date: "January 2023",
    client: "Self-initiated project",
    role: "Frontend Developer"
  },
  {
    id: 2,
    title: "Social Media Application",
    description: "A full-stack social media platform with real-time messaging, post creation, image uploading, and user authentication.",
    longDescription: "Built a social media application that allows users to create profiles, share posts with images and videos, and communicate through a real-time messaging system. Implemented features like user following, notifications, post likes and comments, and a responsive feed algorithm. The application is fully responsive and includes dark mode support.",
    challenge: "Creating a performant real-time experience while handling complex user interactions and maintaining a clean, intuitive interface for various types of content.",
    solution: "Leveraged React's component architecture to create modular UI elements, implemented efficient real-time updates with Socket.io, and used advanced CSS techniques for responsive layouts.",
    features: [
      "User authentication and profile management",
      "Real-time messaging with typing indicators",
      "News feed with algorithmic sorting",
      "Post creation with image uploads",
      "Comments and reactions system",
      "User following and notification system",
      "Dark mode support"
    ],
    images: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    technologies: ["React", "Redux", "Tailwind CSS", "Socket.io"],
    category: "web",
    github: "https://github.com/username/social-media-app",
    live: "https://social-app.example.com",
    date: "June 2023",
    client: "Self-initiated project",
    role: "Frontend Developer"
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: "A weather application that provides detailed forecasts with interactive maps, location-based services, and historical data.",
    longDescription: "Created a weather application that provides current conditions, hourly forecasts, and 7-day predictions for any location worldwide. The app features interactive maps for visualizing weather patterns, location-based services for automatic detection, and historical weather data comparisons. Users can save favorite locations and receive alerts for severe weather conditions.",
    challenge: "Creating an intuitive interface that could present complex weather data in a user-friendly way while handling location services and API integrations seamlessly.",
    solution: "Used React context for state management, implemented efficient API caching strategies, and designed a component system that allows different visualization options for weather data.",
    features: [
      "Current conditions and detailed forecasts",
      "Interactive weather maps",
      "Location-based services",
      "Favorite locations saving",
      "Historical weather data",
      "Weather alerts and notifications",
      "Responsive design for all devices"
    ],
    images: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    technologies: ["React", "Tailwind CSS", "Leaflet", "Context API"],
    category: "mobile",
    github: "https://github.com/username/weather-app",
    live: "https://weather-app.example.com",
    date: "October 2023",
    client: "Self-initiated project",
    role: "Frontend Developer"
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [nextProject, setNextProject] = useState(null);
  const [prevProject, setPrevProject] = useState(null);

  useEffect(() => {
    // Simulate fetching project data
    const fetchProjectData = () => {
      setLoading(true);
      
      // Find project by ID
      const projectId = parseInt(id);
      const foundProject = projectsData.find(p => p.id === projectId);
      setProject(foundProject);
      
      // Find next and previous projects for navigation
      const currentIndex = projectsData.findIndex(p => p.id === projectId);
      if (currentIndex > 0) {
        setPrevProject(projectsData[currentIndex - 1]);
      } else {
        setPrevProject(null);
      }
      
      if (currentIndex < projectsData.length - 1) {
        setNextProject(projectsData[currentIndex + 1]);
      } else {
        setNextProject(null);
      }
      
      setLoading(false);
    };

    fetchProjectData();
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Project Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/" 
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft size={18} />
          Return to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Navigation back */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>
        
        {/* Project header */}
        <div className="mb-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.title}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.description}
          </motion.p>
        </div>
        
        {/* Project image gallery */}
        <motion.div 
          className="mb-12 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-xl shadow-xl bg-white dark:bg-gray-800 p-2">
            <img 
              src={project.images[currentImageIndex]} 
              alt={`${project.title} screenshot`}
              className="w-full h-auto rounded-lg"
            />
            
            {/* Image navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentImageIndex === index 
                      ? 'bg-blue-600' 
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Project details grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {/* Main content */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 mb-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Project Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.longDescription}
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">The Challenge</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">The Solution</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
            
            {/* Features */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Key Features</h2>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mt-1 mr-3 text-blue-500">
                      <Code size={18} />
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {/* Project metadata */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Project Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="p-2 mr-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <Calendar size={18} />
                  </span>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Completion Date</p>
                    <p className="font-medium text-gray-900 dark:text-white">{project.date}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="p-2 mr-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <Users size={18} />
                  </span>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                    <p className="font-medium text-gray-900 dark:text-white">{project.client}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="p-2 mr-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <Code size={18} />
                  </span>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Role</p>
                    <p className="font-medium text-gray-900 dark:text-white">{project.role}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="p-2 mr-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <Layers size={18} />
                  </span>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Technologies */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Project links */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Project Links</h3>
              <div className="space-y-3">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Anchor size={20} className="text-gray-700 dark:text-gray-300" />
                    <span className="font-medium text-gray-800 dark:text-gray-200">View Source Code</span>
                  </a>
                )}
                
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span className="font-medium">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Project navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-200 dark:border-gray-800 pt-10">
          {prevProject ? (
            <Link 
              to={`/projects/${prevProject.id}`} 
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <ArrowLeft size={18} className="text-gray-600 dark:text-gray-300" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Previous Project</p>
                <p className="font-medium text-gray-900 dark:text-white">{prevProject.title}</p>
              </div>
            </Link>
          ) : (
            <div></div> // Empty div to maintain flex layout
          )}
          
          {nextProject && (
            <Link 
              to={`/projects/${nextProject.id}`} 
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">Next Project</p>
                <p className="font-medium text-gray-900 dark:text-white">{nextProject.title}</p>
              </div>
              <ArrowRight size={18} className="text-gray-600 dark:text-gray-300" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
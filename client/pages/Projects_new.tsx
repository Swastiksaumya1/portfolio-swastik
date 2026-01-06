import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FolderOpen,
  ExternalLink,
  Code,
  Palette,
  Database,
  Globe,
  ArrowLeft,
  Star,
  Calendar,
  Users,
  X,
  CheckCircle,
  Clock,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa";

// Project type definition
type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  features: string[];
  github: string;
  demo: string;
  image: string;
  status: string;
  difficulty: string;
  duration: string;
  team: string;
  highlights: string[];
};

// Detailed Project View Component
const ProjectDetailView = ({ 
  project, 
  onClose, 
  getStatusColor, 
  getDifficultyColor 
}: { 
  project: Project;
  onClose: () => void;
  getStatusColor: (status: string) => string;
  getDifficultyColor: (difficulty: string) => string;
}) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed */}
        <div className="flex-shrink-0 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <div className="flex items-center space-x-3 mt-2">
              <Badge className={getStatusColor(project.status)}>
                <CheckCircle className="w-3 h-3 mr-1" />
                {project.status}
              </Badge>
              <Badge className={getDifficultyColor(project.difficulty)}>
                {project.difficulty}
              </Badge>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Project Image */}
          <div className="relative h-64 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Code className="w-20 h-20 text-white opacity-50" />
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              About This Project
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Project Info Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Duration</p>
                <p className="font-medium text-slate-900 dark:text-white">{project.duration}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Team</p>
                <p className="font-medium text-slate-900 dark:text-white">{project.team}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Status</p>
                <p className="font-medium text-slate-900 dark:text-white">{project.status}</p>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <Badge
                  key={`${project.id}-detail-tech-${tech}`}
                  variant="outline"
                  className="px-3 py-1 text-sm dark:border-slate-600 dark:text-slate-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Key Features
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={`${project.id}-feature-${index}-${feature.slice(0, 20)}`}
                  className="flex items-start space-x-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Project Highlights
            </h3>
            <div className="space-y-3">
              {project.highlights.map((highlight, index) => (
                <div
                  key={`${project.id}-detail-highlight-${index}-${highlight.slice(0, 20)}`}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-600 dark:text-slate-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons - Fixed */}
        <div className="flex-shrink-0 border-t border-slate-200 dark:border-slate-700 p-6">
          <div className="flex space-x-4">
            <Button
              className="flex items-center space-x-2 flex-1"
              disabled={project.github === "#"}
              onClick={() => window.open(project.github, '_blank')}
            >
              <FaGithub className="w-4 h-4" />
              <span>View Code</span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center space-x-2 flex-1"
              disabled={project.demo === "#"}
              onClick={() => window.open(project.demo, '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center space-x-2"
              onClick={onClose}
            >
              <Eye className="w-4 h-4" />
              <span>Back to Projects</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Page transition animation
  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -20 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  // Project categories
  const categories = [
    {
      id: "all",
      name: "All Projects",
      icon: <FolderOpen className="w-4 h-4" />,
    },
    { id: "web", name: "Web Development", icon: <Globe className="w-4 h-4" /> },
    { id: "ai", name: "AI/ML", icon: <Database className="w-4 h-4" /> },
    { id: "ui", name: "UI/UX", icon: <Palette className="w-4 h-4" /> },
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: "E-commerce Furniture Website",
      description:
        "Modern furniture e-commerce platform with responsive design, comprehensive product catalog, shopping cart functionality, and admin panel for inventory management.",
      longDescription:
        "A comprehensive e-commerce website designed specifically for furniture retail, featuring an intuitive product browsing experience, detailed product galleries, and seamless shopping cart functionality. Built with modern web technologies to provide excellent user experience across all devices, including advanced filtering, product comparison, and wishlist features.",
      category: "web",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "PHP",
        "MySQL",
      ],
      features: [
        "Responsive furniture catalog with advanced filtering",
        "Interactive product galleries with zoom functionality",
        "Shopping cart and wishlist management",
        "User account management and order tracking",
        "Admin panel for inventory management",
        "Secure payment gateway integration",
      ],
      github: "https://github.com/swastiksaumya",
      demo: "#",
      image: "/api/placeholder/600/400",
      status: "Completed",
      difficulty: "Intermediate",
      duration: "3 months",
      team: "Solo Project",
      highlights: [
        "Built comprehensive e-commerce platform",
        "Implemented secure payment processing",
        "Created responsive design for all devices",
      ],
    },
    {
      id: 2,
      title: "Self-Driving Car Simulation",
      description:
        "Advanced autonomous vehicle simulation with machine learning, computer vision, lane detection, obstacle avoidance, and path planning algorithms.",
      longDescription:
        "An innovative self-driving car project that combines computer vision, machine learning, and robotics to create an autonomous vehicle capable of real-time decision making. The system includes lane detection, obstacle avoidance, traffic sign recognition, and path planning algorithms, showcasing the integration of AI technologies in automotive applications.",
      category: "ai",
      technologies: [
        "Python",
        "OpenCV",
        "TensorFlow",
        "Computer Vision",
        "Machine Learning",
        "NumPy",
      ],
      features: [
        "Real-time lane detection using computer vision",
        "Traffic sign recognition with deep learning",
        "Obstacle detection and avoidance system",
        "Autonomous path planning and navigation",
        "Speed control based on road conditions",
        "Simulation environment for testing",
      ],
      github: "https://github.com/swastiksaumya",
      demo: "#",
      image: "/api/placeholder/600/400",
      status: "Completed",
      difficulty: "Advanced",
      duration: "4 months",
      team: "Solo Project",
      highlights: [
        "Implemented real-time computer vision systems",
        "Integrated multiple AI technologies",
        "Built comprehensive autonomous driving simulation",
      ],
    },
    {
      id: 3,
      title: "Weather Vue Application",
      description:
        "Dynamic weather application built with Vue.js featuring real-time forecasts, geolocation services, 7-day predictions, and beautiful weather animations.",
      longDescription:
        "A sophisticated weather application developed using Vue.js that provides comprehensive weather information including current conditions, hourly forecasts, and extended 7-day predictions. The app features geolocation services, beautiful weather animations, and responsive design optimized for both desktop and mobile devices.",
      category: "web",
      technologies: [
        "Vue.js",
        "JavaScript",
        "CSS3",
        "Weather API",
        "Geolocation",
        "HTML5",
      ],
      features: [
        "Real-time weather data with hourly updates",
        "7-day extended weather forecast",
        "Automatic location detection and manual search",
        "Interactive weather maps and radar",
        "Beautiful weather-based animations",
        "Responsive design for all device sizes",
      ],
      github: "https://github.com/swastiksaumya",
      demo: "https://weather-vue-app.netlify.app",
      image: "/api/placeholder/600/400",
      status: "Completed",
      difficulty: "Intermediate",
      duration: "2 months",
      team: "Solo Project",
      highlights: [
        "Built with Vue.js framework",
        "Integrated real-time weather APIs",
        "Created beautiful responsive interface",
      ],
    },
    {
      id: 4,
      title: "Netflix Clone",
      description:
        "Full-featured Netflix replica with video streaming, user authentication, movie browsing with categories, search functionality, and responsive design.",
      longDescription:
        "A comprehensive Netflix clone that replicates the core functionality of the popular streaming platform. Features include user authentication, movie browsing with categories, video playback, personalized recommendations, and a responsive interface that matches Netflix's modern design aesthetic. Built with modern web technologies to ensure smooth streaming experience.",
      category: "web",
      technologies: [
        "React",
        "JavaScript",
        "CSS3",
        "Movie API",
        "Authentication",
        "HTML5",
      ],
      features: [
        "User authentication and profile management",
        "Movie browsing with category-based filtering",
        "Video streaming with custom player controls",
        "Search functionality across movie database",
        "Responsive design matching Netflix's UI",
        "Personalized movie recommendations",
      ],
      github: "https://github.com/swastiksaumya",
      demo: "https://netflix-clone-swastik.netlify.app",
      image: "/api/placeholder/600/400",
      status: "Completed",
      difficulty: "Intermediate",
      duration: "3 months",
      team: "Solo Project",
      highlights: [
        "Replicated Netflix's user interface",
        "Implemented video streaming functionality",
        "Built responsive React application",
      ],
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description:
        "Comprehensive analytics dashboard for social media management with real-time metrics, interactive charts, audience insights, and customizable widgets.",
      longDescription:
        "An advanced social media analytics dashboard that provides comprehensive insights into social media performance across multiple platforms. The dashboard features real-time analytics, engagement metrics, audience demographics, and content performance tracking, designed to help businesses and content creators optimize their social media strategy.",
      category: "web",
      technologies: [
        "React",
        "TypeScript",
        "Chart.js",
        "Tailwind CSS",
        "Social Media APIs",
        "Analytics",
      ],
      features: [
        "Multi-platform social media analytics integration",
        "Interactive charts and data visualizations",
        "Real-time engagement and performance metrics",
        "Audience demographics and insights",
        "Content performance tracking and trends",
        "Customizable dashboard widgets and layouts",
      ],
      github: "https://github.com/swastiksaumya",
      demo: "#",
      image: "/api/placeholder/600/400",
      status: "Completed",
      difficulty: "Intermediate",
      duration: "2.5 months",
      team: "Solo Project",
      highlights: [
        "Built with React and TypeScript",
        "Integrated multiple social media APIs",
        "Created interactive data visualizations",
      ],
    },
  ];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300";
      case "In Progress":
        return "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300";
      default:
        return "bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  // Get difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300";
      case "Intermediate":
        return "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300";
      case "Advanced":
        return "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-white dark:bg-slate-900"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link to="/">
              <Button
                variant="ghost"
                className="mb-6 text-slate-600 dark:text-slate-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>

            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
              <FolderOpen className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A collection of projects showcasing my journey in web development,
              AI/ML, and design. Each project represents learning, growth, and
              practical application of modern technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? "bg-purple-500 hover:bg-purple-600"
                    : ""
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            layout
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card 
                  className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 dark:bg-slate-800 border-none overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image/Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-500 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code className="w-16 h-16 text-white opacity-50" />
                    </div>
                    {/* Status badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                      <Badge className={getDifficultyColor(project.difficulty)}>
                        {project.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                    <CardDescription className="text-slate-600 dark:text-slate-300 line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies
                        .slice(0, 4)
                        .map((tech) => (
                          <Badge
                            key={`${project.id}-tech-${tech}`}
                            variant="outline"
                            className="text-xs dark:border-slate-600 dark:text-slate-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      {project.technologies.length > 4 && (
                        <Badge
                          variant="outline"
                          className="text-xs dark:border-slate-600 dark:text-slate-400"
                        >
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="grid grid-cols-2 gap-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{project.team}</span>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                        Key Highlights:
                      </h4>
                      <ul className="space-y-1">
                        {project.highlights
                          .slice(0, 2)
                          .map((highlight, index) => (
                            <li
                              key={`${project.id}-highlight-${index}-${highlight.slice(0, 20)}`}
                              className="text-xs text-slate-600 dark:text-slate-300 flex items-start space-x-2"
                            >
                              <div className="w-1 h-1 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center space-x-2 flex-1 dark:border-slate-600"
                        disabled={project.github === "#"}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                      >
                        <FaGithub className="w-4 h-4" />
                        <span>Code</span>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-purple-500 hover:bg-purple-600 flex items-center space-x-2 flex-1"
                        disabled={project.demo === "#"}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demo, '_blank');
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <FolderOpen className="w-16 h-16 mx-auto text-slate-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-300 mb-2">
                No projects found
              </h3>
              <p className="text-slate-500 dark:text-slate-400">
                Try selecting a different category to see more projects.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Let's Build Something Together
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              I'm always excited to work on new projects and collaborate with
              fellow developers. Have an idea? Let's discuss how we can bring it
              to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button size="lg" className="bg-purple-500 hover:bg-purple-600">
                  Get In Touch
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                View Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailView 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)}
          getStatusColor={getStatusColor}
          getDifficultyColor={getDifficultyColor}
        />
      )}
    </motion.div>
  );
}

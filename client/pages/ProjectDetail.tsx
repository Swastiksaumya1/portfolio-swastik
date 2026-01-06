import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Calendar,
  Users,
  Clock,
  CheckCircle,
  ExternalLink,
  Code,
  Star,
  Github,
  Globe,
  Database,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

// Projects data (same as Projects.tsx)
const projects: Project[] = [
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

// Get category icon
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "web":
      return <Globe className="w-4 h-4" />;
    case "ai":
      return <Database className="w-4 h-4" />;
    case "ui":
      return <Palette className="w-4 h-4" />;
    default:
      return <Code className="w-4 h-4" />;
  }
};

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

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (id) {
      const foundProject = projects.find(p => p.id === parseInt(id));
      if (foundProject) {
        setProject(foundProject);
        
        // Get related projects (same category, excluding current project)
        const related = projects
          .filter(p => p.category === foundProject.category && p.id !== foundProject.id)
          .slice(0, 3);
        setRelatedProjects(related);
      } else {
        navigate('/projects');
      }
    }
  }, [id, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300">Loading project...</p>
        </div>
      </div>
    );
  }

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
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
      {/* Header */}
      <section className="py-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-6">
          <Link to="/projects">
            <Button
              variant="ghost"
              className="mb-6 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              {getCategoryIcon(project.category)}
              <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">
                {project.category} Development
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {project.title}
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <Badge className={getStatusColor(project.status)}>
                <CheckCircle className="w-3 h-3 mr-1" />
                {project.status}
              </Badge>
              <Badge className={getDifficultyColor(project.difficulty)}>
                {project.difficulty}
              </Badge>
              <Badge variant="outline" className="dark:border-slate-600 dark:text-slate-300">
                <Calendar className="w-3 h-3 mr-1" />
                {project.duration}
              </Badge>
              <Badge variant="outline" className="dark:border-slate-600 dark:text-slate-300">
                <Users className="w-3 h-3 mr-1" />
                {project.team}
              </Badge>
            </div>

            <div className="flex space-x-4">
              <Button
                className="bg-purple-500 hover:bg-purple-600"
                disabled={project.github === "#"}
                onClick={() => window.open(project.github, '_blank')}
              >
                <FaGithub className="w-4 h-4 mr-2" />
                View Code
              </Button>
              <Button
                variant="outline"
                disabled={project.demo === "#"}
                onClick={() => window.open(project.demo, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Project Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-24 h-24 text-white opacity-50" />
                </div>
              </motion.div>

              {/* About Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  About This Project
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  {project.longDescription}
                </p>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={`feature-${index}`}
                      className="flex items-start space-x-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Project Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Project Highlights
                </h2>
                <div className="space-y-4">
                  {project.highlights.map((highlight, index) => (
                    <div
                      key={`highlight-${index}`}
                      className="flex items-start space-x-3 p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-slate-800 rounded-r-lg"
                    >
                      <Star className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <Card className="dark:bg-slate-800 border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-slate-900 dark:text-white">
                      Project Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-purple-500" />
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
                      <CheckCircle className="w-5 h-5 text-purple-500" />
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Status</p>
                        <p className="font-medium text-slate-900 dark:text-white">{project.status}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="dark:bg-slate-800 border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-slate-900 dark:text-white">
                      Technologies Used
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={`tech-${tech}`}
                          variant="outline"
                          className="dark:border-slate-600 dark:text-slate-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                Related Projects
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedProjects.map((relatedProject, index) => (
                  <motion.div
                    key={relatedProject.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  >
                    <Card 
                      className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 dark:bg-slate-800 border-none overflow-hidden group cursor-pointer"
                      onClick={() => navigate(`/projects/${relatedProject.id}`)}
                    >
                      <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-500 overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Code className="w-16 h-16 text-white opacity-50" />
                        </div>
                        <div className="absolute top-4 left-4">
                          <Badge className={getStatusColor(relatedProject.status)}>
                            {relatedProject.status}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader className="pb-3">
                        <CardTitle className="text-xl text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {relatedProject.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                          {relatedProject.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {relatedProject.technologies.slice(0, 3).map((tech) => (
                            <Badge
                              key={`related-${relatedProject.id}-${tech}`}
                              variant="outline"
                              className="text-xs dark:border-slate-600 dark:text-slate-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {relatedProject.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-slate-400">
                              +{relatedProject.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </motion.div>
  );
}

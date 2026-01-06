import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ExternalLink, Users, Globe, Code, Palette } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: "web" | "mobile" | "design" | "fullstack";
  status: "completed" | "in-progress" | "planned";
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  duration: string;
  team: string;
  challenges: string[];
  features: string[];
  technologies: {
    frontend: string[];
    backend: string[];
    database: string[];
    deployment: string[];
  };
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Furniture Website",
    description: "Modern furniture e-commerce platform with responsive design and comprehensive product catalog",
    longDescription: "A comprehensive e-commerce website designed specifically for furniture retail, featuring an intuitive product browsing experience, detailed product galleries, and seamless shopping cart functionality. Built with modern web technologies to provide excellent user experience across all devices, including advanced filtering, product comparison, and wishlist features.",
    image: "/placeholder.svg",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    category: "fullstack",
    status: "completed",
    githubUrl: "https://github.com/swastiksaumya",
    date: "2024",
    duration: "3 months",
    team: "Solo project",
    challenges: [
      "Creating responsive layouts for diverse furniture product displays",
      "Implementing efficient product filtering and search functionality",
      "Optimizing image loading for furniture galleries",
      "Building secure payment and checkout system"
    ],
    features: [
      "Responsive furniture catalog with advanced filtering",
      "Interactive product galleries with zoom functionality",
      "Shopping cart and wishlist management",
      "User account management and order tracking",
      "Admin panel for inventory management",
      "Secure payment gateway integration"
    ],
    technologies: {
      frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
      backend: ["PHP", "MySQL"],
      database: ["MySQL"],
      deployment: ["Apache", "cPanel"]
    }
  },
  {
    id: "2",
    title: "Self-Driving Car Simulation",
    description: "Advanced autonomous vehicle simulation with machine learning and computer vision",
    longDescription: "An innovative self-driving car project that combines computer vision, machine learning, and robotics to create an autonomous vehicle capable of real-time decision making. The system includes lane detection, obstacle avoidance, traffic sign recognition, and path planning algorithms, showcasing the integration of AI technologies in automotive applications.",
    image: "/placeholder.svg",
    tags: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "Machine Learning", "Robotics"],
    category: "web",
    status: "completed",
    githubUrl: "https://github.com/swastiksaumya",
    date: "2024",
    duration: "4 months",
    team: "Solo project",
    challenges: [
      "Implementing real-time computer vision for lane detection",
      "Training machine learning models for object recognition",
      "Developing robust path planning algorithms",
      "Integrating multiple AI systems for autonomous decision making"
    ],
    features: [
      "Real-time lane detection using computer vision",
      "Traffic sign recognition with deep learning",
      "Obstacle detection and avoidance system",
      "Autonomous path planning and navigation",
      "Speed control based on road conditions",
      "Simulation environment for testing"
    ],
    technologies: {
      frontend: ["Python", "OpenCV", "Matplotlib"],
      backend: ["TensorFlow", "NumPy", "Pandas"],
      database: ["Dataset Management"],
      deployment: ["Local Simulation", "Jupyter Notebooks"]
    }
  },
  {
    id: "3",
    title: "Weather Vue Application",
    description: "Dynamic weather application built with Vue.js featuring real-time forecasts and location services",
    longDescription: "A sophisticated weather application developed using Vue.js that provides comprehensive weather information including current conditions, hourly forecasts, and extended 7-day predictions. The app features geolocation services, beautiful weather animations, and responsive design optimized for both desktop and mobile devices.",
    image: "/placeholder.svg",
    tags: ["Vue.js", "JavaScript", "CSS3", "Weather API", "Geolocation", "Responsive Design"],
    category: "web",
    status: "completed",
    githubUrl: "https://github.com/swastiksaumya",
    liveUrl: "https://weather-vue-app.netlify.app",
    date: "2024",
    duration: "2 months",
    team: "Solo project",
    challenges: [
      "Integrating multiple weather APIs for comprehensive data",
      "Creating smooth animations for weather transitions",
      "Implementing accurate geolocation services",
      "Optimizing performance for real-time data updates"
    ],
    features: [
      "Real-time weather data with hourly updates",
      "7-day extended weather forecast",
      "Automatic location detection and manual search",
      "Interactive weather maps and radar",
      "Beautiful weather-based animations",
      "Responsive design for all device sizes"
    ],
    technologies: {
      frontend: ["Vue.js", "JavaScript", "CSS3", "HTML5"],
      backend: ["Weather API", "Geolocation API"],
      database: ["Local Storage"],
      deployment: ["Netlify", "GitHub Pages"]
    }
  },
  {
    id: "4",
    title: "Netflix Clone",
    description: "Full-featured Netflix replica with video streaming and user management",
    longDescription: "A comprehensive Netflix clone that replicates the core functionality of the popular streaming platform. Features include user authentication, movie browsing with categories, video playback, personalized recommendations, and a responsive interface that matches Netflix's modern design aesthetic. Built with modern web technologies to ensure smooth streaming experience.",
    image: "/placeholder.svg",
    tags: ["React", "JavaScript", "CSS3", "Movie API", "Video Streaming", "Authentication"],
    category: "web",
    status: "completed",
    githubUrl: "https://github.com/swastiksaumya",
    liveUrl: "https://netflix-clone-swastik.netlify.app",
    date: "2024",
    duration: "3 months",
    team: "Solo project",
    challenges: [
      "Implementing smooth video streaming functionality",
      "Creating responsive grid layouts for movie browsing",
      "Building user authentication and profile management",
      "Optimizing performance for large media catalogs"
    ],
    features: [
      "User authentication and profile management",
      "Movie browsing with category-based filtering",
      "Video streaming with custom player controls",
      "Search functionality across movie database",
      "Responsive design matching Netflix's UI",
      "Personalized movie recommendations"
    ],
    technologies: {
      frontend: ["React", "JavaScript", "CSS3", "HTML5"],
      backend: ["Movie Database API", "Authentication Service"],
      database: ["Local Storage", "API Integration"],
      deployment: ["Netlify", "GitHub Pages"]
    }
  },
  {
    id: "5",
    title: "Social Media Dashboard",
    description: "Comprehensive analytics dashboard for social media management and insights",
    longDescription: "An advanced social media analytics dashboard that provides comprehensive insights into social media performance across multiple platforms. The dashboard features real-time analytics, engagement metrics, audience demographics, and content performance tracking, designed to help businesses and content creators optimize their social media strategy.",
    image: "/placeholder.svg",
    tags: ["React", "TypeScript", "Chart.js", "Social Media APIs", "Analytics", "Dashboard"],
    category: "web",
    status: "completed",
    githubUrl: "https://github.com/swastiksaumya",
    date: "2024",
    duration: "2.5 months",
    team: "Solo project",
    challenges: [
      "Integrating multiple social media platform APIs",
      "Creating interactive and responsive data visualizations",
      "Implementing real-time data updates and notifications",
      "Building scalable dashboard architecture"
    ],
    features: [
      "Multi-platform social media analytics integration",
      "Interactive charts and data visualizations",
      "Real-time engagement and performance metrics",
      "Audience demographics and insights",
      "Content performance tracking and trends",
      "Customizable dashboard widgets and layouts"
    ],
    technologies: {
      frontend: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
      backend: ["Social Media APIs", "Data Processing"],
      database: ["Local Storage", "API Cache"],
      deployment: ["Vercel", "GitHub Pages"]
    }
  }
];

const categoryConfig = {
  all: { label: "All Projects", icon: Globe, count: projects.length },
  web: { label: "Web Apps", icon: Code, count: projects.filter(p => p.category === "web").length },
  fullstack: { label: "Full Stack", icon: Users, count: projects.filter(p => p.category === "fullstack").length },
  design: { label: "AI/ML", icon: Palette, count: projects.filter(p => p.category === "design").length }
};

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | Project["category"]>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getStatusBadgeClass = (status: Project["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-300";
      case "in-progress":
        return "bg-yellow-500/20 text-yellow-300";
      default:
        return "bg-blue-500/20 text-blue-300";
    }
  };

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <Badge variant="outline" className="glass-card">
              <Code className="w-3 h-3 mr-1" />
              Featured Work
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of innovative projects spanning e-commerce platforms, AI/ML applications, 
              and modern web development solutions. Each project demonstrates technical excellence 
              and creative problem-solving.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2">
            {Object.entries(categoryConfig).map(([key, config]) => {
              const Icon = config.icon;
              return (
                <Button
                  key={key}
                  variant={selectedCategory === key ? "default" : "outline"}
                  onClick={() => setSelectedCategory(key as any)}
                  className={`gap-2 ${selectedCategory === key ? "glass-button" : "glass-card hover:glass-card-hover"}`}
                >
                  <Icon className="w-4 h-4" />
                  {config.label}
                  <Badge variant="secondary" className="ml-1">
                    {config.count}
                  </Badge>
                </Button>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="glass-card border-primary/20 overflow-hidden h-full cursor-pointer">
                    <button 
                      className="relative overflow-hidden w-full text-left border-none bg-transparent p-0"
                      onClick={() => setSelectedProject(project)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedProject(project);
                        }
                      }}
                      aria-label={`View details for ${project.title}`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge 
                        className={`absolute top-3 right-3 ${getStatusBadgeClass(project.status)}`}
                      >
                        {project.status.replace("-", " ")}
                      </Badge>
                    </button>
                    
                    <CardHeader className="pb-3">
                      <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <Button size="sm" variant="outline" className="flex-1 gap-2">
                            <FaGithub className="w-3 h-3" />
                            Code
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button size="sm" variant="outline" className="flex-1 gap-2">
                            <ExternalLink className="w-3 h-3" />
                            Live
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Project Detail Modal */}
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            {selectedProject && (
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto glass-card">
                <DialogHeader>
                  <DialogTitle className="text-2xl gradient-text">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      {selectedProject.githubUrl && (
                        <Button className="flex-1 gap-2">
                          <FaGithub className="w-4 h-4" />
                          View Code
                        </Button>
                      )}
                      {selectedProject.liveUrl && (
                        <Button variant="outline" className="flex-1 gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">Project Overview</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Duration:</span>
                        <p className="text-muted-foreground">{selectedProject.duration}</p>
                      </div>
                      <div>
                        <span className="font-medium">Team:</span>
                        <p className="text-muted-foreground">{selectedProject.team}</p>
                      </div>
                    </div>
                    
                    <Tabs defaultValue="features" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="features">Features</TabsTrigger>
                        <TabsTrigger value="tech">Tech Stack</TabsTrigger>
                        <TabsTrigger value="challenges">Challenges</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="features" className="space-y-2">
                        {selectedProject.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </TabsContent>
                      
                      <TabsContent value="tech" className="space-y-4">
                        {Object.entries(selectedProject.technologies).map(([category, techs]) => (
                          <div key={category}>
                            <h4 className="font-medium capitalize mb-2">{category.replace(/([A-Z])/g, ' $1')}</h4>
                            <div className="flex flex-wrap gap-1">
                              {techs.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </TabsContent>
                      
                      <TabsContent value="challenges" className="space-y-2">
                        {selectedProject.challenges.map((challenge) => (
                          <div key={challenge} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{challenge}</span>
                          </div>
                        ))}
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </DialogContent>
            )}
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
}

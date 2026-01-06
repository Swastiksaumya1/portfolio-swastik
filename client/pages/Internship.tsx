import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  Clock,
  Users,
  Code,
  Globe,
  GitBranch,
  CheckCircle,
  Star,
  ArrowLeft,
  Building,
  Laptop,
  Target,
  TrendingUp,
  Award,
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

export default function Internship() {
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

  // Internship details
  const internshipDetails = {
    company: "WebBoost Solutions by UM",
    position: "Front-End Developer Intern",
    type: "Remote Internship",
    duration: "3 Months",
    period: "June 2023 - August 2023",
    location: "Remote",
    department: "Development Team",
    supervisor: "Senior Frontend Developer",
    teamSize: "5-8 developers",
  };

  // Key responsibilities
  const responsibilities = [
    {
      title: "Website Development & Modification",
      description:
        "Built and modified responsive websites using HTML, CSS, JavaScript, and React framework",
      icon: <Code className="w-5 h-5" />,
      tasks: [
        "Developed 3 complete landing pages from scratch",
        "Modified existing websites to improve user experience",
        "Implemented responsive design principles",
        "Optimized code for better performance",
      ],
    },
    {
      title: "UI/UX Enhancement",
      description:
        "Improved user interface and responsiveness across multiple projects",
      icon: <Globe className="w-5 h-5" />,
      tasks: [
        "Redesigned navigation components for better usability",
        "Implemented mobile-first design approach",
        "Enhanced visual hierarchy and content organization",
        "Conducted usability testing and made improvements",
      ],
    },
    {
      title: "Team Collaboration",
      description:
        "Collaborated with remote team members using modern development tools",
      icon: <Users className="w-5 h-5" />,
      tasks: [
        "Participated in daily standup meetings",
        "Used Git for version control and collaborative development",
        "Reviewed code and provided constructive feedback",
        "Communicated effectively with team members across time zones",
      ],
    },
    {
      title: "Learning & Development",
      description: "Continuously learned new technologies and best practices",
      icon: <TrendingUp className="w-5 h-5" />,
      tasks: [
        "Learned React framework fundamentals",
        "Mastered modern CSS techniques and Flexbox/Grid",
        "Understood responsive design principles",
        "Practiced clean code and documentation standards",
      ],
    },
  ];

  // Technologies used
  const technologies = [
    { name: "HTML5", level: 90, color: "bg-orange-400" },
    { name: "CSS3", level: 85, color: "bg-blue-400" },
    { name: "JavaScript", level: 80, color: "bg-yellow-400" },
    { name: "React", level: 75, color: "bg-cyan-400" },
    { name: "Git", level: 80, color: "bg-red-400" },
    { name: "Responsive Design", level: 90, color: "bg-green-400" },
  ];

  // Projects completed
  const projects = [
    {
      title: "E-commerce Landing Page",
      description:
        "Developed a modern, responsive landing page for an e-commerce client with focus on conversion optimization",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "Mobile-first responsive design",
        "Interactive product showcase",
        "Contact form with validation",
        "Performance optimized images",
      ],
      impact: "Improved conversion rate by 25%",
    },
    {
      title: "Business Portfolio Website",
      description:
        "Created a professional portfolio website for a consulting business with clean design and smooth animations",
      technologies: ["React", "CSS3", "JavaScript"],
      features: [
        "React component architecture",
        "Smooth scroll animations",
        "Contact form integration",
        "SEO optimization",
      ],
      impact: "Enhanced brand presence and client inquiries",
    },
    {
      title: "Restaurant Website Redesign",
      description:
        "Redesigned an existing restaurant website to improve user experience and mobile responsiveness",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: [
        "Menu display with filtering",
        "Online reservation system",
        "Location and hours information",
        "Social media integration",
      ],
      impact: "Increased mobile engagement by 40%",
    },
  ];

  // Skills developed
  const skillsDeveloped = [
    "Frontend Development",
    "Responsive Web Design",
    "React Framework",
    "Version Control (Git)",
    "Team Collaboration",
    "Code Review",
    "Problem Solving",
    "Time Management",
    "Communication",
    "Agile Methodology",
  ];

  // Achievements and learnings
  const achievements = [
    {
      title: "Successful Project Delivery",
      description: "Completed all assigned projects within deadlines",
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    },
    {
      title: "Team Recognition",
      description: "Received positive feedback from team lead and peers",
      icon: <Star className="w-5 h-5 text-yellow-500" />,
    },
    {
      title: "Technical Growth",
      description: "Significantly improved React and JavaScript skills",
      icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "Professional Development",
      description: "Learned industry best practices and workflows",
      icon: <Award className="w-5 h-5 text-purple-500" />,
    },
  ];

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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900">
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

            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Briefcase className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Internship Experience
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              My journey as a Front-End Developer Intern at WebBoost Solutions,
              where I gained hands-on experience with real-world projects and
              modern development practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-none dark:bg-slate-800">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                      {internshipDetails.company}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      WebBoost Solutions is a dynamic web development company
                      focused on creating modern, responsive websites and web
                      applications for businesses of all sizes. During my
                      internship, I worked closely with their development team
                      on various client projects.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Building className="w-5 h-5 text-blue-500" />
                        <div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Position
                          </p>
                          <p className="font-medium text-slate-900 dark:text-white">
                            {internshipDetails.position}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-green-500" />
                        <div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Duration
                          </p>
                          <p className="font-medium text-slate-900 dark:text-white">
                            {internshipDetails.duration}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-purple-500" />
                        <div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Period
                          </p>
                          <p className="font-medium text-slate-900 dark:text-white">
                            {internshipDetails.period}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Laptop className="w-5 h-5 text-orange-500" />
                        <div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Type
                          </p>
                          <p className="font-medium text-slate-900 dark:text-white">
                            {internshipDetails.type}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-800 rounded-xl">
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                        Key Metrics
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-300">
                            Projects Completed
                          </span>
                          <span className="font-semibold text-slate-900 dark:text-white">
                            6+
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-300">
                            Team Size
                          </span>
                          <span className="font-semibold text-slate-900 dark:text-white">
                            5-8 members
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-300">
                            Technologies Used
                          </span>
                          <span className="font-semibold text-slate-900 dark:text-white">
                            6+
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-300">
                            Code Reviews
                          </span>
                          <span className="font-semibold text-slate-900 dark:text-white">
                            20+
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Key Responsibilities
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {responsibilities.map((responsibility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-700 border-none">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                        {responsibility.icon}
                      </div>
                      <CardTitle className="text-lg text-slate-900 dark:text-white">
                        {responsibility.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-slate-600 dark:text-slate-300">
                      {responsibility.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {responsibility.tasks.map((task, taskIndex) => (
                        <li
                          key={taskIndex}
                          className="flex items-start space-x-2 text-sm text-slate-600 dark:text-slate-300"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Skills */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Technologies & Skills
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg dark:bg-slate-800 border-none">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 dark:text-white flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    Technical Proficiency
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {technologies.map((tech, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {tech.name}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {tech.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                        <motion.div
                          className={`${tech.color} h-2 rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills Developed */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg dark:bg-slate-800 border-none">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 dark:text-white flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Skills Developed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skillsDeveloped.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="outline"
                          className="px-3 py-1 dark:border-slate-600 dark:text-slate-300"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="shadow-lg dark:bg-slate-800 border-none mt-8">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 dark:text-white flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Key Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      {achievement.icon}
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          {achievement.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Projects Completed
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              During my internship, I worked on various real-world projects that
              helped me apply my skills and learn new technologies.
            </p>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-700 border-none">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                          {project.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-6">
                          {project.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                            Key Features:
                          </h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-start space-x-2 text-sm text-slate-600 dark:text-slate-300"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="w-full p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl">
                          <div className="text-center">
                            <TrendingUp className="w-12 h-12 mx-auto mb-3 text-green-500" />
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                              Impact
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300">
                              {project.impact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Key Takeaways
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              This internship was a transformative experience that bridged the
              gap between academic learning and real-world application. I gained
              invaluable hands-on experience with modern web technologies,
              learned industry best practices, and developed both technical and
              soft skills that continue to guide my development journey.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-800 border-none">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Technical Growth
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Significantly improved frontend development skills and
                    learned industry-standard practices
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-800 border-none">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Professional Development
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Enhanced communication skills and learned effective team
                    collaboration in remote environment
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

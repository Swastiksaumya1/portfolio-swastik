import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Users,
  Target,
  TrendingUp,
  ArrowLeft,
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

export default function Education() {
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

  // Education data
  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "IMS Unison University",
      location: "Ghaziabad, UP, India",
      period: "2023 - 2026",
      status: "Pursuing",
      grade: "Current CGPA: 8.5/10",
      description:
        "Pursuing Bachelor of Computer Applications at IMS Unison University with a specialization in software development, artificial intelligence, and modern web technologies. The comprehensive curriculum includes advanced programming concepts, database management, and emerging technologies with hands-on project experience.",
      subjects: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Web Development Technologies",
        "Software Engineering",
        "Artificial Intelligence & Machine Learning",
        "Computer Networks",
        "Operating Systems",
        "Python Programming",
        "Java Programming"
      ],
      projects: [
        "E-commerce Furniture Website using HTML/CSS/JS/PHP",
        "Self-Driving Car Simulation using Python & AI",
        "Weather Application using Vue.js",
        "Netflix Clone using React",
        "Social Media Dashboard using React & TypeScript"
      ],
      achievements: [
        "Consistently maintained CGPA above 8.0",
        "Active participant in university tech events",
        "Completed multiple real-world projects",
        "Strong focus on AI & Machine Learning applications"
      ],
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Central Academy",
      location: "Bihar, India",
      period: "2021 - 2023",
      status: "Completed",
      grade: "Percentage: 82%",
      description:
        "Completed higher secondary education in Science stream with Mathematics, Physics, and Chemistry. Developed strong analytical thinking and problem-solving skills that form the foundation for computer science studies.",
      subjects: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "English",
        "Computer Science"
      ],
      projects: [
        "Physics Lab Experiments & Documentation",
        "Computer Science Programming Projects",
        "Mathematics Problem Solving Portfolio"
      ],
      achievements: [
        "Secured 82% in board examinations",
        "School Science Exhibition Winner",
        "Computer Science Topper in final year",
        "Active member of Science Club"
      ],
    },
  ];

  // Skills gained through education
  const skillsGained = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "C/C++", "PHP", "HTML/CSS"],
    },
    {
      category: "Web Technologies",
      skills: ["React", "Vue.js", "TypeScript", "Node.js", "Bootstrap", "Tailwind CSS"],
    },
    {
      category: "Database & Tools",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Git/GitHub", "VS Code", "Docker"],
    },
    {
      category: "AI/ML & Emerging Tech",
      skills: ["Machine Learning", "Computer Vision", "Deep Learning", "TensorFlow", "OpenCV"],
    },
    {
      category: "Core Computer Science",
      skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
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

            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              My Educational Journey
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From Science stream to Computer Applications, exploring the
              fascinating world of technology and software development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Education Timeline
            </h2>
            <div className="w-20 h-1 bg-sky-400 mx-auto"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-sky-400 transform md:-translate-x-0.5"></div>

            {educationData.map((education, index) => (
              <motion.div
                key={education.degree}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-start mb-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-sky-400 rounded-full border-4 border-white dark:border-slate-900 transform md:-translate-x-1/2"></div>

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 dark:bg-slate-800 border-none">
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge
                          className={`${
                            education.status === "Pursuing"
                              ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                              : "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                          }`}
                        >
                          {education.status}
                        </Badge>
                        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          {education.period}
                        </div>
                      </div>
                      <CardTitle className="text-xl text-slate-900 dark:text-white">
                        {education.degree}
                      </CardTitle>
                      <CardDescription className="flex items-center text-slate-600 dark:text-slate-300">
                        <MapPin className="w-4 h-4 mr-2" />
                        {education.institution}, {education.location}
                      </CardDescription>
                      <div className="text-sm font-medium text-sky-600 dark:text-sky-400">
                        {education.grade}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {education.description}
                      </p>

                      {/* Subjects */}
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Key Subjects
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {education.subjects.map((subject) => (
                            <Badge
                              key={subject}
                              variant="outline"
                              className="text-xs dark:border-slate-600 dark:text-slate-300"
                            >
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Projects */}
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                          <Target className="w-4 h-4 mr-2" />
                          Notable Projects
                        </h4>
                        <ul className="space-y-2">
                          {education.projects.map((project) => (
                            <li
                              key={project}
                              className="flex items-start space-x-2 text-sm text-slate-600 dark:text-slate-300"
                            >
                              <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          Achievements
                        </h4>
                        <ul className="space-y-2">
                          {education.achievements.map(
                            (achievement) => (
                              <li
                                key={achievement}
                                className="flex items-start space-x-2 text-sm text-slate-600 dark:text-slate-300"
                              >
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Gained Section */}
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
              Skills & Knowledge Gained
            </h2>
            <div className="w-20 h-1 bg-sky-400 mx-auto mb-6"></div>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Through my educational journey, I've acquired a diverse set of
              technical and soft skills that form the foundation of my
              development career.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsGained.map((skillCategory, index) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-700 border-none">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg text-slate-900 dark:text-white">
                      {skillCategory.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skillCategory.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300"
                        >
                          <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Future Learning Goals
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              As I continue my BCA journey, I'm focused on expanding my
              knowledge in full-stack development, cloud technologies, and
              emerging fields like AI/ML. My goal is to become a well-rounded
              developer capable of building scalable, modern applications.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-800 border-none">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Advanced Programming
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Data Structures, Algorithms, System Design
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-800 border-none">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Full-Stack Development
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    MERN Stack, Node.js, Express, MongoDB
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-800 border-none">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Emerging Technologies
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Cloud Computing, DevOps, AI/ML Basics
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

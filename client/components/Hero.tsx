import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { TypingEffect } from "./ui/typing-effect";
import { Download, Mail, MapPin, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from "react-icons/fa";

export function Hero() {
  const roles = [
    "Front-End Developer",
    "AI & Robotics Enthusiast", 
    "UI/UX Designer",
    "Open Source Contributor"
  ];
  
  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, url: "https://github.com/Swastiksaumya1", label: "GitHub" },
    { icon: <FaLinkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/swastik-saumya-996878296/", label: "LinkedIn" },
    { icon: <FaTwitter className="w-5 h-5" />, url: "https://twitter.com/swastik_saumya", label: "Twitter" },
    { icon: <FaCode className="w-5 h-5" />, url: "https://leetcode.com/swastiksaumya", label: "LeetCode" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        className="container max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-2"
              >
                <Badge variant="outline" className="glass-card">
                  <MapPin className="w-3 h-3 mr-1" />
                  Ghaziabad, UP, India
                </Badge>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Hi, I'm{" "}
                <span className="gradient-text">Swastik Saumya</span>
              </motion.h1>

              <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
                <TypingEffect
                  texts={roles}
                  speed={80}
                  deleteSpeed={40}
                  delayBetweenTexts={1500}
                  prefix="I'm a "
                  className="min-h-[2em] block"
                />
              </div>

              <motion.p 
                variants={itemVariants}
                className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
              >
                <strong className="text-foreground font-medium">Front-End Developer | AI & Robotics Enthusiast | Building Scalable Web Applications</strong>
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-muted-foreground max-w-2xl leading-relaxed"
              >
                I craft exceptional digital experiences with clean, efficient code. Currently pursuing BCA at IMS UC Ghaziabad, I blend technical expertise with creative problem-solving to build web applications that make an impact.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="gap-2 glass-button group" asChild>
                  <a href="mailto:swastiksaumya07@gmail.com">
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Get In Touch
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 glass-card group" asChild>
                  <a href="/files/swastik_resume_2025.pdf" download>
                    <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Download CV
                  </a>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-2"
              >
                <span className="text-sm text-muted-foreground">Follow me:</span>
                <div className="flex gap-2">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full glass-card hover:bg-accent/50 transition-colors"
                      aria-label={social.label}
                      whileHover={{ y: -2, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 gradient-border rounded-full blur-xl opacity-70"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Profile Photo Container */}
              <motion.div
                className="relative w-80 h-80 rounded-full overflow-hidden glass-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/files/photo .jpg" 
                  alt="Swastik Saumya - Front-End Developer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

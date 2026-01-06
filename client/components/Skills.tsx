import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Code, Palette, Database, Cloud, Brain, Zap } from "lucide-react";
import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ComponentType<IconProps>;
  color: string;
}

const skills: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Bootstrap"],
    icon: Code,
    color: "#3B82F6"
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Firebase", "MongoDB (basic)"],
    icon: Database,
    color: "#10B981"
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Netlify", "Vercel", "Figma", "WordPress"],
    icon: Cloud,
    color: "#F59E0B"
  },
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript"],
    icon: Zap,
    color: "#8B5CF6"
  },
  {
    title: "Other Skills",
    skills: ["Responsive Web Design", "REST API integration", "Debugging", "Problem-Solving"],
    icon: Brain,
    color: "#EC4899"
  }
];

// Removed unused constants

export function Skills() {
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

    // Removed unused groupedSkills code

  return (
    <section className="py-20 px-4" id="skills">
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
              <Zap className="w-3 h-3 mr-1" />
              Skills & Expertise
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${category.color}15` }}
                >
<category.icon 
                    className="w-5 h-5" 
                    color={category.color}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="text-sm px-3 py-1 rounded-full bg-accent/50 text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <p className="text-muted-foreground">
              Continuously learning and adapting to new technologies to build better web experiences.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

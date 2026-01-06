import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                SS
              </div>
              <span className="text-xl font-bold">Swastik Saumya</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Passionate BCA student and beginner web developer building modern, 
              responsive websites with cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-slate-400 hover:text-sky-400 transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/education" 
                className="block text-slate-400 hover:text-sky-400 transition-colors"
              >
                Education
              </Link>
              <Link 
                to="/internship" 
                className="block text-slate-400 hover:text-sky-400 transition-colors"
              >
                Internship
              </Link>
              <Link 
                to="/projects" 
                className="block text-slate-400 hover:text-sky-400 transition-colors"
              >
                Projects
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <motion.a
                href="mailto:swastiksaumya@email.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-slate-800 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://github.com/Swastiksaumya1"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-slate-800 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/swastik-saumya-996878296/"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-slate-800 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
            <p className="text-sm text-slate-400">
              Always open to new opportunities and collaborations!
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 Swastik Saumya. Built with React, TypeScript & Tailwind CSS.
          </p>
          
          {/* Subtle admin link */}
          <div className="mt-4 md:mt-0">
            <Link 
              to="/admin"
              className="text-slate-600 hover:text-slate-400 transition-colors flex items-center space-x-1 text-xs"
            >
              <Shield className="w-3 h-3" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

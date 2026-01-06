import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Moon,
  Sun,
  ChevronUp,
  Home,
  GraduationCap,
  Briefcase,
  FolderOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AIChatbot from "@/components/Chatbot/AIChatbot";

// Define the layout props
interface LayoutProps {
  readonly children: React.ReactNode;
}

// Define the navbar props
interface NavbarProps {
  readonly navItems: NavItem[];
  readonly location: any;
  readonly darkMode: boolean;
  readonly toggleDarkMode: () => void;
  readonly mobileMenuOpen: boolean;
  readonly setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Define the back to top button props
interface BackToTopButtonProps {
  readonly show: boolean;
  readonly onClick: () => void;
}

// Define the page progress props
interface PageProgressProps {
  readonly scrollProgress: number;
}

// Define the navigation item type
interface NavItem {
  name: string;
  href: string;
  icon: JSX.Element;
}

// Modern, clean implementation of Layout
export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // Navigation items with icons
  const navItems: NavItem[] = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    {
      name: "Education",
      href: "/education",
      icon: <GraduationCap className="w-4 h-4" />,
    },
    {
      name: "Internship",
      href: "/internship",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      name: "Projects",
      href: "/projects",
      icon: <FolderOpen className="w-4 h-4" />,
    },
  ];

  // Dark mode functionality
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show back to top button functionality
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll progress functionality
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        navItems={navItems}
        location={location}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <PageProgress scrollProgress={scrollProgress} />
      <main className="pt-20 relative z-10">{children}</main>
      <BackToTopButton
        show={showBackToTop}
        onClick={scrollToTop}
      />
      <AIChatbot />
    </div>
  );
}

// Modern, clean implementation of Navbar
function Navbar({
  navItems,
  location,
  darkMode,
  toggleDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavbarProps) {
  // Show shadow when scrolled
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`sticky top-0 z-50 w-full backdrop-blur-xl bg-white/60 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 shadow-lg transition-all duration-300 ${scrolled ? "shadow-xl" : "shadow-none"}`}
      style={{
        WebkitBackdropFilter: "blur(16px)",
        backdropFilter: "blur(16px)",
      }}
      aria-label="Main Navigation"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="text-xl font-bold text-slate-900 dark:text-white flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                SS
              </div>
              <span className="hidden sm:block">Swastik Saumya</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.name} to={item.href}>
                <motion.div
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                    location.pathname === item.href
                      ? "bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Dark mode toggle and mobile menu */}
          <div className="flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="p-2 rounded-lg"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-600" />
                )}
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-slate-700"
            >
              <div className="flex flex-col space-y-2 pt-4">
                {navItems.map((item, index) => (
                  <Link key={item.name} to={item.href}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname === item.href
                          ? "bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

// Modern, clean implementation of BackToTopButton
function BackToTopButton({ show, onClick }: BackToTopButtonProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={onClick}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-sky-400 hover:bg-sky-500 rounded-full flex items-center justify-center text-white shadow-lg transition-colors backdrop-blur-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// Modern, clean implementation of PageProgress
function PageProgress({ scrollProgress }: PageProgressProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500 z-50 origin-left"
      style={{ width: `${scrollProgress}%` }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.1 }}
    />
  );
}

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Search,
  X,
  ArrowRight,
  FileText,
  User,
  Briefcase,
  Code,
  GraduationCap,
  Sparkles,
  Command,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  findRelevantResponse,
  portfolioKnowledge,
  KnowledgeEntry,
} from "../Chatbot/ChatbotKnowledgeBase";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  path: string;
  icon: React.ReactNode;
  score: number;
  content?: string;
}

export default function AISearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Comprehensive search data
  const searchableContent: SearchResult[] = [
    {
      id: "home",
      title: "Homepage",
      description: "Main portfolio page with hero section and overview",
      category: "page",
      path: "/",
      icon: <User className="w-4 h-4" />,
      score: 0,
      content: "swastik saumya beginner developer portfolio home hero projects skills contact"
    },
    {
      id: "education",
      title: "Education",
      description: "BCA degree, academic journey, and learning path",
      category: "page",
      path: "/education",
      icon: <GraduationCap className="w-4 h-4" />,
      score: 0,
      content: "education bca bachelor computer applications university college degree academic learning timeline"
    },
    {
      id: "internship",
      title: "Internship Experience",
      description: "Front-end developer internship at WebBoost Solutions",
      category: "page",
      path: "/internship",
      icon: <Briefcase className="w-4 h-4" />,
      score: 0,
      content: "internship webboost solutions frontend developer experience work remote projects"
    },
    {
      id: "projects",
      title: "Projects",
      description: "Portfolio of development projects and case studies",
      category: "page",
      path: "/projects",
      icon: <Code className="w-4 h-4" />,
      score: 0,
      content: "projects portfolio gait recognition resume optimizer weather dashboard react javascript"
    },
    {
      id: "gait-project",
      title: "Gait Recognition System",
      description: "Advanced CV project using OpenCV and machine learning",
      category: "project",
      path: "/projects#gait",
      icon: <Sparkles className="w-4 h-4" />,
      score: 0,
      content: "gait recognition opencv computer vision machine learning ai pattern analysis 87% accuracy"
    },
    {
      id: "resume-optimizer",
      title: "Resume Optimizer",
      description: "AI-powered tool for resume optimization and ATS compatibility",
      category: "project",
      path: "/projects#resume",
      icon: <FileText className="w-4 h-4" />,
      score: 0,
      content: "resume optimizer ai ats applicant tracking system react typescript optimization suggestions"
    },
    {
      id: "weather-dashboard",
      title: "Weather Dashboard",
      description: "Real-time weather app with interactive maps and forecasts",
      category: "project",
      path: "/projects#weather",
      icon: <FileText className="w-4 h-4" />,
      score: 0,
      content: "weather dashboard real-time api javascript charts maps forecasts geolocation"
    },
    {
      id: "react-skills",
      title: "React Development",
      description: "React.js skills and component-based architecture expertise",
      category: "skill",
      path: "/#skills",
      icon: <Code className="w-4 h-4" />,
      score: 0,
      content: "react javascript frontend components hooks state management jsx typescript"
    },
    {
      id: "javascript-skills",
      title: "JavaScript Programming",
      description: "Modern JavaScript, ES6+, async/await, and API integration",
      category: "skill",
      path: "/#skills",
      icon: <Code className="w-4 h-4" />,
      score: 0,
      content: "javascript es6 async await promises api integration dom manipulation programming"
    },
    {
      id: "contact-info",
      title: "Contact Information",
      description: "Get in touch via email, LinkedIn, or GitHub",
      category: "contact",
      path: "/#contact",
      icon: <User className="w-4 h-4" />,
      score: 0,
      content: "contact email linkedin github social media collaboration opportunities swastiksaumya"
    }
  ];

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      
      // Escape to close
      if (e.key === 'Escape') {
        setIsOpen(false);
        setQuery("");
        setResults([]);
      }
      
      // Arrow navigation when search is open
      if (isOpen && results.length > 0) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % results.length);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => prev === 0 ? results.length - 1 : prev - 1);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (results[selectedIndex]) {
            handleResultClick(results[selectedIndex]);
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // AI-powered search function
  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 200));

    const query = searchQuery.toLowerCase();
    const searchResults: SearchResult[] = [];

    // Score and rank results
    searchableContent.forEach(item => {
      let score = 0;
      
      // Title match (highest priority)
      if (item.title.toLowerCase().includes(query)) {
        score += 100;
      }
      
      // Description match
      if (item.description.toLowerCase().includes(query)) {
        score += 50;
      }
      
      // Content match
      if (item.content?.toLowerCase().includes(query)) {
        score += 25;
      }
      
      // Fuzzy matching for typos
      const words = query.split(' ');
      words.forEach(word => {
        if (word.length > 2) {
          const fuzzyMatches = item.content?.toLowerCase().split(' ').filter(contentWord => 
            contentWord.includes(word) || word.includes(contentWord)
          ) || [];
          score += fuzzyMatches.length * 10;
        }
      });
      
      if (score > 0) {
        searchResults.push({ ...item, score });
      }
    });

    // Also search knowledge base for AI responses
    const aiResponse = findRelevantResponse(searchQuery);
    if (aiResponse && !aiResponse.includes("I'm not sure")) {
      searchResults.push({
        id: "ai-response",
        title: "AI Assistant Response",
        description: aiResponse.substring(0, 100) + "...",
        category: "ai",
        path: "#chatbot",
        icon: <Sparkles className="w-4 h-4" />,
        score: 75,
        content: aiResponse
      });
    }

    // Sort by score and limit results
    const sortedResults = searchResults
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);

    setResults(sortedResults);
    setSelectedIndex(0);
    setIsLoading(false);
  };

  // Debounced search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleResultClick = (result: SearchResult) => {
    if (result.id === "ai-response") {
      // Open chatbot and send the query
      setIsOpen(false);
      // This would trigger the chatbot to open with the query
      window.dispatchEvent(new CustomEvent('openChatbot', { detail: query }));
    } else {
      navigate(result.path);
      setIsOpen(false);
    }
    setQuery("");
    setResults([]);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "page": return <FileText className="w-3 h-3" />;
      case "project": return <Code className="w-3 h-3" />;
      case "skill": return <Sparkles className="w-3 h-3" />;
      case "contact": return <User className="w-3 h-3" />;
      case "ai": return <Sparkles className="w-3 h-3" />;
      default: return <FileText className="w-3 h-3" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "page": return "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300";
      case "project": return "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300";
      case "skill": return "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300";
      case "contact": return "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300";
      case "ai": return "bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300";
      default: return "bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <>
      {/* Search trigger button */}
      <motion.div
        className="fixed top-24 left-6 z-40"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.5 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          variant="outline"
          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/50 flex items-center space-x-2"
        >
          <Search className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-blue-600 dark:text-blue-400 hidden sm:inline">Search</span>
          <Badge variant="outline" className="text-xs ml-2 hidden md:inline">
            <Command className="w-2 h-2 mr-1" />K
          </Badge>
        </Button>
      </motion.div>

      {/* Search modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Search modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl mx-auto z-50 px-4"
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden">
                {/* Search input */}
                <div className="flex items-center p-6 border-b border-gray-200 dark:border-slate-700">
                  <Search className="w-5 h-5 text-gray-400 mr-3" />
                  <Input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search portfolio, projects, skills, or ask AI..."
                    className="border-none bg-transparent text-lg placeholder-gray-400 focus:ring-0 p-0"
                  />
                  {isLoading && (
                    <div className="ml-3">
                      <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="ml-3 p-2"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                {/* Search results */}
                {results.length > 0 && (
                  <div className="max-h-96 overflow-y-auto">
                    {results.map((result, index) => (
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`p-4 border-b border-gray-100 dark:border-slate-700 cursor-pointer transition-colors ${
                          index === selectedIndex
                            ? "bg-blue-50 dark:bg-blue-900/20"
                            : "hover:bg-gray-50 dark:hover:bg-slate-700"
                        }`}
                        onClick={() => handleResultClick(result)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3 flex-1">
                            <div className="w-8 h-8 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                              {result.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-1">
                                <h3 className="font-medium text-gray-900 dark:text-white truncate">
                                  {result.title}
                                </h3>
                                <Badge className={`text-xs ${getCategoryColor(result.category)}`}>
                                  {getCategoryIcon(result.category)}
                                  <span className="ml-1 capitalize">{result.category}</span>
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                                {result.description}
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* No results */}
                {query && results.length === 0 && !isLoading && (
                  <div className="p-8 text-center">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-6 h-6 text-gray-400" />
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                      No results found
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Try searching for "projects", "skills", "education", or ask the AI assistant
                    </p>
                  </div>
                )}

                {/* Quick suggestions */}
                {!query && (
                  <div className="p-6">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-4">
                      Quick suggestions
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { text: "React projects", icon: <Code className="w-4 h-4" /> },
                        { text: "Education", icon: <GraduationCap className="w-4 h-4" /> },
                        { text: "Internship", icon: <Briefcase className="w-4 h-4" /> },
                        { text: "Contact info", icon: <User className="w-4 h-4" /> },
                      ].map((suggestion, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          onClick={() => setQuery(suggestion.text)}
                          className="justify-start p-3 h-auto"
                        >
                          {suggestion.icon}
                          <span className="ml-2">{suggestion.text}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer */}
                <div className="px-6 py-3 bg-gray-50 dark:bg-slate-700/50 border-t border-gray-200 dark:border-slate-700">
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <ArrowRight className="w-3 h-3 mr-1" />
                        to select
                      </span>
                      <span className="flex items-center">
                        ↑↓ to navigate
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Sparkles className="w-3 h-3 mr-1" />
                      AI-powered search
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

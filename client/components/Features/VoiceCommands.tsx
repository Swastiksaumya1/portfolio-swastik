import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Mic, MicOff, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface VoiceCommandsProps {
  onCommand?: (command: string, action: string) => void;
}

export default function VoiceCommands({ onCommand }: VoiceCommandsProps) {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [lastCommand, setLastCommand] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Voice commands configuration
  const commands = {
    navigation: {
      "go home": "/",
      "go to home": "/",
      "home page": "/",
      "navigate home": "/",
      "go to education": "/education",
      "show education": "/education",
      "education page": "/education",
      "go to projects": "/projects",
      "show projects": "/projects",
      "projects page": "/projects",
      "go to internship": "/internship",
      "show internship": "/internship",
      "internship page": "/internship",
    },
    actions: {
      "scroll up": "scrollUp",
      "scroll down": "scrollDown",
      "scroll to top": "scrollTop",
      "go to top": "scrollTop",
      "toggle dark mode": "toggleDarkMode",
      "switch theme": "toggleDarkMode",
      "dark mode": "toggleDarkMode",
      "light mode": "toggleDarkMode",
      "open chatbot": "openChatbot",
      "show chatbot": "openChatbot",
      "help": "showHelp",
      "what can you do": "showHelp",
      "commands": "showHelp",
    },
    content: {
      "tell me about projects": "focusProjects",
      "show skills": "focusSkills",
      "contact information": "focusContact",
      "about swastik": "focusAbout",
    }
  };

  useEffect(() => {
    // Check if speech recognition is supported
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setIsSupported(true);
      
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase().trim();
        handleVoiceCommand(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        showCommandFeedback("Sorry, I didn't understand that. Please try again.");
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const handleVoiceCommand = (transcript: string) => {
    setLastCommand(transcript);
    
    // Check navigation commands
    for (const [command, path] of Object.entries(commands.navigation)) {
      if (transcript.includes(command)) {
        navigate(path);
        showCommandFeedback(`Navigating to ${command.replace('go to ', '').replace('show ', '')}`);
        speak(`Navigating to ${command.replace('go to ', '').replace('show ', '')}`);
        onCommand?.(transcript, `navigate:${path}`);
        return;
      }
    }

    // Check action commands
    for (const [command, action] of Object.entries(commands.actions)) {
      if (transcript.includes(command)) {
        executeAction(action);
        showCommandFeedback(`Executing: ${command}`);
        speak(`${command} executed`);
        onCommand?.(transcript, action);
        return;
      }
    }

    // Check content commands
    for (const [command, action] of Object.entries(commands.content)) {
      if (transcript.includes(command)) {
        executeContentAction(action);
        showCommandFeedback(`Showing: ${command}`);
        speak(`Showing ${command}`);
        onCommand?.(transcript, action);
        return;
      }
    }

    // Unknown command
    showCommandFeedback(`Unknown command: "${transcript}". Try saying "help" for available commands.`);
    speak("I didn't recognize that command. Try saying help for available commands.");
  };

  const executeAction = (action: string) => {
    switch (action) {
      case "scrollUp":
        window.scrollBy({ top: -500, behavior: "smooth" });
        break;
      case "scrollDown":
        window.scrollBy({ top: 500, behavior: "smooth" });
        break;
      case "scrollTop":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "toggleDarkMode":
        // Toggle dark mode
        const isDark = document.documentElement.classList.contains("dark");
        if (isDark) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("darkMode", "false");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("darkMode", "true");
        }
        break;
      case "openChatbot":
        // This would trigger chatbot opening
        const chatbotButton = document.querySelector('[data-chatbot-trigger]') as HTMLElement;
        chatbotButton?.click();
        break;
      case "showHelp":
        showVoiceHelp();
        break;
    }
  };

  const executeContentAction = (action: string) => {
    switch (action) {
      case "focusProjects":
        if (location.pathname === "/") {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        } else {
          navigate("/#projects");
        }
        break;
      case "focusSkills":
        if (location.pathname === "/") {
          document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        } else {
          navigate("/#skills");
        }
        break;
      case "focusContact":
        if (location.pathname === "/") {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        } else {
          navigate("/#contact");
        }
        break;
      case "focusAbout":
        if (location.pathname === "/") {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        } else {
          navigate("/#about");
        }
        break;
    }
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.7;
      speechSynthesis.speak(utterance);
    }
  };

  const showCommandFeedback = (message: string) => {
    setLastCommand(message);
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 3000);
  };

  const showVoiceHelp = () => {
    const helpText = `Available voice commands: 
    Navigation: Go home, Show projects, Go to education, Go to internship.
    Actions: Scroll up, Scroll down, Go to top, Toggle dark mode, Open chatbot.
    Content: Tell me about projects, Show skills, Contact information, About Swastik.`;
    
    showCommandFeedback("Voice commands help displayed");
    speak(helpText);
  };

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  if (!isSupported) {
    return null;
  }

  return (
    <>
      {/* Voice command button */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative"
        >
          <Button
            onClick={isListening ? stopListening : startListening}
            className={`w-14 h-14 rounded-full shadow-lg text-white border-none ${
              isListening
                ? "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
                : "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
            }`}
          >
            {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </Button>
          
          {/* Listening indicator */}
          {isListening && (
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-red-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          )}
        </motion.div>
      </motion.div>

      {/* Command feedback */}
      <AnimatePresence>
        {showFeedback && lastCommand && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="fixed bottom-32 left-1/2 z-50 max-w-md"
          >
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 p-4">
              <div className="flex items-center space-x-3">
                <Volume2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Voice Command
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    {lastCommand}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Available commands hint */}
      <AnimatePresence>
        {isListening && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-24 right-6 z-50 max-w-xs"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg p-4 shadow-lg">
              <p className="text-sm font-medium mb-2">🎤 Listening...</p>
              <div className="space-y-1 text-xs">
                <Badge variant="secondary" className="text-xs">
                  "Go home"
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  "Show projects"
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  "Toggle dark mode"
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  "Help"
                </Badge>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Hook for using voice commands in components
export function useVoiceCommands() {
  const [isListening, setIsListening] = useState(false);
  const [lastCommand, setLastCommand] = useState("");

  const startListening = () => setIsListening(true);
  const stopListening = () => setIsListening(false);

  return {
    isListening,
    lastCommand,
    startListening,
    stopListening,
  };
}

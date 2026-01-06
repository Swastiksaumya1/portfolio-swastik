import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  X,
  Info,
  CheckCircle,
  AlertTriangle,
  Zap,
  Users,
  Sparkles,
  Eye,
  MessageCircle,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Notification {
  id: string;
  type: "info" | "success" | "warning" | "feature" | "engagement";
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  action?: {
    label: string;
    callback: () => void;
  };
  icon?: React.ReactNode;
}

export default function NotificationSystem() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  // Initialize with some demo notifications
  useEffect(() => {
    const demoNotifications: Notification[] = [
      {
        id: "welcome",
        type: "feature",
        title: "🚀 Welcome to the Future!",
        message: "Experience next-level portfolio features including AI chatbot, voice commands, and real-time analytics.",
        timestamp: new Date(),
        read: false,
        icon: <Sparkles className="w-4 h-4" />,
        action: {
          label: "Explore Features",
          callback: () => {
            // Show features tour
            markAsRead("welcome");
          }
        }
      },
      {
        id: "search",
        type: "info",
        title: "🔍 Smart Search Available",
        message: "Use Cmd+K to quickly search through projects, skills, education, and more with AI-powered suggestions.",
        timestamp: new Date(Date.now() - 60000),
        read: false,
        icon: <MessageCircle className="w-4 h-4" />,
      },
      {
        id: "responsive",
        type: "engagement",
        title: "📱 Responsive Experience",
        message: "This portfolio adapts beautifully to all devices - try resizing your browser or viewing on mobile!",
        timestamp: new Date(Date.now() - 120000),
        read: false,
        icon: <Eye className="w-4 h-4" />,
      },
      {
        id: "ai-chat",
        type: "success",
        title: "🤖 AI Assistant Ready",
        message: "I can answer questions about Swastik's background, projects, skills, and experience. Try asking me anything!",
        timestamp: new Date(Date.now() - 180000),
        read: false,
        icon: <Zap className="w-4 h-4" />,
        action: {
          label: "Start Chat",
          callback: () => {
            window.dispatchEvent(new CustomEvent('openChatbot'));
            markAsRead("ai-chat");
          }
        }
      }
    ];

    setNotifications(demoNotifications);
    setUnreadCount(demoNotifications.filter(n => !n.read).length);
  }, []);

  // Add engagement notifications based on user behavior
  useEffect(() => {
    const addEngagementNotification = (id: string, title: string, message: string) => {
      const newNotification: Notification = {
        id,
        type: "engagement",
        title,
        message,
        timestamp: new Date(),
        read: false,
        icon: <Users className="w-4 h-4" />,
      };

      setNotifications(prev => [newNotification, ...prev.slice(0, 9)]);
      setUnreadCount(prev => prev + 1);
    };

    // Simulate engagement tracking
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent > 50) {
        setTimeout(() => {
          addEngagementNotification(
            "scroll-50",
            "🎯 Great Engagement!",
            "You've explored 50% of the portfolio. Discovering more about Swastik's journey!"
          );
        }, 2000);
      }
    };

    const handlePageVisit = () => {
      setTimeout(() => {
        addEngagementNotification(
          "page-visit",
          "👀 New Visitor Detected",
          "Welcome! Someone new is exploring this futuristic portfolio experience."
        );
      }, 5000);
    };

    let scrollTimeout: NodeJS.Timeout;
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 1000);
    };

    window.addEventListener('scroll', debouncedScroll);
    handlePageVisit();

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
    setUnreadCount(0);
  };

  const removeNotification = (id: string) => {
    const notification = notifications.find(n => n.id === id);
    if (notification && !notification.read) {
      setUnreadCount(prev => Math.max(0, prev - 1));
    }
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "success": return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "warning": return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case "feature": return <Sparkles className="w-4 h-4 text-purple-500" />;
      case "engagement": return <Users className="w-4 h-4 text-blue-500" />;
      default: return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "success": return "border-l-green-500";
      case "warning": return "border-l-yellow-500";
      case "feature": return "border-l-purple-500";
      case "engagement": return "border-l-blue-500";
      default: return "border-l-blue-500";
    }
  };

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - timestamp.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  return (
    <>
      {/* Notification Bell */}
      <motion.div
        className="fixed top-6 right-6 z-40"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 p-3"
        >
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          
          {unreadCount > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
            >
              <span className="text-xs font-bold text-white">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            </motion.div>
          )}
        </Button>
      </motion.div>

      {/* Notification Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-96 h-full bg-white dark:bg-slate-900 shadow-2xl border-l border-gray-200 dark:border-slate-700 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Notifications
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {unreadCount} unread updates
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  {unreadCount > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={markAllAsRead}
                      className="text-xs"
                    >
                      Mark all read
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="p-2"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Notifications List */}
            <div className="overflow-y-auto h-full pb-20">
              {notifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-center px-6">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4">
                    <Bell className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    No notifications yet
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    You'll see updates about new features and engagement here.
                  </p>
                </div>
              ) : (
                <div className="p-4 space-y-4">
                  {notifications.map((notification, index) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative p-4 rounded-lg border-l-4 ${getNotificationColor(notification.type)} ${
                        notification.read 
                          ? "bg-gray-50 dark:bg-slate-800/50" 
                          : "bg-white dark:bg-slate-800 shadow-sm"
                      } hover:shadow-md transition-shadow`}
                    >
                      {/* Unread indicator */}
                      {!notification.read && (
                        <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                      
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          {notification.icon || getNotificationIcon(notification.type)}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                            {notification.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            {notification.message}
                          </p>
                          
                          <div className="flex items-center justify-between mt-3">
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {formatTimeAgo(notification.timestamp)}
                            </span>
                            
                            <div className="flex items-center space-x-2">
                              {notification.action && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={notification.action.callback}
                                  className="text-xs h-7"
                                >
                                  {notification.action.label}
                                </Button>
                              )}
                              
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeNotification(notification.id)}
                                className="p-1 w-6 h-6"
                              >
                                <X className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Click to mark as read */}
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="absolute inset-0 bg-transparent"
                          aria-label="Mark as read"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

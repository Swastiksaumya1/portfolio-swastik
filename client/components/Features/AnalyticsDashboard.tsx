import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Users,
  Eye,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  X,
  TrendingUp,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AnalyticsData {
  pageViews: number;
  visitors: number;
  sessionDuration: number;
  bounceRate: number;
  devices: {
    desktop: number;
    mobile: number;
    tablet: number;
  };
  pages: {
    [key: string]: number;
  };
  realTime: {
    activeUsers: number;
    recentActions: Array<{
      id: string;
      action: string;
      page: string;
      timestamp: Date;
      device: string;
    }>;
  };
}

export default function AnalyticsDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    pageViews: 0,
    visitors: 0,
    sessionDuration: 0,
    bounceRate: 0,
    devices: { desktop: 0, mobile: 0, tablet: 0 },
    pages: {},
    realTime: {
      activeUsers: 1,
      recentActions: [],
    },
  });

  // Simulate real-time analytics data
  useEffect(() => {
    const startTime = Date.now();
    
    // Initialize analytics with stored data or defaults
    const storedAnalytics = localStorage.getItem('portfolioAnalytics');
    if (storedAnalytics) {
      const parsed = JSON.parse(storedAnalytics);
      setAnalytics(prev => ({
        ...prev,
        ...parsed,
        realTime: { ...prev.realTime, activeUsers: 1 }
      }));
    }

    // Track current session
    const trackSession = () => {
      setAnalytics(prev => {
        const newData = {
          ...prev,
          pageViews: prev.pageViews + 1,
          visitors: prev.visitors + (prev.visitors === 0 ? 1 : 0),
          sessionDuration: Math.floor((Date.now() - startTime) / 1000),
          pages: {
            ...prev.pages,
            [window.location.pathname]: (prev.pages[window.location.pathname] || 0) + 1,
          },
        };
        
        // Store in localStorage
        localStorage.setItem('portfolioAnalytics', JSON.stringify(newData));
        return newData;
      });
    };

    // Device detection
    const getDeviceType = () => {
      const userAgent = navigator.userAgent;
      if (/tablet|ipad|playbook|silk/i.test(userAgent)) return 'tablet';
      if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(userAgent)) return 'mobile';
      return 'desktop';
    };

    // Update device stats
    const deviceType = getDeviceType();
    setAnalytics(prev => ({
      ...prev,
      devices: {
        ...prev.devices,
        [deviceType]: prev.devices[deviceType] + 1,
      },
    }));

    // Initial tracking
    trackSession();

    // Track page changes
    const handleLocationChange = () => {
      trackSession();
      addRecentAction('Page View', window.location.pathname, deviceType);
    };

    // Listen for navigation changes
    window.addEventListener('popstate', handleLocationChange);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setAnalytics(prev => ({
        ...prev,
        sessionDuration: Math.floor((Date.now() - startTime) / 1000),
        realTime: {
          ...prev.realTime,
          activeUsers: Math.floor(Math.random() * 5) + 1, // Simulate 1-5 active users
        },
      }));
    }, 5000);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      clearInterval(interval);
    };
  }, []);

  const addRecentAction = (action: string, page: string, device: string) => {
    setAnalytics(prev => ({
      ...prev,
      realTime: {
        ...prev.realTime,
        recentActions: [
          {
            id: Date.now().toString(),
            action,
            page,
            timestamp: new Date(),
            device,
          },
          ...prev.realTime.recentActions.slice(0, 9), // Keep last 10 actions
        ],
      },
    }));
  };

  // Calculate bounce rate
  const calculateBounceRate = () => {
    const totalSessions = analytics.visitors;
    if (totalSessions === 0) return 0;
    return Math.round((1 / totalSessions) * 100); // Simplified calculation
  };

  // Format duration
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Analytics button
  const AnalyticsButton = () => (
    <motion.div
      className="fixed top-24 right-6 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/50"
        >
          <BarChart3 className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />
          <span className="text-purple-600 dark:text-purple-400">Analytics</span>
        </Button>
      </motion.div>
    </motion.div>
  );

  return (
    <>
      <AnalyticsButton />
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-96 h-full bg-white dark:bg-slate-900 shadow-2xl border-l border-gray-200 dark:border-slate-700 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Analytics
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Real-time insights
                    </p>
                  </div>
                </div>
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

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Real-time stats */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center">
                    <Activity className="w-4 h-4 mr-2 text-green-500" />
                    Real-time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {analytics.realTime.activeUsers}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      active {analytics.realTime.activeUsers === 1 ? 'user' : 'users'}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Key metrics */}
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-blue-500" />
                      <div>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                          {analytics.pageViews}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Page views
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-green-500" />
                      <div>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                          {analytics.visitors}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Visitors
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-purple-500" />
                      <div>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                          {formatDuration(analytics.sessionDuration)}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Session
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-orange-500" />
                      <div>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                          {calculateBounceRate()}%
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Bounce rate
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Device breakdown */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Device Types</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(analytics.devices).map(([device, count]) => {
                    const total = Object.values(analytics.devices).reduce((a, b) => a + b, 0);
                    const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
                    
                    const Icon = device === 'desktop' ? Monitor : 
                               device === 'mobile' ? Smartphone : Globe;
                    
                    return (
                      <div key={device} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon className="w-4 h-4 text-gray-400" />
                          <span className="text-sm capitalize text-gray-700 dark:text-gray-300">
                            {device}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white w-8">
                            {count}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Top pages */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Top Pages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {Object.entries(analytics.pages)
                    .sort(([,a], [,b]) => b - a)
                    .slice(0, 5)
                    .map(([page, views]) => (
                    <div key={page} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300 truncate">
                        {page === '/' ? 'Home' : page.replace('/', '').charAt(0).toUpperCase() + page.slice(2)}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {views}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent activity */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {analytics.realTime.recentActions.slice(0, 5).map((action) => (
                    <div key={action.id} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900 dark:text-white">
                          {action.action}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {action.page} • {action.device} • {action.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {analytics.realTime.recentActions.length === 0 && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                      No recent activity
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

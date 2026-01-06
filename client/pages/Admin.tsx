import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Eye, 
  EyeOff, 
  Lock, 
  BarChart3, 
  Users, 
  Activity,
  Globe,
  Smartphone,
  Monitor,
  Clock,
  TrendingUp,
  Calendar,
  ArrowLeft,
  LogOut
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  traffic: {
    today: number;
    yesterday: number;
    thisWeek: number;
    lastWeek: number;
  };
  topReferrers: {
    [key: string]: number;
  };
  userLocations: {
    [key: string]: number;
  };
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
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
    traffic: {
      today: 0,
      yesterday: 0,
      thisWeek: 0,
      lastWeek: 0,
    },
    topReferrers: {},
    userLocations: {},
  });

  // Admin password (in a real app, this would be handled securely on the backend)
  const ADMIN_PASSWORD = "swastik2024admin";

  // Check if already authenticated
  useEffect(() => {
    const authStatus = sessionStorage.getItem("adminAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
      loadAnalyticsData();
    }
  }, []);

  // Load analytics data
  const loadAnalyticsData = () => {
    // Load stored analytics
    const storedAnalytics = localStorage.getItem('portfolioAnalytics');
    if (storedAnalytics) {
      const parsed = JSON.parse(storedAnalytics);
      setAnalytics(prev => ({
        ...prev,
        ...parsed,
        realTime: { ...prev.realTime, activeUsers: Math.floor(Math.random() * 5) + 1 }
      }));
    }

    // Simulate additional admin-only data
    setAnalytics(prev => ({
      ...prev,
      traffic: {
        today: Math.floor(Math.random() * 50) + 20,
        yesterday: Math.floor(Math.random() * 40) + 15,
        thisWeek: Math.floor(Math.random() * 200) + 100,
        lastWeek: Math.floor(Math.random() * 180) + 80,
      },
      topReferrers: {
        "Google": Math.floor(Math.random() * 30) + 10,
        "LinkedIn": Math.floor(Math.random() * 20) + 5,
        "GitHub": Math.floor(Math.random() * 15) + 3,
        "Direct": Math.floor(Math.random() * 25) + 8,
      },
      userLocations: {
        "India": Math.floor(Math.random() * 40) + 20,
        "United States": Math.floor(Math.random() * 20) + 10,
        "Canada": Math.floor(Math.random() * 10) + 5,
        "United Kingdom": Math.floor(Math.random() * 8) + 3,
        "Germany": Math.floor(Math.random() * 6) + 2,
      }
    }));

    // Simulate recent admin actions
    const adminActions = [
      { id: "1", action: "Admin Login", page: "/admin", timestamp: new Date(), device: "desktop" },
      { id: "2", action: "Analytics View", page: "/admin", timestamp: new Date(Date.now() - 300000), device: "desktop" },
      { id: "3", action: "Data Export", page: "/admin", timestamp: new Date(Date.now() - 600000), device: "desktop" },
    ];

    setAnalytics(prev => ({
      ...prev,
      realTime: {
        ...prev.realTime,
        recentActions: [...adminActions, ...prev.realTime.recentActions].slice(0, 10)
      }
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuthenticated", "true");
      setLoginError("");
      loadAnalyticsData();
    } else {
      setLoginError("Invalid password. Please try again.");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("adminAuthenticated");
    setPassword("");
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateGrowth = (current: number, previous: number) => {
    if (previous === 0) return 0;
    return Math.round(((current - previous) / previous) * 100);
  };

  // Login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-2xl">
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl text-white">Admin Access</CardTitle>
                <CardDescription className="text-slate-300">
                  Enter password to access analytics dashboard
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-slate-300">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter admin password"
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1 h-auto text-slate-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                {loginError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg"
                  >
                    <p className="text-sm text-red-300">{loginError}</p>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Access Dashboard
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <Link to="/">
                  <Button variant="ghost" className="w-full text-slate-300 hover:text-white">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Portfolio
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="sticky top-0 bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
                <p className="text-sm text-slate-400">Portfolio Analytics & Insights</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Button>
              </Link>
              <Button 
                onClick={handleLogout}
                variant="outline" 
                className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Real-time Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Active Users</p>
                  <p className="text-2xl font-bold text-green-400">{analytics.realTime.activeUsers}</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                <span className="text-xs text-slate-400">Live</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Total Visitors</p>
                  <p className="text-2xl font-bold">{analytics.visitors}</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <div className="mt-2">
                <span className="text-xs text-green-400">
                  +{calculateGrowth(analytics.traffic.today, analytics.traffic.yesterday)}% from yesterday
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Page Views</p>
                  <p className="text-2xl font-bold">{analytics.pageViews}</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-purple-400" />
                </div>
              </div>
              <div className="mt-2">
                <span className="text-xs text-slate-400">
                  Session: {formatDuration(analytics.sessionDuration)}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Bounce Rate</p>
                  <p className="text-2xl font-bold">{Math.round((1 / (analytics.visitors || 1)) * 100)}%</p>
                </div>
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="mt-2">
                <span className="text-xs text-orange-400">Low is better</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analytics */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Device Breakdown */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Smartphone className="w-5 h-5 mr-2" />
                Device Analytics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(analytics.devices).map(([device, count]) => {
                const total = Object.values(analytics.devices).reduce((a, b) => a + b, 0);
                const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
                
                const Icon = device === 'desktop' ? Monitor : 
                           device === 'mobile' ? Smartphone : Globe;
                
                return (
                  <div key={device} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5 text-slate-400" />
                      <span className="capitalize">{device}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-12 text-right">{count}</span>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Top Referrers */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle>Top Referrers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {Object.entries(analytics.topReferrers)
                .sort(([,a], [,b]) => b - a)
                .map(([referrer, count]) => (
                <div key={referrer} className="flex items-center justify-between">
                  <span className="text-slate-300">{referrer}</span>
                  <Badge variant="outline" className="border-slate-600">
                    {count}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity & User Locations */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {analytics.realTime.recentActions.slice(0, 8).map((action) => (
                <div key={action.id} className="flex items-start space-x-3 p-3 bg-slate-700/50 rounded-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white">{action.action}</p>
                    <p className="text-xs text-slate-400">
                      {action.page} • {action.device} • {action.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* User Locations */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle>User Locations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {Object.entries(analytics.userLocations)
                .sort(([,a], [,b]) => b - a)
                .map(([location, count]) => {
                  const total = Object.values(analytics.userLocations).reduce((a, b) => a + b, 0);
                  const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
                  
                  return (
                    <div key={location} className="flex items-center justify-between">
                      <span className="text-slate-300">{location}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium w-8 text-right">{count}</span>
                      </div>
                    </div>
                  );
                })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

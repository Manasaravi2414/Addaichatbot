import { Outlet, Link, useLocation } from 'react-router';
import { ChatBot } from '../components/ChatBot';
import {
  BookOpen,
  Users,
  TrendingUp,
  MessageSquare,
  Brain,
  ExternalLink,
} from 'lucide-react';

export function StudentLayout() {
  const location = useLocation();
  
  // Mock student data
  const studentData = {
    name: 'Alex Johnson',
    level: 'Intermediate',
    domain: 'Coding',
    ageGroup: 'Secondary (8-10)', // Can be: Primary, Middle, Secondary, Senior
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: TrendingUp, path: '/' },
    { id: 'learning', label: 'Learning', icon: BookOpen, path: '/learning' },
    { id: 'community', label: 'Community', icon: Users, path: '/community' },
    { id: 'mentorship', label: 'Mentorship', icon: MessageSquare, path: '/mentorship' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">EduPathway AI</h1>
                <p className="text-xs text-gray-500">Hybrid Learning Ecosystem</p>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Link
                to="/ngo"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>NGO Dashboard</span>
              </Link>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">{studentData.name}</p>
                <p className="text-xs text-gray-500">
                  {studentData.domain} • {studentData.level}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                AJ
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                  isActive(item.path)
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Outlet />
      </main>

      {/* ChatBot Component */}
      <ChatBot />
    </div>
  );
}

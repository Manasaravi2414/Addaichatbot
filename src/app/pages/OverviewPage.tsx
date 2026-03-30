import { Link } from 'react-router';
import {
  Award,
  Target,
  Calendar,
  Brain,
  Trophy,
  Zap,
} from 'lucide-react';

export function OverviewPage() {
  const studentData = {
    name: 'Alex Johnson',
    domain: 'Coding',
    progress: 65,
    badges: 12,
    streak: 7,
    points: 2450,
  };

  const recentActivities = [
    { id: 1, text: 'Completed "JavaScript Basics" lesson', time: '2 hours ago' },
    { id: 2, text: 'Earned "Problem Solver" badge', time: '1 day ago' },
    { id: 3, text: 'Submitted coding task #15', time: '2 days ago' },
    { id: 4, text: 'Joined peer community discussion', time: '3 days ago' },
  ];

  const upcomingTasks = [
    { id: 1, title: 'Build a Calculator App', due: 'Tomorrow', difficulty: 'Medium' },
    { id: 2, title: 'Complete React Tutorial', due: 'Mar 31', difficulty: 'Hard' },
    { id: 3, title: 'CSS Flexbox Challenge', due: 'Apr 2', difficulty: 'Easy' },
  ];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Progress</p>
                <p className="text-2xl font-bold text-gray-900">{studentData.progress}%</p>
              </div>
            </div>
            <div className="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all"
                style={{ width: `${studentData.progress}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                <Award className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Badges Earned</p>
                <p className="text-2xl font-bold text-gray-900">{studentData.badges}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                <Zap className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Current Streak</p>
                <p className="text-2xl font-bold text-gray-900">{studentData.streak} days</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Points</p>
                <p className="text-2xl font-bold text-gray-900">
                  {studentData.points.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <Link
              to="/learning"
              className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-md transition-shadow text-sm font-medium block text-center"
            >
              Continue Learning
            </Link>
            <Link
              to="/study-plan"
              className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium block text-center"
            >
              View Study Plan
            </Link>
            <Link
              to="/community"
              className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium block text-center"
            >
              Join Peer Community
            </Link>
            <Link
              to="/confidence-trainer"
              className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium block text-center"
            >
              AI Confidence Trainer
            </Link>
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Upcoming Tasks</h3>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {upcomingTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div>
                  <p className="font-medium text-gray-900">{task.title}</p>
                  <p className="text-sm text-gray-500">Due: {task.due}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    task.difficulty === 'Easy'
                      ? 'bg-green-100 text-green-700'
                      : task.difficulty === 'Medium'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {task.difficulty}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-900">{activity.text}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Welcome Banner */}
      <div className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Welcome back, {studentData.name.split(' ')[0]}! 👋
            </h2>
            <p className="text-white/90 mb-4">
              You're making great progress in your {studentData.domain} journey. Keep up the
              amazing work!
            </p>
            <p className="text-sm text-white/80">
              💡 Need help navigating the platform? Click the chat button in the bottom right
              corner to talk to our AI assistant!
            </p>
          </div>
          <Brain className="w-16 h-16 text-white/30" />
        </div>
      </div>
    </>
  );
}

import {
  Play,
  CheckCircle,
  Clock,
  Star,
  Upload,
  Search,
  Filter,
  Code,
  Palette,
  Briefcase,
  Video,
  FileText,
  Headphones,
  Lock,
  Calendar,
} from 'lucide-react';

export function LearningPage() {
  const studentData = {
    domain: 'Coding',
  };

  const lessons = [
    {
      id: 1,
      title: 'JavaScript Fundamentals',
      domain: 'Coding',
      level: 'Beginner',
      progress: 100,
      lessons: 12,
      duration: '4 hours',
      type: 'video',
      status: 'completed',
    },
    {
      id: 2,
      title: 'React Basics',
      domain: 'Coding',
      level: 'Intermediate',
      progress: 60,
      lessons: 15,
      duration: '6 hours',
      type: 'video',
      status: 'in-progress',
    },
    {
      id: 3,
      title: 'Advanced CSS Techniques',
      domain: 'Coding',
      level: 'Intermediate',
      progress: 0,
      lessons: 10,
      duration: '3 hours',
      type: 'video',
      status: 'locked',
    },
    {
      id: 4,
      title: 'Data Structures Practice',
      domain: 'Coding',
      level: 'Advanced',
      progress: 0,
      lessons: 20,
      duration: '8 hours',
      type: 'worksheet',
      status: 'locked',
    },
  ];

  const myTasks = [
    {
      id: 1,
      title: 'Build a Todo App',
      description: 'Create a functional todo application with add, delete, and mark complete features',
      dueDate: 'Mar 31, 2026',
      status: 'submitted',
      feedback: 'Great work! Consider adding local storage persistence.',
      score: 95,
    },
    {
      id: 2,
      title: 'CSS Grid Layout Challenge',
      description: 'Design a responsive photo gallery using CSS Grid',
      dueDate: 'Apr 1, 2026',
      status: 'in-progress',
      feedback: null,
      score: null,
    },
    {
      id: 3,
      title: 'Build a Calculator App',
      description: 'Create a calculator that can perform basic arithmetic operations',
      dueDate: 'Apr 3, 2026',
      status: 'pending',
      feedback: null,
      score: null,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Learning</h2>
          <p className="text-gray-600 mt-1">Continue your {studentData.domain} journey</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" />
            <span className="text-sm">Filter</span>
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Search className="w-4 h-4" />
            <span className="text-sm">Search</span>
          </button>
        </div>
      </div>

      {/* Domain Tabs */}
      <div className="flex gap-2">
        {[
          { icon: Code, label: 'Coding', color: 'blue' },
          { icon: Palette, label: 'Design', color: 'purple' },
          { icon: Briefcase, label: 'Business', color: 'green' },
        ].map((domain) => (
          <button
            key={domain.label}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              studentData.domain === domain.label
                ? 'bg-blue-100 text-blue-700'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <domain.icon className="w-4 h-4" />
            <span className="text-sm font-medium">{domain.label}</span>
          </button>
        ))}
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                      {lesson.level}
                    </span>
                    {lesson.status === 'completed' && (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    )}
                    {lesson.status === 'locked' && <Lock className="w-4 h-4 text-gray-400" />}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{lesson.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      {lesson.type === 'video' ? (
                        <Video className="w-4 h-4" />
                      ) : lesson.type === 'worksheet' ? (
                        <FileText className="w-4 h-4" />
                      ) : (
                        <Headphones className="w-4 h-4" />
                      )}
                      {lesson.lessons} lessons
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {lesson.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium text-gray-900">{lesson.progress}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all"
                    style={{ width: `${lesson.progress}%` }}
                  />
                </div>
              </div>

              {/* Action Button */}
              <button
                disabled={lesson.status === 'locked'}
                className={`w-full px-4 py-2 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors ${
                  lesson.status === 'locked'
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : lesson.status === 'completed'
                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-md'
                }`}
              >
                {lesson.status === 'locked' ? (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Locked</span>
                  </>
                ) : lesson.status === 'completed' ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>Review</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Continue Learning</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* My Tasks Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-4">My Tasks & Assignments</h3>
        <div className="space-y-4">
          {myTasks.map((task) => (
            <div key={task.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">{task.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Due: {task.dueDate}
                    </span>
                    {task.score && (
                      <span className="flex items-center gap-1 text-green-600">
                        <Star className="w-4 h-4 fill-current" />
                        Score: {task.score}/100
                      </span>
                    )}
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    task.status === 'submitted'
                      ? 'bg-blue-100 text-blue-700'
                      : task.status === 'in-progress'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {task.status === 'submitted'
                    ? 'Submitted'
                    : task.status === 'in-progress'
                    ? 'In Progress'
                    : 'Pending'}
                </span>
              </div>
              {task.feedback && (
                <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Mentor Feedback:</span> {task.feedback}
                  </p>
                </div>
              )}
              {task.status !== 'submitted' && (
                <div className="mt-3 flex gap-2">
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-md transition-shadow flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Submit Task
                  </button>
                  {task.status === 'in-progress' && (
                    <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                      Save Progress
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

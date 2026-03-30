import { Calendar, Clock, CheckCircle, Target, BookOpen } from 'lucide-react';

export function StudyPlanPage() {
  const weeklyPlan = [
    {
      day: 'Monday',
      tasks: [
        { time: '4:00 PM', title: 'React Basics - Lesson 8', duration: '45 min', type: 'video' },
        { time: '5:00 PM', title: 'Practice: Build Component', duration: '30 min', type: 'practice' },
      ],
    },
    {
      day: 'Tuesday',
      tasks: [
        { time: '4:00 PM', title: 'JavaScript Arrays Methods', duration: '40 min', type: 'video' },
        { time: '5:00 PM', title: 'Mentor Session', duration: '45 min', type: 'mentorship' },
      ],
    },
    {
      day: 'Wednesday',
      tasks: [
        { time: '4:00 PM', title: 'CSS Flexbox Challenge', duration: '60 min', type: 'assignment' },
      ],
    },
    {
      day: 'Thursday',
      tasks: [
        { time: '4:00 PM', title: 'React State Management', duration: '50 min', type: 'video' },
        { time: '5:00 PM', title: 'Peer Discussion Group', duration: '30 min', type: 'community' },
      ],
    },
    {
      day: 'Friday',
      tasks: [
        { time: '4:00 PM', title: 'Build Calculator App', duration: '90 min', type: 'project' },
      ],
    },
  ];

  const careerRoadmap = [
    {
      phase: 'Foundation',
      status: 'completed',
      milestones: [
        'Learn HTML, CSS, JavaScript basics',
        'Understand programming fundamentals',
        'Build simple web pages',
      ],
    },
    {
      phase: 'Intermediate',
      status: 'in-progress',
      milestones: [
        'Master React framework',
        'Learn state management',
        'Build interactive applications',
      ],
    },
    {
      phase: 'Advanced',
      status: 'upcoming',
      milestones: [
        'Full-stack development',
        'API integration',
        'Complex project development',
      ],
    },
    {
      phase: 'Career Ready',
      status: 'upcoming',
      milestones: [
        'Build portfolio projects',
        'Interview preparation',
        'Internship opportunities',
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">My Study Plan</h2>
        <p className="text-gray-600 mt-1">Your personalized learning roadmap</p>
      </div>

      {/* Weekly Plan */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            This Week's Schedule
          </h3>
          <span className="text-sm text-gray-600">March 31 - April 6, 2026</span>
        </div>

        <div className="space-y-6">
          {weeklyPlan.map((day) => (
            <div key={day.day} className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-medium text-gray-900 mb-3">{day.day}</h4>
              <div className="space-y-3">
                {day.tasks.map((task, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="text-sm text-gray-600 flex items-center gap-1 min-w-[80px]">
                      <Clock className="w-4 h-4" />
                      {task.time}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{task.title}</p>
                      <p className="text-sm text-gray-500">{task.duration}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        task.type === 'video'
                          ? 'bg-blue-100 text-blue-700'
                          : task.type === 'practice'
                          ? 'bg-green-100 text-green-700'
                          : task.type === 'mentorship'
                          ? 'bg-purple-100 text-purple-700'
                          : task.type === 'assignment'
                          ? 'bg-orange-100 text-orange-700'
                          : task.type === 'project'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {task.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Roadmap */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <Target className="w-5 h-5" />
          Career Roadmap: Coding
        </h3>

        <div className="space-y-6">
          {careerRoadmap.map((phase, idx) => (
            <div key={phase.phase} className="relative">
              {idx !== careerRoadmap.length - 1 && (
                <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gray-200" />
              )}
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    phase.status === 'completed'
                      ? 'bg-green-100'
                      : phase.status === 'in-progress'
                      ? 'bg-blue-100'
                      : 'bg-gray-100'
                  }`}
                >
                  {phase.status === 'completed' ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : phase.status === 'in-progress' ? (
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Target className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        phase.status === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : phase.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {phase.status === 'completed'
                        ? 'Completed'
                        : phase.status === 'in-progress'
                        ? 'In Progress'
                        : 'Upcoming'}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {phase.milestones.map((milestone, mIdx) => (
                      <li key={mIdx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Study Tips */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
        <h3 className="font-semibold mb-2">📚 Study Tips</h3>
        <ul className="space-y-2 text-sm text-white/90">
          <li>• Take regular breaks every 45 minutes</li>
          <li>• Review previous lessons before starting new ones</li>
          <li>• Practice coding daily, even for just 30 minutes</li>
          <li>• Don't hesitate to ask your mentor for help</li>
          <li>• Join peer discussions to learn from others</li>
        </ul>
      </div>
    </div>
  );
}

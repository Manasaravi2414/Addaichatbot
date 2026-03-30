import { Star, Calendar, Clock, Play, ArrowRight } from 'lucide-react';

export function MentorshipPage() {
  const myMentor = {
    name: 'Dr. Rachel Martinez',
    avatar: 'RM',
    domain: 'Coding',
    level: 'Advanced',
    experience: '8 years',
    students: 15,
    rating: 4.9,
    languages: ['English', 'Spanish'],
    nextSession: 'Apr 1, 2026 at 3:00 PM',
  };

  const mentorSessions = [
    {
      id: 1,
      date: 'Mar 28, 2026',
      topic: 'React Component Lifecycle',
      duration: '45 min',
      notes: 'Discussed useEffect dependencies and cleanup functions',
      recording: true,
    },
    {
      id: 2,
      date: 'Mar 21, 2026',
      topic: 'JavaScript Async/Await',
      duration: '50 min',
      notes: 'Covered promises, async/await, and error handling',
      recording: true,
    },
    {
      id: 3,
      date: 'Mar 14, 2026',
      topic: 'State Management Basics',
      duration: '40 min',
      notes: 'Introduction to state management patterns',
      recording: true,
    },
  ];

  const mentorFeedback = [
    {
      id: 1,
      task: 'Todo App Project',
      date: 'Mar 29, 2026',
      feedback:
        'Excellent implementation! Your code is clean and well-structured. Consider adding unit tests for better code quality.',
      rating: 5,
    },
    {
      id: 2,
      task: 'CSS Grid Assignment',
      date: 'Mar 22, 2026',
      feedback: 'Good work on the layout. Try to make it more responsive on mobile devices.',
      rating: 4,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">My Mentorship</h2>
        <p className="text-gray-600 mt-1">Get personalized guidance from experienced mentors</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mentor Profile */}
        <div className="lg:col-span-1 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-3xl font-semibold mx-auto mb-4">
              {myMentor.avatar}
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{myMentor.name}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {myMentor.domain} • {myMentor.level}
            </p>
            <div className="flex items-center justify-center gap-1 text-yellow-500 mb-4">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium text-gray-900">{myMentor.rating}</span>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Experience</span>
              <span className="font-medium text-gray-900">{myMentor.experience}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Students</span>
              <span className="font-medium text-gray-900">{myMentor.students}</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-600">Languages:</span>
              <div className="flex gap-2 mt-1">
                {myMentor.languages.map((lang) => (
                  <span key={lang} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg mb-4">
            <p className="text-xs text-gray-600 mb-1">Next Session</p>
            <p className="text-sm font-medium text-gray-900">{myMentor.nextSession}</p>
          </div>

          <div className="space-y-2">
            <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-md transition-shadow">
              Schedule Session
            </button>
            <button className="w-full px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Send Message
            </button>
          </div>
        </div>

        {/* Sessions and Feedback */}
        <div className="lg:col-span-2 space-y-6">
          {/* Past Sessions */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Past Sessions</h3>
              <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
            </div>
            <div className="space-y-3">
              {mentorSessions.map((session) => (
                <div key={session.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{session.topic}</h4>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {session.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {session.duration}
                        </span>
                      </div>
                    </div>
                    {session.recording && (
                      <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-gray-200 transition-colors flex items-center gap-1">
                        <Play className="w-3 h-3" />
                        Watch
                      </button>
                    )}
                  </div>
                  {session.notes && (
                    <p className="text-sm text-gray-600 mt-2">
                      <span className="font-medium">Notes:</span> {session.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mentor Feedback */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Feedback</h3>
            <div className="space-y-4">
              {mentorFeedback.map((feedback) => (
                <div key={feedback.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{feedback.task}</h4>
                      <p className="text-sm text-gray-500">{feedback.date}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < feedback.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">{feedback.feedback}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ask Question */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
            <h3 className="font-semibold mb-2">Have a question?</h3>
            <p className="text-white/90 mb-4 text-sm">
              Don't wait for your next session! Send your mentor a message anytime.
            </p>
            <button className="px-6 py-2 bg-white text-blue-600 rounded-lg text-sm font-medium hover:shadow-md transition-shadow flex items-center gap-2">
              Ask Your Mentor
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

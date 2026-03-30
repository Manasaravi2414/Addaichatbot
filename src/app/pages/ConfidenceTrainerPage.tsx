import { Mic, Video, Play, Trophy, TrendingUp, Award } from 'lucide-react';

export function ConfidenceTrainerPage() {
  const practices = [
    {
      id: 1,
      title: 'Self Introduction',
      description: 'Practice introducing yourself confidently',
      duration: '2-3 min',
      difficulty: 'Beginner',
      completed: true,
      score: 85,
    },
    {
      id: 2,
      title: 'Technical Interview Simulation',
      description: 'Answer common coding interview questions',
      duration: '10-15 min',
      difficulty: 'Intermediate',
      completed: false,
      score: null,
    },
    {
      id: 3,
      title: 'Project Presentation',
      description: 'Present your project with clarity and confidence',
      duration: '5-7 min',
      difficulty: 'Intermediate',
      completed: false,
      score: null,
    },
    {
      id: 4,
      title: 'Behavioral Questions',
      description: 'Practice common behavioral interview questions',
      duration: '8-10 min',
      difficulty: 'Advanced',
      completed: false,
      score: null,
    },
  ];

  const recentSessions = [
    {
      id: 1,
      type: 'Self Introduction',
      date: 'Mar 28, 2026',
      score: 85,
      feedback: {
        clarity: 90,
        confidence: 82,
        pace: 83,
      },
      aiSuggestions: [
        'Maintain eye contact with the camera',
        'Slow down slightly when nervous',
        'Great use of examples!',
      ],
    },
    {
      id: 2,
      type: 'Problem Solving',
      date: 'Mar 25, 2026',
      score: 78,
      feedback: {
        clarity: 75,
        confidence: 80,
        pace: 79,
      },
      aiSuggestions: [
        'Explain your thought process more clearly',
        'Good confidence level',
        'Try to structure your answer better',
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">AI Confidence Trainer</h2>
        <p className="text-gray-600 mt-1">
          Practice speaking and get AI-powered feedback on your confidence
        </p>
      </div>

      {/* Start New Practice */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Ready to practice?</h3>
            <p className="text-white/90 mb-6">
              Choose a practice session below or start a quick confidence check
            </p>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:shadow-lg transition-shadow flex items-center gap-2">
                <Video className="w-5 h-5" />
                Video Practice
              </button>
              <button className="px-6 py-3 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-colors flex items-center gap-2">
                <Mic className="w-5 h-5" />
                Audio Only
              </button>
            </div>
          </div>
          <Trophy className="w-24 h-24 text-white/20" />
        </div>
      </div>

      {/* Practice Sessions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-4">Practice Sessions</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {practices.map((practice) => (
            <div key={practice.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">{practice.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{practice.description}</p>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span>{practice.duration}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        practice.difficulty === 'Beginner'
                          ? 'bg-green-100 text-green-700'
                          : practice.difficulty === 'Intermediate'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {practice.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              {practice.completed ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-green-600">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">Score: {practice.score}/100</span>
                  </div>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                    Practice Again
                  </button>
                </div>
              ) : (
                <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-md transition-shadow flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" />
                  Start Practice
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Recent Sessions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-4">Recent Sessions</h3>
        <div className="space-y-4">
          {recentSessions.map((session) => (
            <div key={session.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">{session.type}</h4>
                  <p className="text-sm text-gray-500">{session.date}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{session.score}</div>
                  <div className="text-xs text-gray-500">Overall Score</div>
                </div>
              </div>

              {/* Feedback Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">Clarity</span>
                    <span className="text-xs font-medium text-gray-900">
                      {session.feedback.clarity}%
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-blue-500 h-full rounded-full"
                      style={{ width: `${session.feedback.clarity}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">Confidence</span>
                    <span className="text-xs font-medium text-gray-900">
                      {session.feedback.confidence}%
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-green-500 h-full rounded-full"
                      style={{ width: `${session.feedback.confidence}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">Pace</span>
                    <span className="text-xs font-medium text-gray-900">
                      {session.feedback.pace}%
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-purple-500 h-full rounded-full"
                      style={{ width: `${session.feedback.pace}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* AI Suggestions */}
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-xs font-medium text-gray-900 mb-2">AI Suggestions:</p>
                <ul className="space-y-1">
                  {session.aiSuggestions.map((suggestion, idx) => (
                    <li key={idx} className="text-xs text-gray-700 flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg Score</p>
              <p className="text-2xl font-bold text-gray-900">82%</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Sessions</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Improvement</p>
              <p className="text-2xl font-bold text-gray-900">+15%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

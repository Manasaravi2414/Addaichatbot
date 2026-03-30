import {
  CheckCircle,
  UserPlus,
  Send,
  ThumbsUp,
  MessageCircle,
} from 'lucide-react';

export function CommunityPage() {
  const peerGroups = [
    {
      id: 1,
      name: 'Coding Beginners',
      domain: 'Coding',
      level: 'Beginner',
      members: 45,
      activeNow: 12,
      lastActivity: '5 min ago',
      joined: false,
    },
    {
      id: 2,
      name: 'Intermediate Coders',
      domain: 'Coding',
      level: 'Intermediate',
      members: 38,
      activeNow: 8,
      lastActivity: 'Just now',
      joined: true,
    },
    {
      id: 3,
      name: 'Design Enthusiasts',
      domain: 'Design',
      level: 'Intermediate',
      members: 52,
      activeNow: 15,
      lastActivity: '2 min ago',
      joined: false,
    },
    {
      id: 4,
      name: 'Business Minds',
      domain: 'Business',
      level: 'Beginner',
      members: 29,
      activeNow: 6,
      lastActivity: '10 min ago',
      joined: false,
    },
  ];

  const discussions = [
    {
      id: 1,
      author: 'Sarah Chen',
      avatar: 'SC',
      title: 'Need help with React hooks',
      content: 'Can someone explain the difference between useState and useEffect?',
      replies: 12,
      likes: 24,
      timeAgo: '1 hour ago',
      group: 'Intermediate Coders',
    },
    {
      id: 2,
      author: 'Mike Rodriguez',
      avatar: 'MR',
      title: 'Check out my first project!',
      content: 'Just finished building a weather app. Would love feedback!',
      replies: 8,
      likes: 45,
      timeAgo: '3 hours ago',
      group: 'Intermediate Coders',
    },
    {
      id: 3,
      author: 'Emma Watson',
      avatar: 'EW',
      title: 'Best resources for learning algorithms?',
      content: 'Looking for recommendations on algorithm learning resources',
      replies: 15,
      likes: 31,
      timeAgo: '5 hours ago',
      group: 'Intermediate Coders',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Peer Learning Community</h2>
        <p className="text-gray-600 mt-1">Connect, collaborate, and learn together</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Peer Groups */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="font-semibold text-gray-900">Available Groups</h3>
          {peerGroups.map((group) => (
            <div key={group.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">{group.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded">
                      {group.domain}
                    </span>
                    <span>{group.level}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Members</span>
                  <span className="font-medium text-gray-900">{group.members}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Active now</span>
                  <span className="font-medium text-green-600">{group.activeNow}</span>
                </div>
                <div className="text-xs text-gray-500">Last activity: {group.lastActivity}</div>
              </div>
              {group.joined ? (
                <button className="w-full px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Joined
                </button>
              ) : (
                <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-md transition-shadow flex items-center justify-center gap-2">
                  <UserPlus className="w-4 h-4" />
                  Join Group
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Discussions Feed */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Recent Discussions</h3>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-md transition-shadow">
              New Discussion
            </button>
          </div>

          {discussions.map((discussion) => (
            <div key={discussion.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
                  {discussion.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-gray-900">{discussion.author}</span>
                    <span className="text-xs text-gray-500">{discussion.timeAgo}</span>
                    <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
                      {discussion.group}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{discussion.title}</h4>
                  <p className="text-gray-700 mb-3">{discussion.content}</p>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{discussion.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span>{discussion.replies} replies</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Quick Chat */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                AJ
              </div>
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  placeholder="Share your thoughts with the community..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-md transition-shadow flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  <span className="text-sm font-medium">Post</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

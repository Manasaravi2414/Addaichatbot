import { Link } from 'react-router';
import {
  Users,
  GraduationCap,
  TrendingUp,
  Award,
  Code,
  Palette,
  Briefcase,
  UserCheck,
  UserX,
  BarChart3,
  Download,
  Filter,
  Search,
  ArrowLeft,
  Brain,
  MessageSquare,
  Calendar,
  Star,
} from 'lucide-react';

export function NGODashboard() {
  // Overview Stats
  const stats = {
    totalStudents: 120,
    activeMentors: 28,
    avgProgress: 68,
    completionRate: 75,
  };

  // Gender Distribution
  const genderData = {
    male: 65,
    female: 55,
  };

  // Domain Distribution
  const domainData = [
    { name: 'Coding', count: 50, color: 'blue' },
    { name: 'Design', count: 40, color: 'purple' },
    { name: 'Business', count: 30, color: 'green' },
  ];

  // Age Group Distribution
  const ageGroups = [
    { name: 'Primary (Below 5th)', count: 20, percentage: 17 },
    { name: 'Middle (6-8)', count: 35, percentage: 29 },
    { name: 'Secondary (8-10)', count: 45, percentage: 38 },
    { name: 'Senior (Above 10)', count: 20, percentage: 17 },
  ];

  // Student List
  const students = [
    {
      id: 1,
      name: 'Alex Johnson',
      age: 15,
      ageGroup: 'Secondary',
      domain: 'Coding',
      level: 'Intermediate',
      progress: 65,
      mentor: 'Dr. Rachel Martinez',
      lastActive: '2 hours ago',
      status: 'active',
    },
    {
      id: 2,
      name: 'Sarah Chen',
      age: 14,
      ageGroup: 'Secondary',
      domain: 'Design',
      level: 'Beginner',
      progress: 45,
      mentor: 'Prof. James Wilson',
      lastActive: '1 day ago',
      status: 'active',
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      age: 16,
      ageGroup: 'Senior',
      domain: 'Coding',
      level: 'Advanced',
      progress: 85,
      mentor: 'Dr. Rachel Martinez',
      lastActive: '5 hours ago',
      status: 'active',
    },
    {
      id: 4,
      name: 'Emma Watson',
      age: 13,
      ageGroup: 'Middle',
      domain: 'Business',
      level: 'Beginner',
      progress: 30,
      mentor: 'Ms. Lisa Anderson',
      lastActive: '7 days ago',
      status: 'inactive',
    },
    {
      id: 5,
      name: 'David Kim',
      age: 15,
      ageGroup: 'Secondary',
      domain: 'Coding',
      level: 'Intermediate',
      progress: 72,
      mentor: 'Dr. Rachel Martinez',
      lastActive: '1 hour ago',
      status: 'active',
    },
  ];

  // Mentors List
  const mentors = [
    {
      id: 1,
      name: 'Dr. Rachel Martinez',
      domain: 'Coding',
      level: 'Advanced',
      students: 15,
      rating: 4.9,
      activeHours: 45,
      languages: ['English', 'Spanish'],
    },
    {
      id: 2,
      name: 'Prof. James Wilson',
      domain: 'Design',
      level: 'Advanced',
      students: 12,
      rating: 4.8,
      activeHours: 38,
      languages: ['English'],
    },
    {
      id: 3,
      name: 'Ms. Lisa Anderson',
      domain: 'Business',
      level: 'Intermediate',
      students: 10,
      rating: 4.7,
      activeHours: 32,
      languages: ['English', 'French'],
    },
    {
      id: 4,
      name: 'Mr. John Smith',
      domain: 'Coding',
      level: 'Intermediate',
      students: 8,
      rating: 4.6,
      activeHours: 28,
      languages: ['English'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm">Back to Student View</span>
              </Link>
              <div className="w-px h-8 bg-gray-300" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">NGO Admin Dashboard</h1>
                  <p className="text-xs text-gray-500">EduPathway AI - Analytics & Management</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm">
                <Download className="w-4 h-4" />
                Export Report
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-semibold">
                NA
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalStudents}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Mentors</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeMentors}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg Progress</p>
                <p className="text-2xl font-bold text-gray-900">{stats.avgProgress}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Completion Rate</p>
                <p className="text-2xl font-bold text-gray-900">{stats.completionRate}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Gender Distribution */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Gender Distribution</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Boys</span>
                  <span className="text-sm font-medium text-gray-900">{genderData.male}</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-blue-500 h-full rounded-full"
                    style={{ width: `${(genderData.male / stats.totalStudents) * 100}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Girls</span>
                  <span className="text-sm font-medium text-gray-900">{genderData.female}</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-pink-500 h-full rounded-full"
                    style={{ width: `${(genderData.female / stats.totalStudents) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Domain Distribution */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Domain Distribution</h3>
            <div className="space-y-4">
              {domainData.map((domain) => (
                <div key={domain.name} className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg bg-${domain.color}-100 flex items-center justify-center`}
                  >
                    {domain.name === 'Coding' ? (
                      <Code className={`w-5 h-5 text-${domain.color}-600`} />
                    ) : domain.name === 'Design' ? (
                      <Palette className={`w-5 h-5 text-${domain.color}-600`} />
                    ) : (
                      <Briefcase className={`w-5 h-5 text-${domain.color}-600`} />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">{domain.name}</span>
                      <span className="text-sm text-gray-600">{domain.count}</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`bg-${domain.color}-500 h-full rounded-full`}
                        style={{ width: `${(domain.count / stats.totalStudents) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Age Group Distribution */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Age Group Distribution</h3>
            <div className="space-y-3">
              {ageGroups.map((group) => (
                <div key={group.name} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{group.name}</p>
                    <p className="text-xs text-gray-500">{group.count} students</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-blue-600">{group.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Students Table */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Students Overview
            </h3>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm">
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Student</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Age Group</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Domain</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Level</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Progress</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Mentor</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
                          {student.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{student.name}</p>
                          <p className="text-xs text-gray-500">Age: {student.age}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm text-gray-700">{student.ageGroup}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                        {student.domain}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm text-gray-700">{student.level}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden w-20">
                          <div
                            className="bg-green-500 h-full rounded-full"
                            style={{ width: `${student.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-600">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <p className="text-sm text-gray-700">{student.mentor}</p>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        {student.status === 'active' ? (
                          <>
                            <UserCheck className="w-4 h-4 text-green-600" />
                            <span className="text-xs text-green-600">Active</span>
                          </>
                        ) : (
                          <>
                            <UserX className="w-4 h-4 text-red-600" />
                            <span className="text-xs text-red-600">Inactive</span>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mentors Table */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Mentors Overview
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Mentor</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Domain</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Level</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Students</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Rating</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                    Active Hours
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Languages</th>
                </tr>
              </thead>
              <tbody>
                {mentors.map((mentor) => (
                  <tr key={mentor.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white text-sm font-semibold">
                          {mentor.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
                        <p className="font-medium text-gray-900 text-sm">{mentor.name}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                        {mentor.domain}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm text-gray-700">{mentor.level}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm text-gray-900 font-medium">{mentor.students}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-900 font-medium">{mentor.rating}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm text-gray-700">{mentor.activeHours}h</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-1">
                        {mentor.languages.map((lang) => (
                          <span
                            key={lang}
                            className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

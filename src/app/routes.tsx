import { createBrowserRouter } from 'react-router';
import { StudentLayout } from './layouts/StudentLayout';
import { OverviewPage } from './pages/OverviewPage';
import { LearningPage } from './pages/LearningPage';
import { CommunityPage } from './pages/CommunityPage';
import { MentorshipPage } from './pages/MentorshipPage';
import { StudyPlanPage } from './pages/StudyPlanPage';
import { ConfidenceTrainerPage } from './pages/ConfidenceTrainerPage';
import { NGODashboard } from './pages/NGODashboard';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <StudentLayout />,
    children: [
      { index: true, element: <OverviewPage /> },
      { path: 'learning', element: <LearningPage /> },
      { path: 'community', element: <CommunityPage /> },
      { path: 'mentorship', element: <MentorshipPage /> },
      { path: 'study-plan', element: <StudyPlanPage /> },
      { path: 'confidence-trainer', element: <ConfidenceTrainerPage /> },
    ],
  },
  {
    path: '/ngo',
    element: <NGODashboard />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

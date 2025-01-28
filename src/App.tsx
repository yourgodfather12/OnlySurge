import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RootLayout } from '@/components/layouts/RootLayout';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { PublicRoute } from '@/components/PublicRoute';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

// Lazy loaded components with proper default export handling
const LandingPage = lazy(() => import('@/pages/LandingPage').then(module => ({ default: module.default || module.LandingPage })));
const Auth = lazy(() => import('@/pages/Auth').then(module => ({ default: module.default || module.Auth })));
const Dashboard = lazy(() => import('@/pages/Dashboard').then(module => ({ default: module.default || module.Dashboard })));
const Content = lazy(() => import('@/pages/Content').then(module => ({ default: module.default || module.Content })));
const Schedule = lazy(() => import('@/pages/Schedule').then(module => ({ default: module.default || module.Schedule })));
const Messages = lazy(() => import('@/pages/Messages').then(module => ({ default: module.default || module.Messages })));
const Analytics = lazy(() => import('@/pages/Analytics').then(module => ({ default: module.default || module.Analytics })));
const Settings = lazy(() => import('@/pages/Settings').then(module => ({ default: module.default || module.Settings })));
const Automation = lazy(() => import('@/pages/Automation').then(module => ({ default: module.default || module.Automation })));
const Verification = lazy(() => import('@/pages/Verification').then(module => ({ default: module.default || module.Verification })));
const Subscribers = lazy(() => import('@/pages/Subscribers').then(module => ({ default: module.default || module.Subscribers })));
const Integrations = lazy(() => import('@/pages/Integrations').then(module => ({ default: module.default || module.Integrations })));
const Billing = lazy(() => import('@/pages/Billing').then(module => ({ default: module.default || module.Billing })));
const About = lazy(() => import('@/pages/About').then(module => ({ default: module.default || module.About })));
const Blog = lazy(() => import('@/pages/Blog').then(module => ({ default: module.default || module.Blog })));
const Features = lazy(() => import('@/pages/Features').then(module => ({ default: module.default || module.Features })));
const Pricing = lazy(() => import('@/pages/Pricing').then(module => ({ default: module.default || module.Pricing })));
const Help = lazy(() => import('@/pages/Help').then(module => ({ default: module.default || module.Help })));
const Legal = lazy(() => import('@/pages/Legal').then(module => ({ default: module.default || module.Legal })));
const Affiliate = lazy(() => import('@/pages/Affiliate').then(module => ({ default: module.default || module.Affiliate })));

export default function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route element={<RootLayout />}>
          {/* Public Routes */}
          <Route index element={<LandingPage />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="features" element={<Features />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="help" element={<Help />} />
          <Route path="legal" element={<Legal />} />
          <Route path="affiliate" element={<Affiliate />} />

          {/* Auth Routes */}
          <Route
            path="signin"
            element={
              <PublicRoute>
                <Auth mode="signin" />
              </PublicRoute>
            }
          />
          <Route
            path="signup"
            element={
              <PublicRoute>
                <Auth mode="signup" />
              </PublicRoute>
            }
          />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="content" element={<Content />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="messages" element={<Messages />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="automation" element={<Automation />} />
            <Route path="settings" element={<Settings />} />
            <Route path="verification" element={<Verification />} />
            <Route path="subscribers" element={<Subscribers />} />
            <Route path="integrations" element={<Integrations />} />
            <Route path="billing" element={<Billing />} />
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
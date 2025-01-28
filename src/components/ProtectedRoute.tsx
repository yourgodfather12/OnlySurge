import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { DashboardLayout } from '@/components/layouts/DashboardLayout';

export function ProtectedRoute() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
} 
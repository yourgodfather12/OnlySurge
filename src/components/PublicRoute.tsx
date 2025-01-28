import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface PublicRouteProps {
  children: React.ReactNode;
}

export function PublicRoute({ children }: PublicRouteProps) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
} 
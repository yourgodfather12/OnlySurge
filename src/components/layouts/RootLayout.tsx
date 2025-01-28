import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '@/contexts/AuthContext';
import { LoadingProvider } from '@/contexts/LoadingContext';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export function RootLayout() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <LoadingProvider>
          <Suspense fallback={<LoadingSpinner />}>
            <Outlet />
          </Suspense>
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 5000,
              style: {
                background: 'rgb(var(--background))',
                color: 'rgb(var(--foreground))',
                border: '1px solid rgb(var(--border))',
              },
            }}
          />
        </LoadingProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
} 
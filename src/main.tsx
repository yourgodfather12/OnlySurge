import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
import './index.css';

// Initialize React Query client with optimal settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Create router with future flags enabled
const router = createBrowserRouter(
  [
    {
      path: '/*',
      element: <App />,
      errorElement: <ErrorBoundary />,
    }
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

// Performance monitoring
if (process.env.NODE_ENV === 'development') {
  const { webVitals } = await import('./lib/webVitals');
  webVitals();
}

// Create root element
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// Create root and render app with providers
createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
    </QueryClientProvider>
  </StrictMode>
);

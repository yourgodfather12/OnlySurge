import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { useAuth } from '@/contexts/AuthContext';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, isLoading } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-[#0A0A0F]">
      <Navigation 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      
      <main className={cn(
        "flex-1",
        "transition-all duration-300 ease-in-out",
        "px-4 py-4 md:px-6 md:py-8",
        isSidebarOpen ? "md:ml-64" : "md:ml-20"
      )}>
        {children}
      </main>
    </div>
  );
} 
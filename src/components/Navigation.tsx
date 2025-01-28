import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  FolderHeart,
  Calendar,
  MessageSquare,
  BarChart2,
  Bot,
  Settings,
  Shield,
  Users,
  CreditCard,
  Link2,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  Gauge,
  Bell,
  Zap
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip } from './ui/Tooltip';
import { cn } from '@/lib/utils';
import { useAnimationConfig } from '@/hooks/useAnimationConfig';
import { Transition } from './ui/Transition';

interface NavigationProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  badge?: string | number;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

export function Navigation({ isOpen, onToggle }: NavigationProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut, profile } = useAuth();
  const sidebarRef = useRef<HTMLElement>(null);
  const { variants, transitions } = useAnimationConfig();

  const navGroups: NavGroup[] = [
    {
      title: 'Overview',
      items: [
        { 
          name: 'Dashboard', 
          path: '/dashboard', 
          icon: <LayoutDashboard size={18} />,
          badge: '3'
        },
        { 
          name: 'Analytics', 
          path: '/analytics', 
          icon: <BarChart2 size={18} /> 
        },
        { 
          name: 'Performance', 
          path: '/performance', 
          icon: <Gauge size={18} /> 
        },
      ]
    },
    {
      title: 'Content',
      items: [
        { name: 'Content', path: '/content', icon: <FolderHeart size={18} /> },
        { name: 'Schedule', path: '/schedule', icon: <Calendar size={18} /> },
        { name: 'Messages', path: '/messages', icon: <MessageSquare size={18} />, badge: 5 },
      ]
    },
    {
      title: 'Automation',
      items: [
        { name: 'Automation', path: '/automation', icon: <Bot size={18} /> },
        { name: 'Integrations', path: '/integrations', icon: <Link2 size={18} /> },
        { name: 'Workflows', path: '/workflows', icon: <Zap size={18} /> },
      ]
    },
    {
      title: 'Management',
      items: [
        { name: 'Settings', path: '/settings', icon: <Settings size={18} /> },
        { name: 'Verification', path: '/verification', icon: <Shield size={18} /> },
        { name: 'Subscribers', path: '/subscribers', icon: <Users size={18} /> },
        { name: 'Billing', path: '/billing', icon: <CreditCard size={18} /> },
      ]
    }
  ];

  // Close sidebar on mobile when route changes
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile && isOpen) {
      onToggle();
    }
  }, [location.pathname, isOpen, onToggle]);

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        onClick={onToggle}
        className="fixed top-4 right-4 z-50 p-2.5 bg-[#0A0A0F]/95 border border-white/[0.08] rounded-lg backdrop-blur-xl md:hidden hover:bg-white/[0.08] active:scale-95 transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-5 h-5 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0A0A0F]/95 backdrop-blur-sm z-40 md:hidden"
            onClick={onToggle}
          />
        )}
      </AnimatePresence>

      {/* Navigation Menu */}
      <aside
        ref={sidebarRef}
        className={cn(
          'fixed left-0 top-0 h-screen bg-[#0A0A0F] border-r border-white/[0.08] transition-all duration-300 ease-in-out z-50',
          'flex flex-col',
          'md:sticky md:top-0 md:z-0',
          isOpen ? 'w-[300px]' : 'w-0 md:w-[80px]',
          'transform md:transform-none',
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
          'shadow-xl shadow-purple-500/5'
        )}
      >
        <Transition show type="fade">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="h-16 px-5 flex items-center justify-between border-b border-white/[0.08] bg-white/[0.02]">
              <Link 
                to="/dashboard" 
                className={cn(
                  "text-base font-medium text-white transition-all duration-200 flex items-center gap-3",
                  !isOpen && 'md:opacity-0'
                )}
              >
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 ring-1 ring-purple-500/20 flex items-center justify-center">
                  <Zap size={20} className="text-purple-400" />
                </div>
                {isOpen && <span className="font-semibold text-lg">OnlySurge</span>}
              </Link>
              <motion.button
                onClick={onToggle}
                className="p-2 rounded-lg hover:bg-white/[0.08] transition-all duration-200 hidden md:block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft
                  size={18}
                  className={cn(
                    'text-white/60 transition-transform duration-200',
                    !isOpen && 'rotate-180'
                  )}
                />
              </motion.button>
            </div>

            {/* Profile */}
            {isOpen && (
              <div className="px-4 py-5 bg-white/[0.02] border-b border-white/[0.08]">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 ring-1 ring-purple-500/20 flex items-center justify-center">
                      {profile?.avatar_url ? (
                        <img
                          src={profile.avatar_url}
                          alt={profile.display_name}
                          className="w-full h-full rounded-xl object-cover"
                        />
                      ) : (
                        <span className="text-base font-medium text-purple-200">
                          C
                        </span>
                      )}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full ring-2 ring-[#0A0A0F]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-white truncate">
                      {profile?.display_name || 'Creator'}
                    </p>
                    <p className="text-sm text-purple-200/60 truncate">
                      @{profile?.username || 'creator'}
                    </p>
                  </div>
                  <motion.button 
                    className="p-2 rounded-lg hover:bg-white/[0.08] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Bell size={18} className="text-white/60" />
                  </motion.button>
                </div>
              </div>
            )}

            {/* Navigation Items */}
            <nav className="flex-1 px-3 py-4 space-y-8 overflow-y-auto">
              {navGroups.map((group, index) => (
                <div key={group.title} className="space-y-2">
                  {isOpen && (
                    <h3 className="px-3 text-sm font-medium text-white/40 uppercase tracking-wider">
                      {group.title}
                    </h3>
                  )}
                  {group.items.map((item) => (
                    <motion.div 
                      key={item.path} 
                      className="relative group"
                      variants={variants.slideInFromLeft}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={cn(
                          'flex items-center h-11 px-3 rounded-lg transition-all duration-200',
                          'hover:bg-purple-500/10 hover:shadow-sm hover:shadow-purple-500/10',
                          location.pathname === item.path 
                            ? 'bg-purple-500/10 text-purple-100 shadow-sm shadow-purple-500/10' 
                            : 'text-white/50 hover:text-purple-100',
                          !isOpen && 'md:justify-center md:h-11 md:w-11'
                        )}
                      >
                        <span className={cn(
                          "shrink-0 w-6 h-6 flex items-center justify-center",
                          location.pathname === item.path 
                            ? 'text-purple-400'
                            : 'text-white/50 group-hover:text-purple-400'
                        )}>
                          {item.icon}
                        </span>
                        {isOpen && (
                          <span className="ml-3 text-[14px] font-medium flex-1">
                            {item.name}
                          </span>
                        )}
                        {isOpen && item.badge && (
                          <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400">
                            {item.badge}
                          </span>
                        )}
                        {!isOpen && (
                          <div className="hidden md:block">
                            <Tooltip content={item.name} side="right">
                              <span className="sr-only">{item.name}</span>
                            </Tooltip>
                          </div>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ))}
            </nav>

            {/* Footer */}
            <div className="mt-auto border-t border-white/[0.08] px-3 py-4 bg-white/[0.02]">
              <motion.button
                onClick={signOut}
                className={cn(
                  'flex items-center w-full h-11 px-3 rounded-lg transition-all duration-200',
                  'text-white/50 hover:text-purple-100 hover:bg-purple-500/10 hover:shadow-sm hover:shadow-purple-500/10',
                  !isOpen && 'md:justify-center'
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="w-6 h-6 flex items-center justify-center">
                  <LogOut size={18} className="shrink-0 group-hover:text-purple-400" />
                </span>
                {isOpen && (
                  <span className="ml-3 text-[14px] font-medium">
                    Sign Out
                  </span>
                )}
                {!isOpen && (
                  <div className="hidden md:block">
                    <Tooltip content="Sign Out" side="right">
                      <span className="sr-only">Sign Out</span>
                    </Tooltip>
                  </div>
                )}
              </motion.button>
            </div>
          </div>
        </Transition>
      </aside>
    </>
  );
}
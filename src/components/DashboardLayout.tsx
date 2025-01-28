import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { useAuth } from '../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Settings } from 'lucide-react';

export function DashboardLayout() {
  const { profile } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);

  if (!profile) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-black text-white">
      <div className="flex min-h-screen">
        <Navigation />
        <main className="flex-1 relative">
          {/* Header */}
          <div className="sticky top-0 z-40 bg-purple-900/90 backdrop-blur-sm border-b border-purple-800/30">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold gradient-text">
                  {profile.display_name || profile.onlyfans_username}
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 hover:bg-purple-800/30 rounded-lg transition-colors relative"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
                </button>
                <button className="p-2 hover:bg-purple-800/30 rounded-lg transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Notifications Panel */}
          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-6 top-16 w-80 bg-purple-900/90 backdrop-blur-sm border border-purple-800/30 rounded-lg shadow-xl z-50"
              >
                <div className="p-4">
                  <h3 className="font-semibold mb-4">Notifications</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start gap-3 hover:bg-purple-800/20 p-2 rounded-lg transition-colors">
                        <div className="w-2 h-2 mt-2 bg-purple-400 rounded-full" />
                        <div>
                          <p className="text-sm">New subscriber joined your page</p>
                          <span className="text-xs text-gray-400">2 hours ago</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
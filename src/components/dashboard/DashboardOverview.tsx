import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Progress } from '../ui/Progress';
import { Avatar } from '../ui/Avatar';
import { Tooltip } from '../ui/Tooltip';
import { Alert } from '../ui/Alert';
import {
  TrendingUp,
  Users,
  DollarSign,
  Heart,
  Calendar,
  ArrowRight,
  Star,
  MessageSquare,
  Clock,
  ChevronRight,
  Sparkles,
  Bell,
  Zap,
  Target,
  Award
} from 'lucide-react';

interface DashboardOverviewProps {
  profile: any;
  stats: {
    earnings: number;
    subscribers: number;
    engagement: number;
    posts: number;
  };
}

export function DashboardOverview({ profile, stats }: DashboardOverviewProps) {
  const [showTip, setShowTip] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState<'day' | 'week' | 'month'>('week');

  // Calculate growth percentages
  const calculateGrowth = (current: number, previous: number) => {
    return ((current - previous) / previous) * 100;
  };

  const earningsGrowth = calculateGrowth(stats.earnings, stats.earnings * 0.9);
  const subscribersGrowth = calculateGrowth(stats.subscribers, stats.subscribers * 0.85);
  const engagementGrowth = calculateGrowth(stats.engagement, stats.engagement * 0.95);

  // Goals progress
  const goals = {
    monthlyEarnings: {
      current: stats.earnings,
      target: 10000,
      label: 'Monthly Earnings'
    },
    newSubscribers: {
      current: stats.subscribers - Math.floor(stats.subscribers * 0.85),
      target: 100,
      label: 'New Subscribers'
    },
    contentCreated: {
      current: 15,
      target: 20,
      label: 'Content Pieces'
    }
  };

  return (
    <div className="content-section">
      {/* Quick Tip */}
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="quick-tip">
              <Zap className="quick-tip-icon w-5 h-5 shrink-0" />
              <p>
                Your best performing content is posted between 6-8 PM. Consider scheduling your next post during this timeframe for maximum engagement.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Welcome Section */}
      <div className="dashboard-card gradient-bg">
        <div className="relative flex items-center gap-6">
          <Avatar
            src={profile.avatar_url || `https://source.unsplash.com/random/100x100?portrait`}
            size="xl"
            status="online"
          />
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-2"
            >
              Welcome back, {profile.display_name || profile.onlyfans_username}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <Badge variant="success" icon={<Star className="w-3 h-3" />}>
                Top Creator
              </Badge>
              <Badge variant="info" icon={<Award className="w-3 h-3" />}>
                Level {Math.floor(stats.subscribers / 100) + 1}
              </Badge>
              <span className="text-muted-foreground">
                Last login: {new Date().toLocaleDateString()}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="dashboard-grid mt-8">
          <div className="dashboard-stat">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <DollarSign className="w-4 h-4" />
              <span>Today's Earnings</span>
            </div>
            <p className="dashboard-stat-value">${(stats.earnings / 30).toFixed(2)}</p>
            <div className="dashboard-stat-trend dashboard-trend-up">
              <TrendingUp className="w-3 h-3" />
              <span>+12.5% today</span>
            </div>
          </div>

          <div className="dashboard-stat">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Users className="w-4 h-4" />
              <span>Active Subscribers</span>
            </div>
            <p className="dashboard-stat-value">{stats.subscribers}</p>
            <div className="dashboard-stat-trend dashboard-trend-up">
              <TrendingUp className="w-3 h-3" />
              <span>+{subscribersGrowth.toFixed(1)}% this month</span>
            </div>
          </div>

          <div className="dashboard-stat">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Heart className="w-4 h-4" />
              <span>Engagement Rate</span>
            </div>
            <p className="dashboard-stat-value">{stats.engagement}%</p>
            <div className="dashboard-stat-trend dashboard-trend-up">
              <TrendingUp className="w-3 h-3" />
              <span>+{engagementGrowth.toFixed(1)}% this week</span>
            </div>
          </div>

          <div className="dashboard-stat">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Bell className="w-4 h-4" />
              <span>New Messages</span>
            </div>
            <p className="dashboard-stat-value">{Math.floor(Math.random() * 50 + 10)}</p>
            <div className="dashboard-stat-trend">
              <Clock className="w-3 h-3" />
              <span>Last hour</span>
            </div>
          </div>
        </div>
      </div>

      {/* Goals Progress */}
      <div className="dashboard-card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Target className="w-5 h-5" />
            Monthly Goals
          </h3>
          <div className="flex gap-2">
            {['day', 'week', 'month'].map((range) => (
              <Button
                key={range}
                variant={selectedTimeRange === range ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setSelectedTimeRange(range as any)}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(goals).map(([key, goal]) => (
            <div key={key} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="dashboard-stat-title">{goal.label}</span>
                <span className="text-sm text-muted-foreground">
                  {goal.current} / {goal.target}
                </span>
              </div>
              <div className="dashboard-progress">
                <div 
                  className="dashboard-progress-bar"
                  style={{ width: `${Math.min((goal.current / goal.target) * 100, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="content-grid">
        {/* Earnings Card */}
        <div className="dashboard-card dashboard-grid-wide">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Earnings Overview</h3>
            <Tooltip content="View detailed analytics">
              <Button
                variant="ghost"
                size="sm"
                icon={<ChevronRight className="w-4 h-4" />}
              >
                Details
              </Button>
            </Tooltip>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="dashboard-stat-value">${stats.earnings.toFixed(2)}</p>
                <p className="text-muted-foreground">Total earnings this month</p>
              </div>
              <Badge
                variant="success"
                icon={<TrendingUp className="w-3 h-3" />}
              >
                +{earningsGrowth.toFixed(1)}%
              </Badge>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Subscriptions', value: 65, variant: 'default' },
                { label: 'Tips', value: 25, variant: 'success' },
                { label: 'Messages', value: 10, variant: 'warning' }
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="dashboard-progress">
                    <div 
                      className="dashboard-progress-bar"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="dashboard-card">
          <h3 className="text-lg font-semibold mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { type: 'subscription', user: 'New Fan', time: '2m ago', amount: '$9.99' },
              { type: 'tip', user: 'Loyal Fan', time: '15m ago', amount: '$50.00' },
              { type: 'message', user: 'Fan', time: '1h ago', amount: '$15.00' }
            ].map((activity, i) => (
              <div key={i} className="dashboard-activity">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[hsl(var(--secondary)_/_0.2)] flex items-center justify-center">
                    {activity.type === 'subscription' ? (
                      <Users className="w-4 h-4 text-[hsl(var(--primary))]" />
                    ) : activity.type === 'tip' ? (
                      <DollarSign className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <MessageSquare className="w-4 h-4 text-blue-500" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>
                      {activity.type === 'subscription'
                        ? ' subscribed to your profile'
                        : activity.type === 'tip'
                        ? ' sent you a tip'
                        : ' purchased a message'
                      }
                    </p>
                    <div className="flex items-center gap-2 dashboard-activity-time">
                      <Clock className="w-3 h-3" />
                      <span>{activity.time}</span>
                      <span>•</span>
                      <span className="text-emerald-500">{activity.amount}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Performance */}
      <div className="dashboard-card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Top Performing Content</h3>
          <Button
            variant="outline"
            size="sm"
            icon={<Sparkles className="w-4 h-4" />}
          >
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg hover-lift"
            >
              <img
                src={`https://source.unsplash.com/random/400x300?model${i}`}
                alt={`Content ${i + 1}`}
                className="w-full h-48 object-cover rounded-lg transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="success">Top Post</Badge>
                  <span className="text-sm">{Math.floor(Math.random() * 1000 + 500)} views</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{Math.floor(Math.random() * 100 + 50)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    <span>{Math.floor(Math.random() * 50 + 10)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
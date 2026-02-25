import { ArrowLeft, Baby, Activity, Calendar, Info, TrendingUp, AlertCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface FetalHealthScreenProps {
  onBack: () => void;
}

export function FetalHealthScreen({ onBack }: FetalHealthScreenProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-[#407CE2] px-6 pt-12 pb-8 rounded-b-[32px]">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <Baby className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-white text-2xl font-medium mb-1">Fetal Health</h1>
            <p className="text-white/80 text-sm">Movement tracking & awareness</p>
          </div>
        </div>
      </div>

      {/* Research Badge */}
      <div className="px-6 py-6">
        <Card className="border-none bg-[#E8F1FD] dark:bg-blue-900/30 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#407CE2] flex-shrink-0 mt-0.5" />
              <div>
                <Badge className="bg-[#407CE2] text-white text-xs mb-2 border-none">Phase 2 Feature</Badge>
                <p className="text-sm text-gray-900 dark:text-gray-100 leading-relaxed">
                  This feature is under clinical validation and research. It provides awareness tools but
                  is <strong>not a diagnostic device</strong>. Always follow your healthcare provider's
                  guidance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Movement */}
      <div className="px-6 mb-6">
        <h2 className="text-gray-900 dark:text-white font-semibold mb-4">Today's Fetal Activity</h2>
        <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Movements detected</p>
                <p className="text-4xl text-gray-900 dark:text-white font-semibold">8</p>
              </div>
              <div className="w-20 h-20 bg-[#E8F1FD] dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <Activity className="w-10 h-10 text-[#407CE2]" />
              </div>
            </div>

            <div className="bg-[#407CE2]/10 border border-[#407CE2] dark:border-blue-700 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-[#407CE2] rounded-full" />
                <p className="text-sm text-gray-900 dark:text-white font-medium">Active today</p>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                Good activity level for week 18. Baby is growing and becoming more active!
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-2xl text-gray-900 dark:text-white font-semibold">8</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Today</p>
              </div>
              <div>
                <p className="text-2xl text-gray-900 dark:text-white font-semibold">12</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Yesterday</p>
              </div>
              <div>
                <p className="text-2xl text-gray-900 dark:text-white font-semibold">9.5</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Avg/day</p>
              </div>
            </div>

            <Button className="w-full mt-6 bg-[#407CE2] hover:bg-[#3568c4] text-white">
              Log Movement
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Pattern */}
      <div className="px-6 mb-6">
        <h2 className="text-gray-900 dark:text-white font-semibold mb-4">Weekly Pattern</h2>
        <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-5 h-5 text-[#407CE2]" />
              <div>
                <p className="text-sm text-gray-900 dark:text-white font-medium">Activity increasing</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Baby is more active this week</p>
              </div>
            </div>

            {/* Movement Chart */}
            <div className="space-y-3">
              {[
                { day: 'Mon', count: 12, percent: 100 },
                { day: 'Tue', count: 9, percent: 75 },
                { day: 'Wed', count: 10, percent: 83 },
                { day: 'Thu', count: 11, percent: 92 },
                { day: 'Fri', count: 8, percent: 67 },
                { day: 'Sat', count: 7, percent: 58 },
                { day: 'Today', count: 8, percent: 67, active: true },
              ].map((item) => (
                <div key={item.day} className="flex items-center gap-3">
                  <p className={`text-xs w-12 ${item.active ? 'text-[#407CE2] font-semibold' : 'text-gray-600 dark:text-gray-400'}`}>
                    {item.day}
                  </p>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${item.active ? 'bg-[#407CE2]' : 'bg-blue-400 dark:bg-blue-600'}`}
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 w-6 text-right">{item.count}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Educational Content */}
      <div className="px-6 mb-6">
        <h2 className="text-gray-900 dark:text-white font-semibold mb-4">Understanding Fetal Movement</h2>
        <div className="space-y-4">
          <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm">
            <CardContent className="p-5">
              <h3 className="text-gray-900 dark:text-white font-medium mb-2 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#407CE2]" />
                Week 18
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                At week 18, you may start feeling "flutters" or "quickening" – the first fetal movements.
                These movements become more regular as your baby grows stronger.
              </p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm">
            <CardContent className="p-5">
              <h3 className="text-gray-900 dark:text-white font-medium mb-2">What's Normal?</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#407CE2] rounded-full mt-1.5 flex-shrink-0" />
                  Movements can vary throughout the day
                </li>
                <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#407CE2] rounded-full mt-1.5 flex-shrink-0" />
                  Baby may be more active after meals
                </li>
                <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#407CE2] rounded-full mt-1.5 flex-shrink-0" />
                  Reduced movement during sleep cycles
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-900/20 shadow-sm">
            <CardContent className="p-5">
              <h3 className="text-gray-900 dark:text-white font-medium mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                When to Contact Doctor
              </h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-rose-600 dark:bg-rose-400 rounded-full mt-1.5 flex-shrink-0" />
                  Sudden decrease in movements
                </li>
                <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-rose-600 dark:bg-rose-400 rounded-full mt-1.5 flex-shrink-0" />
                  No movements for several hours
                </li>
                <li className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-rose-600 dark:bg-rose-400 rounded-full mt-1.5 flex-shrink-0" />
                  Unusual patterns of movement
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6">
        <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm">
          <CardContent className="p-5">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button className="w-full bg-[#407CE2] hover:bg-[#3568c4] text-white">
                Start Kick Count Session
              </Button>
              <Button variant="outline" className="w-full border-[#407CE2] text-[#407CE2] hover:bg-[#E8F1FD] dark:hover:bg-blue-900/30">
                View Movement History
              </Button>
              <Button variant="outline" className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                Share with Doctor
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
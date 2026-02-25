import { AlertCircle, Bell, CheckCircle, Info, PhoneCall, X } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface AlertCardProps {
  severity: 'info' | 'monitor' | 'attention' | 'emergency';
  title: string;
  message: string;
  time: string;
  action?: string;
  onDismiss?: () => void;
}

function AlertCard({ severity, title, message, time, action, onDismiss }: AlertCardProps) {
  const severityConfig = {
    info: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      icon: <Info className="w-5 h-5 text-white" />,
      iconBg: 'bg-[#407CE2]',
      badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
      badgeText: 'Info',
    },
    monitor: {
      bg: 'bg-amber-50 dark:bg-amber-900/20',
      border: 'border-amber-200 dark:border-amber-800',
      icon: <Bell className="w-5 h-5 text-white" />,
      iconBg: 'bg-[#407CE2]',
      badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
      badgeText: 'Monitor',
    },
    attention: {
      bg: 'bg-orange-50 dark:bg-orange-900/20',
      border: 'border-orange-200 dark:border-orange-800',
      icon: <AlertCircle className="w-5 h-5 text-white" />,
      iconBg: 'bg-[#407CE2]',
      badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
      badgeText: 'Attention',
    },
    emergency: {
      bg: 'bg-rose-50 dark:bg-rose-900/20',
      border: 'border-rose-200 dark:border-rose-800',
      icon: <PhoneCall className="w-5 h-5 text-white" />,
      iconBg: 'bg-[#407CE2]',
      badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300',
      badgeText: 'Emergency',
    },
  };

  const config = severityConfig[severity];

  return (
    <Card className={`${config.border} ${config.bg} dark:bg-gray-800`}>
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className={`w-10 h-10 ${config.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
            {config.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1 pr-2">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-slate-900 dark:text-white">{title}</h3>
                  <Badge className={`${config.badge} text-xs px-2 py-0.5`}>
                    {config.badgeText}
                  </Badge>
                </div>
                <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed">{message}</p>
              </div>
              {onDismiss && (
                <button
                  onClick={onDismiss}
                  className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-slate-200/50 dark:hover:bg-gray-700 transition-colors flex-shrink-0"
                >
                  <X className="w-4 h-4 text-slate-500 dark:text-gray-400" />
                </button>
              )}
            </div>
            {action && (
              <Button
                size="sm"
                className={`mt-3 ${severity === 'emergency' ? 'bg-rose-600 hover:bg-rose-700' : 'bg-[#407CE2] hover:bg-[#3568c4]'} text-white`}
              >
                {action}
              </Button>
            )}
            <p className="text-xs text-slate-500 dark:text-gray-400 mt-3">{time}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function AlertsScreen() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-[#407CE2] px-6 pt-12 pb-6 rounded-b-[32px]">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-white text-2xl font-medium">Alerts & Notifications</h1>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Bell className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-white/80 text-sm">Stay informed about your health status</p>
      </div>

      {/* Summary Cards */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="border-none bg-white dark:bg-gray-800 shadow-md">
            <CardContent className="p-4 text-center">
              <div className="w-10 h-10 bg-[#407CE2] rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <p className="text-2xl text-gray-900 dark:text-white font-semibold mb-1">3</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Resolved Today</p>
            </CardContent>
          </Card>

          <Card className="border-none bg-white dark:bg-gray-800 shadow-md">
            <CardContent className="p-4 text-center">
              <div className="w-10 h-10 bg-[#407CE2] rounded-full flex items-center justify-center mx-auto mb-2">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <p className="text-2xl text-gray-900 dark:text-white font-semibold mb-1">2</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Active Alerts</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Alerts List */}
      <div className="px-6 space-y-4">
        <h2 className="text-gray-900 dark:text-white font-semibold mb-4">Recent Alerts</h2>

        <AlertCard
          severity="attention"
          title="Heart Rate Elevated"
          message="Your heart rate has been slightly elevated (avg 92 bpm) over the past 2 hours. This could be normal, but we recommend resting and staying hydrated."
          time="15 minutes ago"
          action="Log Rest Period"
        />

        <AlertCard
          severity="monitor"
          title="Hydration Reminder"
          message="You've only logged 4 glasses of water today. Adequate hydration is important during pregnancy. Aim for 8-10 glasses daily."
          time="2 hours ago"
          action="Log Water Intake"
          onDismiss={() => {}}
        />

        <AlertCard
          severity="info"
          title="Appointment Reminder"
          message="Your prenatal checkup with Dr. Rahman is scheduled for tomorrow at 10:00 AM. Don't forget to bring your health reports."
          time="Today at 9:00 AM"
          action="View Details"
        />

        <AlertCard
          severity="info"
          title="Weekly Milestone"
          message="Congratulations! You've completed week 18. Your baby's hearing is now developing and they can hear your voice."
          time="Yesterday"
          onDismiss={() => {}}
        />

        {/* Resolved Section */}
        <div className="pt-6">
          <h2 className="text-gray-900 dark:text-white font-semibold mb-4">Resolved</h2>
          
          <div className="space-y-3">
            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm opacity-75">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#407CE2] to-[#3568c4] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-gray-700 dark:text-gray-300 font-medium">Preeclampsia Risk</h3>
                      <Badge className="bg-[#407CE2] text-white text-xs border-none">Resolved</Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-1">
                      Elevated blood pressure detected (142/88). Resolved with medication and rest.
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">3 weeks ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm opacity-75">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#407CE2] to-[#3568c4] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-gray-700 dark:text-gray-300 font-medium">Hypoxia</h3>
                      <Badge className="bg-[#407CE2] text-white text-xs border-none">Resolved</Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-1">
                      Low blood oxygen levels (SpO₂ 92%). Resolved with improved ventilation and rest.
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">7 weeks ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Emergency Info */}
      <div className="px-6 mt-6">
        <Card className="border-none shadow-md bg-gradient-to-br from-[#E8F1FD] dark:from-blue-900/30 to-white dark:to-gray-800">
          <CardContent className="p-5">
            <div className="flex items-start gap-3">
              <PhoneCall className="w-5 h-5 text-[#407CE2] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Emergency Alert Protocol</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  In case of severe symptoms (heavy bleeding, severe pain, loss of consciousness), the
                  emergency button will notify your emergency contacts and healthcare provider
                  immediately.
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">⚠️ For immediate danger, always call emergency services</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Smart Alert Settings */}
      <div className="px-6 mt-6">
        <Card className="border-none shadow-md bg-white dark:bg-gray-800">
          <CardContent className="p-5">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3">Alert Preferences</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div>
                  <p className="text-sm text-gray-900 dark:text-white font-medium">Critical Health Alerts</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Always enabled for your safety</p>
                </div>
                <div className="w-12 h-6 bg-[#407CE2] rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div>
                  <p className="text-sm text-gray-900 dark:text-white font-medium">Daily Reminders</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Medication & hydration reminders</p>
                </div>
                <div className="w-12 h-6 bg-[#407CE2] rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div>
                  <p className="text-sm text-gray-900 dark:text-white font-medium">Health Tips</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Weekly pregnancy insights</p>
                </div>
                <div className="w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center px-1">
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
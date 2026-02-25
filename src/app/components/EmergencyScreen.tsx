import { ArrowLeft, Phone, Users, MapPin, AlertCircle, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface EmergencyScreenProps {
  onBack: () => void;
}

export function EmergencyScreen({ onBack }: EmergencyScreenProps) {
  return (
    <div className="bg-slate-50 dark:bg-gray-900 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-rose-500 to-red-500 px-6 pt-12 pb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-white mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <Phone className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl text-white mb-1">Emergency Setup</h1>
            <p className="text-rose-100 text-sm">Stay safe with quick access</p>
          </div>
        </div>
      </div>

      {/* Emergency Alert Info */}
      <div className="px-6 py-6">
        <Card className="border-[#407CE2] dark:border-blue-800 bg-[#E8F1FD] dark:bg-blue-900/20">
          <CardContent className="p-5">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-[#407CE2] flex-shrink-0" />
              <div>
                <h3 className="text-black dark:text-white mb-2">How Emergency Alert Works</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  When you press the emergency button, MatriCare will:
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#407CE2]" />
                    <span>Immediately notify all emergency contacts via automated voice call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#407CE2]" />
                    <span>Share your current location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#407CE2]" />
                    <span>Send recent vital signs summary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#407CE2]" />
                    <span>Alert your healthcare provider (if configured)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
              <p className="text-xs text-gray-700 dark:text-gray-300">
                ⚠️ <strong>Important:</strong> For life-threatening emergencies, always call your local
                emergency number (999 in Bangladesh) immediately.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Contacts */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-slate-900 dark:text-white mb-4">Emergency Contacts</h2>
        <div className="space-y-3">
          <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#407CE2] rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-slate-900 dark:text-white">Karim Ahmed</h3>
                    <Badge className="bg-[#407CE2] text-white text-xs">Primary</Badge>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-gray-400 mb-2">Spouse</p>
                  <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-gray-300">
                    <Phone className="w-4 h-4" />
                    <span>+880 1711-234567</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-gray-700 dark:bg-gray-800">
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#407CE2]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-slate-900 dark:text-white">Dr. Fatima Rahman</h3>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-[#407CE2] text-xs">Doctor</Badge>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-gray-400 mb-2">Obstetrician</p>
                  <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-gray-300">
                    <Phone className="w-4 h-4" />
                    <span>+880 1711-345678</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-gray-700 dark:bg-gray-800">
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#407CE2]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-slate-900 dark:text-white">Nadia Ahmed</h3>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-[#407CE2] text-xs">Family</Badge>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-gray-400 mb-2">Sister</p>
                  <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-gray-300">
                    <Phone className="w-4 h-4" />
                    <span>+880 1711-456789</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Button className="w-full mt-4 bg-[#407CE2] hover:bg-[#3568c4] text-white h-12">
          + Add Emergency Contact
        </Button>
      </div>

      {/* Quick Dial Numbers */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-slate-900 dark:text-white mb-4">Quick Dial</h2>
        <Card className="border-slate-200 dark:border-gray-700 dark:bg-gray-800">
          <CardContent className="p-5">
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-xl hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-slate-900 dark:text-white">Emergency Services</p>
                    <p className="text-sm text-slate-600 dark:text-gray-400">999 (Bangladesh)</p>
                  </div>
                </div>
                <Phone className="w-5 h-5 text-rose-500" />
              </button>

              <button className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-gray-700 border border-slate-200 dark:border-gray-600 rounded-xl hover:bg-slate-100 dark:hover:bg-gray-600 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#407CE2] rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-slate-900 dark:text-white">Nearest Hospital</p>
                    <p className="text-sm text-slate-600 dark:text-gray-400">Dhaka Medical College</p>
                  </div>
                </div>
                <Phone className="w-5 h-5 text-[#407CE2]" />
              </button>

              <button className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-gray-700 border border-slate-200 dark:border-gray-600 rounded-xl hover:bg-slate-100 dark:hover:bg-gray-600 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#407CE2] rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-slate-900 dark:text-white">24/7 Pregnancy Helpline</p>
                    <p className="text-sm text-slate-600 dark:text-gray-400">+880 9611-678678</p>
                  </div>
                </div>
                <Phone className="w-5 h-5 text-[#407CE2]" />
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Location Sharing */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-slate-900 dark:text-white mb-4">Location Settings</h2>
        <Card className="border-slate-200 dark:border-gray-700 dark:bg-gray-800">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#407CE2]" />
                <div>
                  <p className="text-slate-900 dark:text-white">Share Location in Emergencies</p>
                  <p className="text-sm text-slate-600 dark:text-gray-400">Automatically send GPS coordinates</p>
                </div>
              </div>
              <div className="w-12 h-6 bg-[#407CE2] rounded-full flex items-center justify-end px-1">
                <div className="w-4 h-4 bg-white rounded-full" />
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
              <p className="text-xs text-blue-800 dark:text-blue-300">
                <CheckCircle className="w-3 h-3 inline mr-1" />
                Location services enabled for emergency use only
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Test Alert */}
      <div className="px-6">
        <Card className="border-slate-200 dark:border-gray-700 dark:bg-gray-800">
          <CardContent className="p-5">
            <h3 className="text-slate-900 dark:text-white mb-2">Test Emergency Alert</h3>
            <p className="text-sm text-slate-600 dark:text-gray-400 mb-4">
              Send a test notification to verify your emergency contacts receive alerts properly. This
              will be marked as a test.
            </p>
            <Button variant="outline" className="w-full border-[#407CE2] text-[#407CE2] hover:bg-blue-50 dark:hover:bg-blue-900/30">
              <Clock className="w-5 h-5 mr-2" />
              Send Test Alert
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
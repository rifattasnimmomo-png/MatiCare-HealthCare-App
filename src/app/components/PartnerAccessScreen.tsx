import { ArrowLeft, Users, Share2, Shield, Check, Plus, Eye, EyeOff, X, Bell, Mail } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';

interface PartnerAccessScreenProps {
  onBack: () => void;
}

const familyImage = "https://images.unsplash.com/photo-1729863974777-1e50a94adbd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBleHBlY3RpbmclMjBiYWJ5JTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzcwMzk4ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function PartnerAccessScreen({ onBack }: PartnerAccessScreenProps) {
  return (
    <div className="bg-gradient-to-b from-blue-50 dark:from-gray-900 to-white dark:to-gray-900 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#407CE2] via-[#5088e5] to-[#3568c4] px-6 pt-12 pb-8 rounded-b-3xl shadow-lg">
        <button onClick={onBack} className="flex items-center gap-2 text-white mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
            <Users className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl text-white font-medium mb-1">Partner & Family Access</h1>
            <p className="text-white/80 text-sm">Share your journey together</p>
          </div>
        </div>
      </div>

      {/* Info Card */}
      <div className="px-6 py-6">
        <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
          <CardContent className="p-5">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#407CE2] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-blue-900 dark:text-blue-100 mb-1">You control what's shared</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
                  Invite your partner or family members to access specific health information. You can
                  customize permissions and revoke access at any time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Connections */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-slate-900 dark:text-white mb-4">Active Connections</h2>
        
        <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 mb-3">
          <CardContent className="p-5">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#407CE2] rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-slate-900 dark:text-white">Karim Ahmed</h3>
                  <Badge className="bg-[#407CE2] text-white text-xs">Partner</Badge>
                </div>
                <p className="text-sm text-slate-600 dark:text-gray-400 mb-3">karim.ahmed@email.com</p>
                <div className="flex items-center gap-2 text-xs text-blue-800 dark:text-blue-300">
                  <Check className="w-3 h-3" />
                  <span>Connected since Jan 15, 2026</span>
                </div>
              </div>
            </div>

            <div className="border-t border-blue-200 dark:border-blue-800 pt-4">
              <p className="text-sm text-slate-900 dark:text-white mb-3">Access Permissions:</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#407CE2]" />
                    <span className="text-sm text-slate-700 dark:text-gray-300">View health vitals</span>
                  </div>
                  <Check className="w-4 h-4 text-[#407CE2]" />
                </div>
                <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#407CE2]" />
                    <span className="text-sm text-slate-700 dark:text-gray-300">View appointments</span>
                  </div>
                  <Check className="w-4 h-4 text-[#407CE2]" />
                </div>
                <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <EyeOff className="w-4 h-4 text-slate-400 dark:text-gray-500" />
                    <span className="text-sm text-slate-500 dark:text-gray-400">View medical reports</span>
                  </div>
                  <X className="w-4 h-4 text-slate-400 dark:text-gray-500" />
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="flex-1 border-[#407CE2] text-[#407CE2] hover:bg-blue-50 dark:hover:bg-blue-900/30">
                Edit Permissions
              </Button>
              <Button variant="outline" className="flex-1 border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-300">
                Remove Access
              </Button>
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
                <p className="text-sm text-slate-600 dark:text-gray-400 mb-3">nadia.ahmed@email.com</p>
                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-gray-400">
                  <Check className="w-3 h-3" />
                  <span>Connected since Feb 1, 2026</span>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 dark:border-gray-700 mt-4 pt-4">
              <p className="text-sm text-slate-900 dark:text-white mb-3">Limited Access:</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4 text-[#407CE2]" />
                    <span className="text-sm text-slate-700 dark:text-gray-300">Receive critical alerts only</span>
                  </div>
                  <Check className="w-4 h-4 text-[#407CE2]" />
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="flex-1 border-[#407CE2] text-[#407CE2] hover:bg-blue-50 dark:hover:bg-blue-900/30">
                Edit Permissions
              </Button>
              <Button variant="outline" className="flex-1 border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-300">
                Remove Access
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invite New Person */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-slate-900 dark:text-white mb-4">Invite Someone</h2>
        <Card className="border-slate-200 dark:border-gray-700 dark:bg-gray-800">
          <CardContent className="p-5">
            <p className="text-sm text-slate-600 dark:text-gray-400 mb-4">
              Send an invitation to your partner or family member. They'll need to download MatriCare
              and create an account.
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-700 dark:text-gray-300 mb-2 block">Email Address</label>
                <Input placeholder="example@email.com" type="email" />
              </div>

              <div>
                <label className="text-sm text-slate-700 dark:text-gray-300 mb-2 block">Relationship</label>
                <select className="w-full p-3 border border-slate-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg text-slate-900 dark:text-white">
                  <option value="">Select relationship</option>
                  <option value="partner">Partner/Spouse</option>
                  <option value="parent">Parent</option>
                  <option value="sibling">Sibling</option>
                  <option value="friend">Friend</option>
                  <option value="caregiver">Caregiver</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-slate-700 dark:text-gray-300 mb-3 block">Default Permissions</label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-3 border border-slate-200 dark:border-gray-600 dark:bg-gray-700 rounded-lg">
                    <input type="checkbox" id="vitals" defaultChecked className="w-4 h-4 accent-[#407CE2]" />
                    <label htmlFor="vitals" className="text-sm text-slate-700 dark:text-gray-300 flex-1">
                      View health vitals & trends
                    </label>
                  </div>
                  <div className="flex items-center gap-2 p-3 border border-slate-200 dark:border-gray-600 dark:bg-gray-700 rounded-lg">
                    <input type="checkbox" id="appointments" className="w-4 h-4 accent-[#407CE2]" />
                    <label htmlFor="appointments" className="text-sm text-slate-700 dark:text-gray-300 flex-1">
                      View appointments
                    </label>
                  </div>
                  <div className="flex items-center gap-2 p-3 border border-slate-200 dark:border-gray-600 dark:bg-gray-700 rounded-lg">
                    <input type="checkbox" id="reports" className="w-4 h-4 accent-[#407CE2]" />
                    <label htmlFor="reports" className="text-sm text-slate-700 dark:text-gray-300 flex-1">
                      Access medical reports
                    </label>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-[#407CE2] hover:bg-[#3568c4] text-white h-12">
                <Mail className="w-5 h-5 mr-2" />
                Send Invitation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Privacy Notice */}
      <div className="px-6">
        <Card className="border-slate-300 dark:border-gray-700 bg-slate-100 dark:bg-gray-800">
          <CardContent className="p-4">
            <p className="text-xs text-slate-700 dark:text-gray-300 leading-relaxed">
              <Shield className="w-3 h-3 inline mr-1" />
              <strong>Privacy Protected:</strong> Shared users can only see information you explicitly
              grant them access to. You can modify or revoke access at any time. All data sharing is
              encrypted and logged for your security.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
import { ArrowLeft, Shield, Lock, Eye, EyeOff, Smartphone, Database, Trash2, Check } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface PrivacySettingsScreenProps {
  onBack: () => void;
}

export function PrivacySettingsScreen({ onBack }: PrivacySettingsScreenProps) {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-500 to-teal-500 px-6 pt-12 pb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-white mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl text-white mb-1">Privacy & Security</h1>
            <p className="text-emerald-100 text-sm">Your data protection settings</p>
          </div>
        </div>
      </div>

      {/* Security Status */}
      <div className="px-6 py-6">
        <Card className="border-emerald-200 bg-emerald-50">
          <CardContent className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-emerald-900 mb-1">Your data is secure</h3>
                <p className="text-sm text-emerald-700">All security measures active</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 text-center">
                <Lock className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                <p className="text-xs text-slate-700">Encrypted</p>
              </div>
              <div className="bg-white rounded-lg p-3 text-center">
                <Shield className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                <p className="text-xs text-slate-700">Protected</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Encryption */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-slate-900 mb-4">Data Encryption</h2>
        <Card className="border-slate-200">
          <CardContent className="p-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-emerald-500" />
                  <div>
                    <p className="text-sm text-slate-900">End-to-End Encryption</p>
                    <p className="text-xs text-slate-600">Medical-grade AES-256 encryption</p>
                  </div>
                </div>
                <Badge className="bg-emerald-100 text-emerald-700 text-xs">Active</Badge>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-sm text-slate-900">Secure Cloud Storage</p>
                    <p className="text-xs text-slate-600">Data stored in encrypted servers</p>
                  </div>
                </div>
                <Badge className="bg-emerald-100 text-emerald-700 text-xs">Active</Badge>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-purple-500" />
                  <div>
                    <p className="text-sm text-slate-900">Device Authentication</p>
                    <p className="text-xs text-slate-600">Biometric & PIN protection</p>
                  </div>
                </div>
                <div className="w-12 h-6 bg-emerald-500 rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Access Control */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-slate-900 mb-4">Access Control</h2>
        <Card className="border-slate-200">
          <CardContent className="p-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-indigo-500" />
                  <div>
                    <p className="text-sm text-slate-900">Biometric Login</p>
                    <p className="text-xs text-slate-600">Fingerprint or Face ID</p>
                  </div>
                </div>
                <div className="w-12 h-6 bg-emerald-500 rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-amber-500" />
                  <div>
                    <p className="text-sm text-slate-900">Auto-Lock</p>
                    <p className="text-xs text-slate-600">Lock app after 5 minutes</p>
                  </div>
                </div>
                <div className="w-12 h-6 bg-emerald-500 rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <EyeOff className="w-5 h-5 text-slate-500" />
                  <div>
                    <p className="text-sm text-slate-900">Hide Sensitive Data</p>
                    <p className="text-xs text-slate-600">Blur on app switcher</p>
                  </div>
                </div>
                <div className="w-12 h-6 bg-emerald-500 rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Sharing Permissions */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-slate-900 mb-4">Sharing Permissions</h2>
        <Card className="border-slate-200">
          <CardContent className="p-5">
            <p className="text-sm text-slate-600 mb-4">
              Control who can access your health data
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <div>
                  <p className="text-sm text-slate-900">Partner Access</p>
                  <p className="text-xs text-slate-600">1 person connected</p>
                </div>
                <Button variant="ghost" size="sm" className="text-emerald-600 h-8">
                  Manage
                </Button>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <div>
                  <p className="text-sm text-slate-900">Family Members</p>
                  <p className="text-xs text-slate-600">1 person connected</p>
                </div>
                <Button variant="ghost" size="sm" className="text-emerald-600 h-8">
                  Manage
                </Button>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm text-slate-900">Healthcare Providers</p>
                  <p className="text-xs text-slate-600">1 doctor connected</p>
                </div>
                <Button variant="ghost" size="sm" className="text-emerald-600 h-8">
                  Manage
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Management */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-slate-900 mb-4">Data Management</h2>
        <Card className="border-slate-200">
          <CardContent className="p-5">
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-blue-500" />
                  <div className="text-left">
                    <p className="text-sm text-slate-900">Export All Data</p>
                    <p className="text-xs text-slate-600">Download complete health archive</p>
                  </div>
                </div>
                <span className="text-slate-400">→</span>
              </button>

              <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-purple-500" />
                  <div className="text-left">
                    <p className="text-sm text-slate-900">Access History</p>
                    <p className="text-xs text-slate-600">See who accessed your data</p>
                  </div>
                </div>
                <span className="text-slate-400">→</span>
              </button>

              <button className="w-full flex items-center justify-between p-4 bg-rose-50 border border-rose-200 rounded-lg hover:bg-rose-100 transition-colors">
                <div className="flex items-center gap-3">
                  <Trash2 className="w-5 h-5 text-rose-600" />
                  <div className="text-left">
                    <p className="text-sm text-rose-900">Delete All Data</p>
                    <p className="text-xs text-rose-700">Permanently remove your information</p>
                  </div>
                </div>
                <span className="text-rose-400">→</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Privacy Policy */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-slate-900 mb-4">Legal & Compliance</h2>
        <Card className="border-slate-200">
          <CardContent className="p-5">
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors">
                <span className="text-sm text-slate-900">Privacy Policy</span>
                <span className="text-slate-400">→</span>
              </button>
              <button className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors">
                <span className="text-sm text-slate-900">Terms of Service</span>
                <span className="text-slate-400">→</span>
              </button>
              <button className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors">
                <span className="text-sm text-slate-900">Data Protection Rights</span>
                <span className="text-slate-400">→</span>
              </button>
              <button className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors">
                <span className="text-sm text-slate-900">Medical Data Compliance</span>
                <span className="text-slate-400">→</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Notice */}
      <div className="px-6">
        <Card className="border-slate-300 bg-slate-100">
          <CardContent className="p-4">
            <p className="text-xs text-slate-700 text-center leading-relaxed">
              <Shield className="w-3 h-3 inline mr-1" />
              <strong>Your privacy matters:</strong> MatriCare complies with international medical data
              protection standards. Your health data is never sold or shared without your explicit consent.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

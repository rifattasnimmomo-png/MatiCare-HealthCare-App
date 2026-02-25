import { ArrowLeft, Shield, Lock, Eye, EyeOff, Fingerprint, Key, Database, Share2, Trash2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface PrivacySecurityScreenProps {
  onBack: () => void;
}

export function PrivacySecurityScreen({ onBack }: PrivacySecurityScreenProps) {
  return (
    <div className="bg-gradient-to-b from-blue-50 dark:from-gray-900 to-white dark:to-gray-900 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#407CE2] via-[#5088e5] to-[#3568c4] px-6 pt-12 pb-8 rounded-b-3xl shadow-lg">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl text-white font-medium mb-1">Privacy & Security</h1>
            <p className="text-white/80 text-sm">Your data protection settings</p>
          </div>
        </div>
      </div>

      {/* Security Status */}
      <div className="px-6 py-6">
        <Card className="border-none shadow-md bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-blue-100 dark:to-blue-900/30">
          <CardContent className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#407CE2] to-[#3568c4] rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-800 dark:text-white font-semibold">Security Status</h3>
                <Badge className="bg-[#407CE2] text-white text-xs border-none mt-1">Protected</Badge>
              </div>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Your data is encrypted and secure. All recommended security features are enabled.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Authentication */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-gray-800 dark:text-white font-semibold mb-4">Authentication</h2>
        <div className="space-y-3">
          <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#407CE2] to-[#3568c4] rounded-xl flex items-center justify-center">
                    <Fingerprint className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white font-medium text-sm">Biometric Login</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Fingerprint or Face ID</p>
                  </div>
                </div>
                <div className="w-12 h-6 bg-[#407CE2] rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#407CE2] to-[#3568c4] rounded-xl flex items-center justify-center">
                    <Key className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white font-medium text-sm">Two-Factor Authentication</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Extra layer of security</p>
                  </div>
                </div>
                <div className="w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center px-1">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#407CE2] to-[#3568c4] rounded-xl flex items-center justify-center">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white font-medium text-sm">Auto-Lock</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Lock after 5 minutes</p>
                  </div>
                </div>
                <div className="w-12 h-6 bg-[#407CE2] rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Data Privacy */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-gray-800 dark:text-white font-semibold mb-4">Data Privacy</h2>
        <div className="space-y-3">
          <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#407CE2] to-[#3568c4] rounded-xl flex items-center justify-center">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white font-medium text-sm">Data Encryption</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">AES-256 encryption</p>
                  </div>
                </div>
                <Badge className="bg-[#407CE2] text-white text-xs border-none">Active</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#407CE2] to-[#3568c4] rounded-xl flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white font-medium text-sm">Anonymous Analytics</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Help improve the app</p>
                  </div>
                </div>
                <div className="w-12 h-6 bg-[#407CE2] rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#407CE2] to-[#3568c4] rounded-xl flex items-center justify-center">
                    <Share2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white font-medium text-sm">Data Sharing</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Control who sees your data</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="text-xs border-[#407CE2] text-[#407CE2]">
                  Manage
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Account Actions */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-gray-800 dark:text-white font-semibold mb-4">Account Actions</h2>
        <div className="space-y-3">
          <Button className="w-full bg-gradient-to-r from-[#407CE2] to-[#3568c4] hover:from-[#3568c4] hover:to-[#407CE2] text-white h-12 rounded-xl">
            <Database className="w-5 h-5 mr-2" />
            Download My Data
          </Button>

          <Button
            variant="outline"
            className="w-full border-2 border-red-300 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 h-12 rounded-xl"
          >
            <Trash2 className="w-5 h-5 mr-2" />
            Delete My Account
          </Button>
        </div>
      </div>

      {/* Privacy Policy */}
      <div className="px-6">
        <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-sm">
          <CardContent className="p-5">
            <h3 className="text-gray-800 dark:text-white font-semibold mb-3">Privacy Information</h3>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <p>
                • Your health data is stored securely with medical-grade encryption
              </p>
              <p>
                • We never sell your personal information to third parties
              </p>
              <p>
                • You have full control over who can access your data
              </p>
              <p>
                • You can request data deletion at any time
              </p>
            </div>
            <Button variant="link" className="text-[#407CE2] mt-3 px-0">
              Read Full Privacy Policy →
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
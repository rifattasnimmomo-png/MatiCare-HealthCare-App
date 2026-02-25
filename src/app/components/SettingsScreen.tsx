import { Settings, Smartphone, Moon, Sun, Bluetooth, Wifi, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { useTheme } from '../context/ThemeContext';

export function SettingsScreen() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-[#407CE2] px-6 pt-12 pb-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl text-white mb-1">Settings</h1>
            <p className="text-white/80 text-sm">App preferences & devices</p>
          </div>
        </div>
      </div>

      {/* Connect with IoT Device */}
      <div className="px-6 py-6">
        <h2 className="text-lg text-black dark:text-white mb-4">Device Connection</h2>
        <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800">
          <CardContent className="p-5">
            <button className="w-full flex items-center justify-between p-4 bg-[#E8F1FD] dark:bg-blue-900/30 rounded-xl hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-[#407CE2]" />
                <div className="text-left">
                  <p className="text-sm text-black dark:text-white">Connect with IoT Device</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Pair health monitoring devices</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#407CE2]/20 rounded-lg flex items-center justify-center">
                    <Bluetooth className="w-5 h-5 text-[#407CE2]" />
                  </div>
                  <div>
                    <p className="text-sm text-black dark:text-white">Health Monitor Band</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Connected</p>
                  </div>
                </div>
                <Badge className="bg-[#407CE2] text-white text-xs border-none">Active</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg opacity-60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Smart Scale</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Not connected</p>
                  </div>
                </div>
                <button className="text-xs text-[#407CE2]">Pair</button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Theme Settings */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-black dark:text-white mb-4">Theme Settings</h2>
        <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800">
          <CardContent className="p-5">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Choose your preferred app appearance</p>
            
            <div className="space-y-3">
              <button 
                onClick={() => setTheme('light')}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-colors ${
                  theme === 'light' 
                    ? 'bg-[#E8F1FD] dark:bg-blue-900/30 border-2 border-[#407CE2]' 
                    : 'bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <Sun className="w-5 h-5 text-[#407CE2]" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-black dark:text-white">Light Mode</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Default bright theme</p>
                  </div>
                </div>
                {theme === 'light' ? (
                  <div className="w-5 h-5 bg-[#407CE2] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                ) : (
                  <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-500 rounded-full" />
                )}
              </button>

              <button 
                onClick={() => setTheme('dark')}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-colors ${
                  theme === 'dark' 
                    ? 'bg-[#E8F1FD] dark:bg-blue-900/30 border-2 border-[#407CE2]' 
                    : 'bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                    <Moon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-black dark:text-white">Dark Mode</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Reduced eye strain</p>
                  </div>
                </div>
                {theme === 'dark' ? (
                  <div className="w-5 h-5 bg-[#407CE2] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                ) : (
                  <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-500 rounded-full" />
                )}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Connection Status */}
      <div className="px-6 mb-6">
        <h2 className="text-lg text-black dark:text-white mb-4">Connection Status</h2>
        <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800">
          <CardContent className="p-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-black dark:text-white mb-1">Bluetooth</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">For device pairing</p>
                </div>
                <div className="w-12 h-6 bg-[#407CE2] rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-black dark:text-white mb-1">Wi-Fi Sync</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Automatic data backup</p>
                </div>
                <div className="w-12 h-6 bg-[#407CE2] rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-black dark:text-white mb-1">Auto-Sync</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Sync health data automatically</p>
                </div>
                <div className="w-12 h-6 bg-[#407CE2] rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Settings */}
      <div className="px-6">
        <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800">
          <CardContent className="p-5">
            <h3 className="text-black dark:text-white mb-4">Additional Settings</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <span className="text-sm text-black dark:text-white">Notifications</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <span className="text-sm text-black dark:text-white">Language</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">English</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </button>
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <span className="text-sm text-black dark:text-white">Units</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Imperial</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

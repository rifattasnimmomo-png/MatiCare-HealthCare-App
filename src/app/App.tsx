import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { OnboardingScreen } from './components/OnboardingScreen';
import { HomeDashboard } from './components/HomeDashboard';
import { AlertsScreen } from './components/AlertsScreen';
import { FetalHealthScreen } from './components/FetalHealthScreen';
import { ReportsAndAppointments } from './components/ReportsAndAppointments';
import { AIAssistant } from './components/AIAssistant';
import { MoreScreen } from './components/MoreScreen';
import { SettingsScreen } from './components/SettingsScreen';
import { DailyHealthScreen } from './components/DailyHealthScreen';
import { PartnerAccessScreen } from './components/PartnerAccessScreen';
import { EmergencyScreen } from './components/EmergencyScreen';
import { TrendsScreen } from './components/TrendsScreen';
import { PrivacySecurityScreen } from './components/PrivacySecurityScreen';
import { BottomNavigation, FloatingAssistantButton } from './components/BottomNavigation';

export default function App() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [activeScreen, setActiveScreen] = useState<string | null>(null);
  const [showAssistant, setShowAssistant] = useState(false);
  const [userName, setUserName] = useState('');
  const [pregnancyWeek, setPregnancyWeek] = useState(18);

  return (
    <ThemeProvider>
      <AppContent
        hasCompletedOnboarding={hasCompletedOnboarding}
        setHasCompletedOnboarding={setHasCompletedOnboarding}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        showAssistant={showAssistant}
        setShowAssistant={setShowAssistant}
        userName={userName}
        setUserName={setUserName}
        pregnancyWeek={pregnancyWeek}
        setPregnancyWeek={setPregnancyWeek}
      />
    </ThemeProvider>
  );
}

function AppContent({
  hasCompletedOnboarding,
  setHasCompletedOnboarding,
  activeTab,
  setActiveTab,
  activeScreen,
  setActiveScreen,
  showAssistant,
  setShowAssistant,
  userName,
  setUserName,
  pregnancyWeek,
  setPregnancyWeek,
}: {
  hasCompletedOnboarding: boolean;
  setHasCompletedOnboarding: (value: boolean) => void;
  activeTab: string;
  setActiveTab: (value: string) => void;
  activeScreen: string | null;
  setActiveScreen: (value: string | null) => void;
  showAssistant: boolean;
  setShowAssistant: (value: boolean) => void;
  userName: string;
  setUserName: (value: string) => void;
  pregnancyWeek: number;
  setPregnancyWeek: (value: number) => void;
}) {
  // Show onboarding first
  if (!hasCompletedOnboarding) {
    return (
      <OnboardingScreen
        onComplete={(name, week) => {
          setUserName(name);
          setPregnancyWeek(week);
          setHasCompletedOnboarding(true);
        }}
      />
    );
  }

  // Handle navigation from More screen
  const handleMoreNavigate = (screen: string) => {
    setActiveScreen(screen);
  };

  // Handle navigation from Home screen
  const handleHomeNavigate = (screen: string) => {
    if (screen === 'fetal') {
      setActiveTab('fetal');
    } else if (screen === 'vitals') {
      setActiveScreen('vitals');
    } else if (screen === 'daily') {
      setActiveScreen('daily');
    } else if (screen.startsWith('vital-')) {
      setActiveScreen('vitals');
    }
  };

  // Show AI Assistant modal
  if (showAssistant) {
    return (
      <div className="size-full">
        <AIAssistant />
        <button
          onClick={() => setShowAssistant(false)}
          className="fixed top-6 right-6 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-50 text-2xl text-gray-600 hover:text-gray-800"
        >
          ×
        </button>
      </div>
    );
  }

  // Show sub-screens
  if (activeScreen === 'vitals') {
    return (
      <div className="size-full">
        <TrendsScreen />
        <button
          onClick={() => setActiveScreen(null)}
          className="fixed top-6 left-6 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-50 text-xl text-gray-700 hover:text-gray-900"
        >
          ←
        </button>
        <FloatingAssistantButton onClick={() => setShowAssistant(true)} />
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    );
  }

  if (activeScreen === 'daily') {
    return (
      <div className="size-full">
        <DailyHealthScreen onBack={() => setActiveScreen(null)} />
        <FloatingAssistantButton onClick={() => setShowAssistant(true)} />
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    );
  }

  if (activeScreen === 'partner') {
    return (
      <div className="size-full">
        <PartnerAccessScreen onBack={() => setActiveScreen(null)} />
        <FloatingAssistantButton onClick={() => setShowAssistant(true)} />
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    );
  }

  if (activeScreen === 'emergency') {
    return (
      <div className="size-full">
        <EmergencyScreen onBack={() => setActiveScreen(null)} />
        <FloatingAssistantButton onClick={() => setShowAssistant(true)} />
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    );
  }

  if (activeScreen === 'settings') {
    return (
      <div className="size-full">
        <SettingsScreen />
        <button
          onClick={() => setActiveScreen(null)}
          className="fixed top-6 left-6 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-50 text-xl text-gray-700 hover:text-gray-900"
        >
          ←
        </button>
        <FloatingAssistantButton onClick={() => setShowAssistant(true)} />
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    );
  }

  if (activeScreen === 'appointments') {
    return (
      <div className="size-full">
        <ReportsAndAppointments />
        <button
          onClick={() => setActiveScreen(null)}
          className="fixed top-6 left-6 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-50 text-xl text-gray-700 hover:text-gray-900"
        >
          ←
        </button>
        <FloatingAssistantButton onClick={() => setShowAssistant(true)} />
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    );
  }

  if (activeScreen === 'privacy') {
    return (
      <div className="size-full">
        <PrivacySecurityScreen onBack={() => setActiveScreen(null)} />
        <FloatingAssistantButton onClick={() => setShowAssistant(true)} />
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    );
  }

  if (activeScreen === 'help') {
    return (
      <div className="size-full bg-gray-50 dark:bg-gray-900">
        <div className="px-6 pt-12 pb-24">
          <div className="bg-[#407CE2] px-6 pt-12 pb-8 rounded-[32px] mb-6">
            <h1 className="text-white text-2xl font-medium mb-2">Help Centre</h1>
            <p className="text-white/80 text-sm">Support & FAQs</p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Help documentation coming soon...</p>
          <button
            onClick={() => setActiveScreen(null)}
            className="mt-6 px-6 py-3 bg-[#407CE2] text-white rounded-xl hover:bg-[#3568c4]"
          >
            Go Back
          </button>
        </div>
        <FloatingAssistantButton onClick={() => setShowAssistant(true)} />
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    );
  }

  if (activeScreen === 'about') {
    return (
      <div className="size-full bg-gray-50 dark:bg-gray-900">
        <div className="px-6 pt-12 pb-24">
          <div className="bg-[#407CE2] px-6 pt-12 pb-8 rounded-[32px] mb-6">
            <h1 className="text-white text-2xl font-medium mb-2">About MatriCare</h1>
            <p className="text-white/80 text-sm">Version & Information</p>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Version 1.0.0</p>
          <p className="text-gray-600 dark:text-gray-400">
            MatriCare is your trusted companion for a healthy pregnancy journey in Bangladesh and
            similar low-to-middle income settings.
          </p>
          <button
            onClick={() => setActiveScreen(null)}
            className="mt-6 px-6 py-3 bg-[#407CE2] text-white rounded-xl hover:bg-[#3568c4]"
          >
            Go Back
          </button>
        </div>
        <FloatingAssistantButton onClick={() => setShowAssistant(true)} />
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    );
  }

  // Main app with tab navigation
  return (
    <div className="size-full bg-white dark:bg-gray-900 relative">
      {/* Screen Content */}
      <div className="h-full overflow-auto">
        {activeTab === 'home' && (
          <HomeDashboard
            onNavigate={handleHomeNavigate}
            userName={userName}
            pregnancyWeek={pregnancyWeek}
          />
        )}
        {activeTab === 'alerts' && <AlertsScreen />}
        {activeTab === 'fetal' && (
          <FetalHealthScreen onBack={() => setActiveTab('home')} />
        )}
        {activeTab === 'reports' && <ReportsAndAppointments />}
        {activeTab === 'more' && <MoreScreen onNavigate={handleMoreNavigate} />}
      </div>

      {/* Floating AI Assistant Button */}
      <FloatingAssistantButton onClick={() => setShowAssistant(true)} />

      {/* Bottom Navigation */}
      <BottomNavigation
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setActiveScreen(null);
        }}
      />
    </div>
  );
}
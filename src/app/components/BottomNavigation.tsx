import { Home, Bell, Baby, FileText, MoreHorizontal, MessageCircle } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'alerts', icon: Bell, label: 'Alerts' },
    { id: 'fetal', icon: Baby, label: 'Fetal Health' },
    { id: 'reports', icon: FileText, label: 'Reports' },
    { id: 'more', icon: MoreHorizontal, label: 'More' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-2 pb-6 pt-2 shadow-lg">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                isActive 
                  ? 'text-[#407CE2] bg-blue-50 dark:bg-blue-900/30' 
                  : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.5]'}`} />
              <span className={`text-xs ${isActive ? 'font-medium' : ''}`}>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface FloatingAssistantButtonProps {
  onClick: () => void;
}

export function FloatingAssistantButton({ onClick }: FloatingAssistantButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-28 right-6 w-14 h-14 bg-gradient-to-br from-[#407CE2] to-[#3568c4] rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all z-40"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </button>
  );
}
import { Heart, Calendar, CreditCard, MessageCircle, LogOut, ChevronRight, Users, Phone, Shield, Settings, HelpCircle, Info } from 'lucide-react';
import imgProfilePic from '../../assets/ae6119de08332fcb400dc466573e6c84a2e3c7c7.png';

interface MoreScreenProps {
  onNavigate: (screen: string) => void;
}

export function MoreScreen({ onNavigate }: MoreScreenProps) {
  const menuItems = [
    {
      id: 'partner',
      icon: Users,
      label: 'Partner & Family Access',
      description: 'Share your journey',
    },
    {
      id: 'emergency',
      icon: Phone,
      label: 'Emergency Contacts',
      description: 'Manage emergency contacts',
    },
    {
      id: 'privacy',
      icon: Shield,
      label: 'Privacy & Security',
      description: 'Data protection settings',
    },
    {
      id: 'settings',
      icon: Settings,
      label: 'App Settings',
      description: 'Customize your experience',
    },
    {
      id: 'help',
      icon: HelpCircle,
      label: 'Help Centre',
      description: 'Get support & FAQs',
    },
    {
      id: 'about',
      icon: Info,
      label: 'About',
      description: 'App version & info',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pb-24">
      {/* Profile Section */}
      <div className="px-6 pt-16 pb-8">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#407CE2]">
            <img 
              src={imgProfilePic} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">Ruchita</h2>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 mb-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#E8F1FD] dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-2">
              <Heart className="w-7 h-7 text-[#407CE2]" fill="#407CE2" />
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Heart rate</p>
            <p className="text-xl font-semibold text-[#407CE2]">215bpm</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#E8F1FD] dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-2">
              <svg className="w-7 h-7 text-[#407CE2]" fill="#407CE2" viewBox="0 0 24 24">
                <path d="M12 2C10.34 2 9 3.34 9 5C9 6.66 10.34 8 12 8C13.66 8 15 6.66 15 5C15 3.34 13.66 2 12 2M12 9C8.13 9 5 10.57 5 12.5V14H19V12.5C19 10.57 15.87 9 12 9M12 16C10.9 16 10 16.9 10 18V22H14V18C14 16.9 13.1 16 12 16Z" />
              </svg>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Calories</p>
            <p className="text-xl font-semibold text-[#407CE2]">756cal</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#E8F1FD] dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-2">
              <svg className="w-7 h-7 text-[#407CE2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v7m0 6v7M2 12h7m6 0h7" />
              </svg>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Weight</p>
            <p className="text-xl font-semibold text-[#407CE2]">103lbs</p>
          </div>
        </div>
      </div>

      {/* Menu Items with Line Separators */}
      <div className="px-6">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className="w-full group py-5 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-[#E8F1FD] dark:bg-blue-900/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#407CE2]" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-gray-900 dark:text-white font-medium">{item.label}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#407CE2] transition-colors" />
              </button>
              {index < menuItems.length - 1 && (
                <div className="h-px bg-gray-200 dark:bg-gray-700 ml-16" />
              )}
            </div>
          );
        })}
      </div>

      {/* App Version */}
      <div className="px-6 pt-8 pb-6">
        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
          MatriCare v1.0.0
        </p>
      </div>
    </div>
  );
}
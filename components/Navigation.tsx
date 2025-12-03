import React from 'react';
import { BookOpen, Coffee, MessageCircle, Bot } from 'lucide-react';
import { Tab } from '../types';

interface NavigationProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: Tab.FLOW, label: '業務の流れ', icon: BookOpen },
    { id: Tab.MENU, label: 'メニュー', icon: Coffee },
    { id: Tab.PHRASES, label: '接客用語', icon: MessageCircle },
    { id: Tab.AI_TRAINER, label: 'AI研修', icon: Bot },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-orange-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 pb-safe">
      <div className="flex justify-around items-center h-16 max-w-2xl mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${
              activeTab === item.id
                ? 'text-orange-600'
                : 'text-stone-400 hover:text-stone-600'
            }`}
          >
            <item.icon size={24} strokeWidth={activeTab === item.id ? 2.5 : 2} />
            <span className="text-[10px] mt-1 font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
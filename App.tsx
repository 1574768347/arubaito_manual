import React, { useState } from 'react';
import Navigation from './components/Navigation';
import FlowSection from './components/FlowSection';
import MenuGrid from './components/MenuGrid';
import PhraseBook from './components/PhraseBook';
import AIAssistant from './components/AIAssistant';
import { Tab } from './types';
import { Flame } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.FLOW);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.FLOW:
        return <FlowSection />;
      case Tab.MENU:
        return <MenuGrid />;
      case Tab.PHRASES:
        return <PhraseBook />;
      case Tab.AI_TRAINER:
        return <AIAssistant />;
      default:
        return <FlowSection />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fff7ed] text-stone-800 font-sans pb-safe selection:bg-orange-200 selection:text-orange-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#fff7ed]/80 backdrop-blur-xl border-b border-orange-100/50 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 p-2 rounded-xl text-white shadow-sm transform rotate-3">
              <Flame size={20} fill="currentColor" />
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-tight text-stone-800 leading-none">
                もつ鍋
              </h1>
              <span className="text-[10px] text-stone-500 font-bold tracking-wider uppercase">Staff Handbook</span>
            </div>
          </div>
          <div className="text-[10px] bg-stone-800/5 px-3 py-1.5 rounded-full text-stone-500 font-bold border border-stone-200/50">
            STAFF ONLY
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-2xl mx-auto p-4 pt-6 min-h-[calc(100vh-140px)]">
        {renderContent()}
      </main>

      {/* Navigation */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import { CUSTOMER_PHRASES, STAFF_PHRASES } from '../constants';
import { MessageSquare, ChevronDown, ChevronUp, User, Users } from 'lucide-react';
import { Phrase } from '../types';

const PhraseBook: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'customer' | 'staff'>('customer');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const currentPhrases = activeTab === 'customer' ? CUSTOMER_PHRASES : STAFF_PHRASES;

  return (
    <div className="pb-24 animate-in zoom-in-95 duration-500">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-stone-800 mb-2">言葉遣いマニュアル</h2>
        <p className="text-stone-500 text-sm">シーンに合わせた正しい挨拶・用語</p>
      </div>

      {/* Toggle Tabs */}
      <div className="flex bg-stone-100 p-1 rounded-xl mb-6">
        <button
          onClick={() => { setActiveTab('customer'); setOpenIndex(null); }}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
            activeTab === 'customer' ? 'bg-white text-orange-600 shadow-sm' : 'text-stone-500 hover:text-stone-600'
          }`}
        >
          <User size={16} />
          <span>接客用語</span>
        </button>
        <button
          onClick={() => { setActiveTab('staff'); setOpenIndex(null); }}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
            activeTab === 'staff' ? 'bg-white text-orange-600 shadow-sm' : 'text-stone-500 hover:text-stone-600'
          }`}
        >
          <Users size={16} />
          <span>スタッフ間</span>
        </button>
      </div>

      <div className="space-y-3">
        {currentPhrases.map((phrase: Phrase, idx: number) => (
          <div 
            key={idx} 
            className={`bg-white rounded-xl overflow-hidden transition-all duration-300 border ${
              openIndex === idx ? 'border-orange-300 shadow-md ring-1 ring-orange-100' : 'border-stone-100 shadow-sm'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full px-5 py-4 flex justify-between items-center text-left bg-white active:bg-stone-50"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${openIndex === idx ? 'bg-orange-100 text-orange-600' : 'bg-stone-100 text-stone-400'}`}>
                  <MessageSquare size={18} />
                </div>
                <span className={`font-bold text-sm ${openIndex === idx ? 'text-orange-900' : 'text-stone-700'}`}>
                  {phrase.situation}
                </span>
              </div>
              {openIndex === idx ? <ChevronUp size={18} className="text-orange-400"/> : <ChevronDown size={18} className="text-stone-300"/>}
            </button>
            
            {openIndex === idx && (
              <div className="px-5 pb-5 pt-0 bg-white">
                <div className="pl-11">
                  <div className="bg-orange-50 p-4 rounded-lg rounded-tl-none relative border border-orange-100">
                    <p className="text-stone-800 font-bold leading-relaxed text-base">
                      「{phrase.script}」
                    </p>
                  </div>
                  {phrase.note && (
                    <div className="mt-3 text-xs text-stone-500 flex items-start gap-1.5 bg-stone-50 p-2 rounded-md">
                      <span className="text-orange-500 font-bold bg-orange-100 px-1.5 rounded text-[10px] mt-0.5">POINT</span>
                      <span className="leading-relaxed">{phrase.note}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhraseBook;
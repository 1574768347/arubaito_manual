import React from 'react';
import { SERVICE_FLOW, BASIC_RULES } from '../constants';
import { CheckCircle2, Clock, Footprints, Flame, AlertCircle, HeartHandshake } from 'lucide-react';

const FlowSection: React.FC = () => {
  return (
    <div className="space-y-8 pb-24 animate-in fade-in duration-500">
      
      {/* Intro Card */}
      <div className="bg-gradient-to-br from-orange-100 to-amber-50 p-6 rounded-2xl shadow-sm border border-orange-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
        <h2 className="text-xl font-bold text-orange-900 mb-2 relative z-10">業務マニュアル</h2>
        <p className="text-sm text-stone-700 relative z-10 leading-relaxed">
          もつ鍋屋のホール業務へようこそ！<br/>
          「元気な挨拶」と「温かいおもてなし」で、お客様に素敵な時間を届けましょう。
        </p>
      </div>

      {/* Basic Rules Section */}
      <div>
        <div className="flex items-center gap-2 mb-4 px-1">
          <HeartHandshake className="text-orange-500" size={20} />
          <h3 className="font-bold text-lg text-stone-800">基本の心構え (Basic Rules)</h3>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {BASIC_RULES.map((rule) => (
            <div key={rule.id} className="bg-white p-5 rounded-xl shadow-sm border border-stone-100">
              <h4 className="font-bold text-orange-800 mb-3 text-sm border-b border-orange-100 pb-2">
                {rule.title}
              </h4>
              <ul className="space-y-2">
                {rule.content.map((item, idx) => (
                  <li key={idx} className="text-sm text-stone-600 flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Service Flow */}
      <div>
        <div className="flex items-center gap-2 mb-4 px-1">
          <Footprints className="text-orange-500" size={20} />
          <h3 className="font-bold text-lg text-stone-800">接客の流れ (Service Flow)</h3>
        </div>

        <div className="relative space-y-6 pl-4">
          {/* Timeline Line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-orange-200 to-stone-200"></div>

          {SERVICE_FLOW.map((section, index) => {
            // Icons based on section id
            let Icon = CheckCircle2;
            if (section.id === 'entry') Icon = Clock;
            if (section.id === 'nabe_service') Icon = Flame;
            
            return (
              <div key={section.id} className="relative pl-8">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 bg-white p-1 rounded-full border border-orange-100 z-10">
                  <div className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-sm">
                    <Icon size={16} />
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden">
                  <div className="bg-stone-50 px-4 py-3 border-b border-stone-100 flex items-center justify-between">
                    <h3 className="font-bold text-stone-800">
                      <span className="text-orange-500 mr-2 text-sm font-normal">STEP {index + 1}</span>
                      {section.title}
                    </h3>
                  </div>
                  <ul className="divide-y divide-stone-50">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="p-4 text-stone-700 text-sm leading-relaxed flex gap-3 hover:bg-orange-50/30 transition-colors">
                        <CheckCircle2 size={16} className="text-orange-300 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex gap-3">
        <AlertCircle className="text-red-500 shrink-0" size={24} />
        <div>
          <h4 className="font-bold text-red-800 text-sm mb-1">重要：タイムカード</h4>
          <p className="text-xs text-red-700 leading-relaxed">
            お店に着いたらまず「挨拶」。<br/>
            着替え → 出勤打刻 → 勤務 → 退勤打刻 → 着替え の順序を厳守してください。
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlowSection;
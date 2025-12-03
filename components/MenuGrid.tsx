import React from 'react';
import { MENU_ITEMS } from '../constants';
import { Flame, Utensils, Beer, IceCream, Star } from 'lucide-react';

const MenuGrid: React.FC = () => {
  const sections = [
    { key: 'nabe', title: 'お鍋 (Nabe)', icon: Flame, color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-100' },
    { key: 'sides', title: '一品料理 (Sides)', icon: Utensils, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100' },
    { key: 'drinks', title: 'ドリンク (Drinks)', icon: Beer, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' },
    { key: 'dessert', title: 'デザート (Dessert)', icon: IceCream, color: 'text-pink-500', bg: 'bg-pink-50', border: 'border-pink-100' },
  ];

  return (
    <div className="space-y-8 pb-24 animate-in slide-in-from-right duration-500">
      <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg mb-8 group">
        <div className="absolute inset-0 bg-stone-800 animate-pulse bg-opacity-20"></div> 
        {/* Using a placeholder gradient pattern since we can't reliably load external images */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
          <Flame size={48} className="mb-2 text-orange-200" />
          <h2 className="font-bold text-3xl tracking-wide drop-shadow-md">メニュー知識</h2>
          <p className="text-orange-100 text-sm mt-2 font-medium">お客様に「おすすめ」を提案できるようにしましょう</p>
        </div>
      </div>

      {sections.map((section) => (
        <div key={section.key} className="relative">
          <div className="sticky top-14 z-20 bg-[#fff7ed]/95 backdrop-blur-sm py-2 mb-2 border-b border-orange-100/50">
            <div className="flex items-center gap-2 px-1">
              <div className={`p-2 rounded-lg ${section.bg}`}>
                <section.icon className={section.color} size={20} />
              </div>
              <h3 className="font-bold text-lg text-stone-800">{section.title}</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            {MENU_ITEMS[section.key]?.map((item, idx) => (
              <div key={idx} className={`bg-white p-4 rounded-xl shadow-sm border ${section.border} flex flex-col justify-between hover:shadow-md transition-shadow`}>
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-stone-800 text-base">{item.name}</span>
                      {item.tags?.includes('人気') && (
                         <Star size={12} className="text-yellow-500 fill-yellow-500" />
                      )}
                    </div>
                    {item.description && (
                      <p className="text-xs text-stone-500 leading-relaxed">{item.description}</p>
                    )}
                  </div>
                </div>
                {item.tags && (
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-dashed border-stone-100">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${
                        tag === '人気' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' :
                        tag === '定番' ? 'bg-red-50 text-red-700 border-red-100' :
                        'bg-stone-50 text-stone-600 border-stone-100'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuGrid;
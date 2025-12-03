import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { SYSTEM_INSTRUCTION } from '../constants';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'こんにちは！もつ鍋屋の新人研修ボットです。\nメニューのことや、接客の言葉遣いなど、なんでも聞いてくださいね！🍲' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error("API Key not found");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            ...messages.map(m => ({ 
                role: m.role, 
                parts: [{ text: m.text }] 
            })),
            { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

      const reply = response.text;
      if (reply) {
        setMessages(prev => [...prev, { role: 'model', text: reply }]);
      } else {
        throw new Error("Empty response");
      }

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: '申し訳ありません。エラーが発生しました。もう一度お試しください。', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] animate-in fade-in duration-500 rounded-2xl overflow-hidden shadow-sm border border-orange-100 bg-white">
      <div className="bg-gradient-to-r from-orange-400 to-amber-500 p-4 text-white flex items-center gap-3 shadow-md z-10">
        <div className="bg-white/20 p-2 rounded-full backdrop-blur-md">
          <Bot size={24} className="text-white" />
        </div>
        <div>
          <h2 className="font-bold text-lg leading-tight">AI 店長代行</h2>
          <p className="text-xs text-orange-50 opacity-90 font-medium">24時間いつでも質問OK</p>
        </div>
        <Sparkles size={20} className="ml-auto text-yellow-200 opacity-70" />
      </div>

      <div className="flex-1 bg-stone-50 overflow-y-auto p-4 space-y-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-white ${
                msg.role === 'user' ? 'bg-stone-200 text-stone-600' : 'bg-orange-100 text-orange-600'
              }`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>

              {/* Bubble */}
              <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-stone-800 text-white rounded-tr-none' 
                  : msg.isError 
                    ? 'bg-red-50 text-red-600 border border-red-100 rounded-tl-none'
                    : 'bg-white text-stone-700 border border-stone-100 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 border border-white shadow-sm">
                <Bot size={16} />
              </div>
              <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm border border-stone-100 flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-orange-500" />
                <span className="text-xs text-stone-400 font-medium">確認中...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-white p-3 border-t border-stone-100">
        <div className="relative flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="質問を入力してください..."
            disabled={isLoading}
            className="w-full bg-stone-100 text-stone-800 rounded-full pl-5 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:bg-white transition-all text-sm placeholder:text-stone-400"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-1.5 top-1.5 p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 disabled:bg-stone-200 disabled:cursor-not-allowed transition-colors shadow-sm"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
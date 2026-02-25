import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Heart, Droplet, TrendingUp, MessageCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const suggestedQuestions = [
  'What does my heart rate trend mean?',
  'Is it normal to feel tired?',
  'Tips for better sleep',
  'When should I contact my doctor?',
];

const mockResponses: { [key: string]: string } = {
  default: "I'm here to help you understand your health data better. Your current vitals are all within healthy ranges, which is wonderful! Remember, I provide general information and insights, but any concerns should be discussed with your healthcare provider.",
  heart: "Your heart rate has been consistently between 68-73 bpm this week, which is perfectly normal for your stage of pregnancy. A slightly elevated heart rate is expected as your body works harder to support you and your baby. The stable trend shows your cardiovascular system is adapting well.",
  tired: "Feeling tired during pregnancy, especially in the second trimester, is very common. Your body is working hard to support your growing baby. Here are some tips:\n\n• Try to rest when you can, even short 15-20 minute naps help\n• Stay hydrated - dehydration can increase fatigue\n• Light exercise like walking can actually boost energy\n• Ensure you're getting enough iron and protein\n\nIf fatigue is severe or sudden, please consult your doctor.",
  sleep: "Better sleep during pregnancy can be challenging, but here are some evidence-based tips:\n\n• Sleep on your left side to optimize blood flow\n• Use pillows between your knees and under your belly\n• Avoid large meals 2-3 hours before bed\n• Keep your room cool and dark\n• Try prenatal yoga or gentle stretching before bed\n• Limit screen time in the evening\n\nYour sleep patterns are important for both you and baby!",
  doctor: "You should contact your healthcare provider if you experience:\n\n⚠️ Heavy bleeding or fluid leakage\n⚠️ Severe abdominal pain\n⚠️ Reduced fetal movements (after week 28)\n⚠️ Severe headaches with vision changes\n⚠️ Persistent nausea/vomiting\n⚠️ Signs of infection (fever, chills)\n\nFor urgent concerns, don't wait - call immediately or visit the emergency department. Your health and baby's safety come first!",
};

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hello Sarah! 👋 I'm your MatriCare AI assistant. I'm here to help you understand your health readings and answer questions about your pregnancy journey. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      let aiResponse = mockResponses.default;
      
      const lowerText = messageText.toLowerCase();
      if (lowerText.includes('heart') || lowerText.includes('rate')) {
        aiResponse = mockResponses.heart;
      } else if (lowerText.includes('tired') || lowerText.includes('fatigue') || lowerText.includes('energy')) {
        aiResponse = mockResponses.tired;
      } else if (lowerText.includes('sleep')) {
        aiResponse = mockResponses.sleep;
      } else if (lowerText.includes('doctor') || lowerText.includes('contact') || lowerText.includes('emergency')) {
        aiResponse = mockResponses.doctor;
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="bg-slate-50 dark:bg-gray-900 min-h-screen flex flex-col pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#407CE2] via-[#5088e5] to-[#3568c4] px-6 pt-12 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl text-white">AI Health Assistant</h1>
            <p className="text-blue-100 text-sm">Always here to help</p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="px-6 py-4">
        <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20">
          <CardContent className="p-4">
            <p className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
              💡 <strong>Note:</strong> This AI assistant provides general information and explanations
              about your health data. It is not a diagnostic tool and does not replace professional
              medical advice.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Messages */}
      <div className="flex-1 px-6 overflow-y-auto pb-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-[85%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {message.type === 'ai' && (
                  <div className="w-8 h-8 bg-[#407CE2] rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                )}
                <div>
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      message.type === 'user'
                        ? 'bg-[#407CE2] text-white'
                        : 'bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 text-slate-900 dark:text-white'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                  </div>
                  <p className={`text-xs text-slate-500 dark:text-gray-400 mt-1 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Health Stats */}
      {messages.length === 1 && (
        <div className="px-6 mb-4">
          <p className="text-sm text-slate-600 dark:text-gray-400 mb-3">Quick health overview:</p>
          <div className="grid grid-cols-3 gap-2">
            <Card className="border-slate-200 dark:border-gray-700 dark:bg-gray-800">
              <CardContent className="p-3 text-center">
                <Heart className="w-5 h-5 text-[#407CE2] mx-auto mb-1" />
                <p className="text-xs text-slate-600 dark:text-gray-400">Heart Rate</p>
                <p className="text-sm text-slate-900 dark:text-white">72 bpm</p>
              </CardContent>
            </Card>
            <Card className="border-slate-200 dark:border-gray-700 dark:bg-gray-800">
              <CardContent className="p-3 text-center">
                <Droplet className="w-5 h-5 text-[#407CE2] mx-auto mb-1" />
                <p className="text-xs text-slate-600 dark:text-gray-400">SpO₂</p>
                <p className="text-sm text-slate-900 dark:text-white">98%</p>
              </CardContent>
            </Card>
            <Card className="border-slate-200 dark:border-gray-700 dark:bg-gray-800">
              <CardContent className="p-3 text-center">
                <TrendingUp className="w-5 h-5 text-[#407CE2] mx-auto mb-1" />
                <p className="text-xs text-slate-600 dark:text-gray-400">BP</p>
                <p className="text-sm text-slate-900 dark:text-white">118/76</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Suggested Questions */}
      {messages.length === 1 && (
        <div className="px-6 mb-4">
          <p className="text-sm text-slate-600 dark:text-gray-400 mb-3">Suggested questions:</p>
          <div className="space-y-2">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleSend(question)}
                className="w-full text-left p-3 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl text-sm text-slate-700 dark:text-gray-300 hover:border-[#407CE2] hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4 inline mr-2 text-[#407CE2]" />
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="fixed bottom-20 left-0 right-0 bg-white dark:bg-gray-800 border-t border-slate-200 dark:border-gray-700 p-4">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything about your health..."
            className="flex-1"
          />
          <Button
            onClick={() => handleSend()}
            disabled={!inputValue.trim()}
            className="bg-[#407CE2] hover:bg-[#3568c4] text-white px-6"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
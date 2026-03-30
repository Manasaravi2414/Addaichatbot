import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your EduPathway AI assistant. I can help you navigate the platform and answer questions about features like dashboards, learning paths, mentorship, gamification, and more. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Navigation and general help
    if (lowerMessage.includes('dashboard') || lowerMessage.includes('view') || lowerMessage.includes('see')) {
      if (lowerMessage.includes('student')) {
        return "The Student Dashboard shows your progress, current level, earned badges, pending tasks, and study plan. You can track your learning journey and see how you're improving over time!";
      } else if (lowerMessage.includes('mentor')) {
        return "The Mentor Dashboard allows mentors to view their assigned students' performance, provide feedback, track engagement, and help students who need extra support.";
      } else if (lowerMessage.includes('ngo')) {
        return "The NGO Dashboard provides comprehensive analytics: total students, gender distribution, domain breakdown, progress reports, and improvement metrics. It helps NGOs monitor overall impact.";
      }
      return "We have three main dashboards: Student Dashboard (track your progress), Mentor Dashboard (monitor students), and NGO Dashboard (view analytics). Which one would you like to know more about?";
    }

    // Learning and courses
    if (lowerMessage.includes('learn') || lowerMessage.includes('course') || lowerMessage.includes('lesson') || lowerMessage.includes('study')) {
      return "Our hybrid learning system combines online and offline methods! You'll get pre-made lessons, worksheets, audio learning, and practical tasks. We focus on three domains: Coding 💻, Design 🎨, and Business 📊. Learning is organized by levels: Beginner, Intermediate, and Advanced.";
    }

    // Mentorship
    if (lowerMessage.includes('mentor') || lowerMessage.includes('guidance') || lowerMessage.includes('help')) {
      return "Our mentorship system matches you with mentors based on your domain, level, and language. Mentors provide feedback, guide your learning, and support your growth through remote sessions and group activities.";
    }

    // Domain and interests
    if (lowerMessage.includes('domain') || lowerMessage.includes('interest') || lowerMessage.includes('choose')) {
      return "We help you discover your interests through a simple test! You can choose from three domains: Coding 💻, Design 🎨, or Business 📊. Don't worry - you can switch domains later if your interests change!";
    }

    // Badges and gamification
    if (lowerMessage.includes('badge') || lowerMessage.includes('point') || lowerMessage.includes('reward') || lowerMessage.includes('gamif')) {
      return "Stay motivated with our gamification system! Earn badges like 'Problem Solver' and 'Creative Thinker', collect points, compete on leaderboards, and maintain learning streaks. Every achievement counts!";
    }

    // Tasks and assignments
    if (lowerMessage.includes('task') || lowerMessage.includes('assignment') || lowerMessage.includes('submit')) {
      return "After each lesson, you'll receive tasks to complete. Submit your work, get feedback from mentors, and earn badges based on your performance. This helps reinforce what you've learned!";
    }

    // Levels
    if (lowerMessage.includes('level') || lowerMessage.includes('beginner') || lowerMessage.includes('advanced')) {
      return "Learning is organized into three levels: Level 1 (Beginner), Level 2 (Intermediate), and Level 3 (Advanced). You progress through levels by completing tasks and scoring well. Each level has appropriate mentors assigned!";
    }

    // Community and peer learning
    if (lowerMessage.includes('community') || lowerMessage.includes('peer') || lowerMessage.includes('group')) {
      return "Join peer learning communities grouped by domain and level! Collaborate with fellow learners, discuss concepts, solve doubts together, and grow as a community. Learning is better together!";
    }

    // AI Confidence Trainer
    if (lowerMessage.includes('confidence') || lowerMessage.includes('interview') || lowerMessage.includes('speaking')) {
      return "Our AI Confidence Trainer helps you practice speaking, simulates interview scenarios, and provides feedback on clarity and confidence. Build the skills you need for real-world success!";
    }

    // Career guidance
    if (lowerMessage.includes('career') || lowerMessage.includes('roadmap') || lowerMessage.includes('future')) {
      return "Get personalized career guidance with weekly study plans and career roadmaps! For example, in Coding: Learn basics → Build project → Internship. We guide you toward the right future!";
    }

    // Notifications and alerts
    if (lowerMessage.includes('notification') || lowerMessage.includes('alert') || lowerMessage.includes('reminder')) {
      return "Stay on track with smart notifications! Get progress updates, task reminders, and achievement alerts. If you're inactive, mentors and NGOs are notified to help bring you back on track.";
    }

    // Volunteering
    if (lowerMessage.includes('volunteer') || lowerMessage.includes('help others')) {
      return "Want to give back? Register as a volunteer! You'll be assigned students, provide mentorship, get feedback, and earn appreciation points ⭐. Your contribution makes a real difference!";
    }

    // How to start
    if (lowerMessage.includes('start') || lowerMessage.includes('begin') || lowerMessage.includes('join')) {
      return "Getting started is easy! Take our interest discovery test, choose your domain (Coding/Design/Business), get assigned a level and mentor, then begin your personalized learning journey with hybrid online/offline methods!";
    }

    // About the platform
    if (lowerMessage.includes('about') || lowerMessage.includes('what is') || lowerMessage.includes('tell me')) {
      return "EduPathway AI is a hybrid learning ecosystem for students aged 1-19. We provide interest-based learning, level-based mentorship, gamified engagement, peer communities, and AI-powered guidance. We ensure quality education regardless of access to technology!";
    }

    // Features list
    if (lowerMessage.includes('feature') || lowerMessage.includes('what can')) {
      return "Key features include: Interest discovery, Domain selection (Coding/Design/Business), Level-based learning, Smart mentorship matching, Hybrid online/offline lessons, Gamification with badges, Peer communities, AI Confidence Trainer, Career guidance, and comprehensive dashboards!";
    }

    // Default response
    const responses = [
      "I can help you with: Dashboards, Learning paths, Mentorship, Badges & rewards, Tasks & assignments, Career guidance, Community features, and more! What would you like to know?",
      "I'm here to guide you through EduPathway AI! Ask me about features, how to navigate, or what you can do on the platform.",
      "Not sure what to ask? Try: 'How do I start?', 'Tell me about dashboards', 'What are the domains?', or 'How does mentorship work?'",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[32rem] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">EduPathway Assistant</h3>
                  <p className="text-xs text-white/80">Always here to help</p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2 ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-br-sm'
                        : 'bg-white text-gray-800 rounded-bl-sm shadow-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                  )}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 justify-start"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md transition-shadow"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

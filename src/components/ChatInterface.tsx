import React, { useEffect, useState } from 'react'
import { Settings as SettingsIcon, Calendar, FileText, MessageSquare, Heart, Coffee } from 'lucide-react'
import { useStore } from '../store/useStore'
import { useMessages } from '../hooks/useMessages'
import AIAvatar from './AIAvatar'
import MessageList from './MessageList'
import InputArea from './InputArea'
import ModeSwitcher from './ModeSwitcher'
import Settings from './Settings'

const QuickActionButton = ({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-3 w-full px-4 py-3 rounded-xl hover:bg-white/40 hover:shadow-sm transition-all group"
    >
      <div className="text-gray-500 group-hover:text-purple-500 transition-colors">{icon}</div>
      <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800">{label}</span>
    </button>
  )
}

const ChatInterface = () => {
  const { mode, aiName, isTyping, isTransitioning } = useStore()
  const { messages, sendMessage, switchMode, initializeChat } = useMessages()
  const [showSettings, setShowSettings] = useState(false)
  
  useEffect(() => {
    initializeChat()
  }, [])
  
  const isGirlfriend = mode === 'girlfriend'
  
  const quickActions = isGirlfriend
    ? [
        { icon: <Heart className="w-5 h-5" />, label: '聊心事', message: '今天过得怎么样？' },
        { icon: <Coffee className="w-5 h-5" />, label: '说说话', message: '陪我聊聊天吧~' },
        { icon: <MessageSquare className="w-5 h-5" />, label: '分享日常', message: '你今天想和你聊聊我的一天~' }
      ]
    : [
        { icon: <Calendar className="w-5 h-5" />, label: '日程安排', message: '帮我安排一下明天的日程' },
        { icon: <FileText className="w-5 h-5" />, label: '工作协助', message: '我需要一些工作建议' },
        { icon: <MessageSquare className="w-5 h-5" />, label: '任务管理', message: '帮我列出今天的任务' }
      ]
  
  return (
    <div className={`h-screen flex transition-all duration-1000 relative overflow-hidden ${isTransitioning ? 'scale-98 opacity-95' : 'scale-100 opacity-100'}`}>
      <div className={`absolute inset-0 transition-all duration-1000 ${isGirlfriend ? 'bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100' : 'bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100'}`} />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-25 ${isGirlfriend ? 'bg-pink-300' : 'bg-blue-300'} -top-64 -right-64 animate-pulse`} />
        <div className={`absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-25 ${isGirlfriend ? 'bg-purple-300' : 'bg-cyan-300'} -bottom-64 -left-64 animate-pulse`} style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative z-10 flex h-full w-full max-w-screen-2xl mx-auto p-6 gap-6">
        <aside className="w-80 flex-shrink-0 flex flex-col space-y-6">
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white/50">
            <AIAvatar mode={mode} aiName={aiName} />
            
            <div className="mt-2 space-y-2">
              {quickActions.map((action, index) => (
                <QuickActionButton
                  key={index}
                  icon={action.icon}
                  label={action.label}
                  onClick={() => sendMessage(action.message)}
                />
              ))}
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-4 border border-white/50">
            <h3 className="text-sm font-semibold text-gray-600 mb-3 px-2">切换模式</h3>
            <ModeSwitcher currentMode={mode} onSwitch={switchMode} />
          </div>
          
          <div className="flex-1" />
          
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-4 border border-white/50">
            <button
              onClick={() => setShowSettings(true)}
              className="flex items-center space-x-3 w-full px-4 py-3 rounded-xl hover:bg-gray-100 transition-all"
            >
              <SettingsIcon className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">设置</span>
            </button>
          </div>
        </aside>
        
        <main className="flex-1 flex flex-col bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
          <header className="border-b border-gray-200/50 px-8 py-6 flex items-center justify-between bg-gradient-to-r from-white/50 to-transparent">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-full ${isGirlfriend ? 'bg-gradient-to-br from-pink-400 to-purple-400' : 'bg-gradient-to-br from-blue-400 to-cyan-400'} flex items-center justify-center shadow-lg`}>
                <span className="text-2xl">👩</span>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800">{aiName}</h2>
                <p className={`text-sm ${isGirlfriend ? 'text-pink-600' : 'text-blue-600'}`}>
                  {isGirlfriend ? '💕 你的专属女友' : '💼 你的工作助理'}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm text-gray-500">在线</span>
              </div>
            </div>
          </header>
          
          <div className="flex-1 overflow-hidden">
            <MessageList messages={messages} isTyping={isTyping} />
          </div>
          
          <div className="border-t border-gray-200/50 bg-white/50">
            <InputArea onSendMessage={sendMessage} disabled={isTyping || isTransitioning} />
          </div>
        </main>
      </div>
      
      <Settings isOpen={showSettings} onClose={() => setShowSettings(false)} />
    </div>
  )
}

export default ChatInterface
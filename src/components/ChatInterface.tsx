import React, { useEffect, useState } from 'react'
import { Settings as SettingsIcon } from 'lucide-react'
import { useStore } from '../store/useStore'
import { useMessages } from '../hooks/useMessages'
import AIAvatar from './AIAvatar'
import MessageList from './MessageList'
import InputArea from './InputArea'
import ModeSwitcher from './ModeSwitcher'
import Settings from './Settings'

const ChatInterface: React.FC = () => {
  const { mode, aiName, isTyping, isTransitioning } = useStore()
  const { messages, sendMessage, switchMode, initializeChat } = useMessages()
  const [showSettings, setShowSettings] = useState(false)
  
  useEffect(() => {
    initializeChat()
  }, [])
  
  const isGirlfriend = mode === 'girlfriend'
  
  return (
    <div
      className={`h-screen flex flex-col transition-all duration-1000 relative overflow-hidden ${
        isTransitioning ? 'scale-95 opacity-90' : 'scale-100 opacity-100'
      }`}
    >
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          isGirlfriend
            ? 'bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100'
            : 'bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100'
        }`}
      />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl opacity-30 ${
            isGirlfriend ? 'bg-pink-300' : 'bg-blue-300'
          } -top-48 -right-48 animate-pulse`}
        />
        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl opacity-30 ${
            isGirlfriend ? 'bg-purple-300' : 'bg-cyan-300'
          } -bottom-48 -left-48 animate-pulse`}
          style={{ animationDelay: '1s' }}
        />
      </div>
      
      <div className="relative z-10 flex flex-col h-full max-w-4xl mx-auto w-full">
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  isGirlfriend
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                }`}
              />
              <span className="text-sm font-medium text-gray-600">
                {aiName} · {isGirlfriend ? '女友模式' : '助理模式'}
              </span>
            </div>
            <button
              onClick={() => setShowSettings(true)}
              className="p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all"
            >
              <SettingsIcon className="w-5 h-5" />
            </button>
          </div>
        </header>
        
        <div className="flex-1 overflow-hidden">
          <MessageList messages={messages} isTyping={isTyping} />
        </div>
        
        <ModeSwitcher currentMode={mode} onSwitch={switchMode} />
        
        <InputArea onSendMessage={sendMessage} disabled={isTyping || isTransitioning} />
      </div>
      
      <Settings isOpen={showSettings} onClose={() => setShowSettings(false)} />
    </div>
  )
}

export default ChatInterface

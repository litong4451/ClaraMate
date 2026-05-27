import React, { useEffect, useState } from 'react'
import { Message } from '../store/useStore'

interface MessageBubbleProps {
  message: Message
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const isUser = message.sender === 'user'
  
  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 transform transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div
        className={`max-w-[75%] px-5 py-3 rounded-2xl shadow-md ${
          isUser
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-br-md'
            : message.mode === 'girlfriend'
            ? 'bg-gradient-to-br from-pink-50 to-white text-gray-800 border border-pink-100 rounded-bl-md'
            : 'bg-gradient-to-br from-blue-50 to-white text-gray-800 border border-blue-100 rounded-bl-md'
        }`}
      >
        <p className="leading-relaxed whitespace-pre-wrap">{message.content}</p>
        <div className={`text-xs mt-1 ${isUser ? 'text-white/70' : 'text-gray-400'}`}>
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  )
}

export default MessageBubble

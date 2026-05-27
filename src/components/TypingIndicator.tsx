import React from 'react'

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 px-4 py-3">
      <div className="flex space-x-1">
        <span className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
      <span className="text-sm text-gray-500">正在输入...</span>
    </div>
  )
}

export default TypingIndicator

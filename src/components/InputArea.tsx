import React, { useState } from 'react'
import { Send, Mic } from 'lucide-react'

interface InputAreaProps {
  onSendMessage: (message: string) => void
  disabled?: boolean
}

const InputArea: React.FC<InputAreaProps> = ({ onSendMessage, disabled }) => {
  const [input, setInput] = useState('')
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !disabled) {
      onSendMessage(input.trim())
      setInput('')
    }
  }
  
  return (
    <div className="border-t border-gray-200/50 bg-white/50 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4">
        <div className="flex items-center space-x-3">
          <button
            type="button"
            className="p-3 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all"
          >
            <Mic className="w-5 h-5" />
          </button>
          
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="输入消息..."
            disabled={disabled}
            className="flex-1 px-6 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all disabled:opacity-50"
          />
          
          <button
            type="submit"
            disabled={!input.trim() || disabled}
            className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default InputArea

import React, { useState } from 'react'
import { Send, Mic, Paperclip, Smile } from 'lucide-react'

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
    <div className="border-t border-gray-200/50 bg-white/60 backdrop-blur-xl">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-5">
        <div className="flex items-end space-x-4 bg-white rounded-2xl px-5 py-3 shadow-lg border border-gray-100">
          <button
            type="button"
            className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all"
          >
            <Paperclip className="w-5 h-5" />
          </button>
          
          <button
            type="button"
            className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all"
          >
            <Smile className="w-5 h-5" />
          </button>
          
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="说点什么吧..."
            disabled={disabled}
            className="flex-1 px-3 py-2.5 bg-transparent border-0 focus:ring-0 focus:outline-none text-gray-700 placeholder-gray-400 text-base disabled:opacity-50"
          />
          
          <button
            type="button"
            className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all"
          >
            <Mic className="w-5 h-5" />
          </button>
          
          <button
            type="submit"
            disabled={!input.trim() || disabled}
            className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default InputArea
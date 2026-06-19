import React from 'react'
import { Mode } from '../store/useStore'
import { Sparkles, Briefcase } from 'lucide-react'

interface AIAvatarProps {
  mode: Mode
  aiName: string
}

const AIAvatar: React.FC<AIAvatarProps> = ({ mode, aiName }) => {
  const isGirlfriend = mode === 'girlfriend'
  
  return (
    <div className="flex flex-col items-center space-y-4 py-6">
      <div className="relative">
        <div 
          className={`w-32 h-32 rounded-full ${
            isGirlfriend
              ? 'bg-gradient-to-br from-pink-400 via-purple-400 to-pink-500'
              : 'bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500'
          } shadow-2xl relative overflow-hidden`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl">👩</div>
          </div>
          
          <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-tr from-transparent via-white/20 to-transparent" />
          
          <div 
            className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
              isGirlfriend
                ? 'bg-gradient-to-br from-pink-300 to-purple-300'
                : 'bg-gradient-to-br from-blue-300 to-cyan-300'
            }`}
          >
            {isGirlfriend ? (
              <Sparkles className="w-5 h-5 text-white" />
            ) : (
              <Briefcase className="w-5 h-5 text-white" />
            )}
          </div>
        </div>
        
        <div 
          className={`absolute inset-0 rounded-full blur-xl opacity-50 ${
            isGirlfriend ? 'bg-pink-300' : 'bg-blue-300'
          }`}
        />
      </div>
      
      <div className="text-center space-y-2">
        <h2 className={`text-2xl font-bold ${isGirlfriend ? 'text-pink-600' : 'text-blue-600'}`}>
          {aiName}
        </h2>
        <p className={`text-sm ${isGirlfriend ? 'text-pink-500' : 'text-blue-500'}`}>
          {isGirlfriend ? '💕 你的专属女友' : '💼 你的工作助理'}
        </p>
      </div>
    </div>
  )
}

export default AIAvatar

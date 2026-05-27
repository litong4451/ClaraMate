import React from 'react'
import { Mode } from '../store/useStore'
import { Sparkles, Briefcase, ArrowRight } from 'lucide-react'

interface ModeSwitcherProps {
  currentMode: Mode
  onSwitch: (mode: Mode) => void
}

const ModeSwitcher: React.FC<ModeSwitcherProps> = ({ currentMode, onSwitch }) => {
  const isGirlfriend = currentMode === 'girlfriend'
  
  return (
    <div className="flex items-center justify-center space-x-3 py-4">
      <button
        onClick={() => onSwitch('girlfriend')}
        className={`flex items-center space-x-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
          isGirlfriend
            ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg scale-105'
            : 'bg-white/60 text-gray-600 hover:bg-pink-50 hover:text-pink-600'
        }`}
      >
        <Sparkles className="w-4 h-4" />
        <span className="font-medium">女友模式</span>
      </button>
      
      <ArrowRight className="w-5 h-5 text-gray-400" />
      
      <button
        onClick={() => onSwitch('assistant')}
        className={`flex items-center space-x-2 px-5 py-2.5 rounded-full transition-all duration-300 ${
          !isGirlfriend
            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105'
            : 'bg-white/60 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
        }`}
      >
        <Briefcase className="w-4 h-4" />
        <span className="font-medium">助理模式</span>
      </button>
    </div>
  )
}

export default ModeSwitcher

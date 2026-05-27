import React from 'react'
import { Mode } from '../store/useStore'
import { Sparkles, Briefcase } from 'lucide-react'

interface ModeSwitcherProps {
  currentMode: Mode
  onSwitch: (mode: Mode) => void
}

const ModeSwitcher: React.FC<ModeSwitcherProps> = ({ currentMode, onSwitch }) => {
  const isGirlfriend = currentMode === 'girlfriend'
  
  return (
    <div className="flex flex-col space-y-3">
      <button
        onClick={() => onSwitch('girlfriend')}
        className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-300 border-2 ${
          isGirlfriend
            ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg border-transparent'
            : 'bg-white/50 text-gray-600 border-transparent hover:border-pink-300 hover:bg-pink-50'
        }`}
      >
        <Sparkles className="w-5 h-5" />
        <span className="font-medium">女友模式</span>
        {isGirlfriend && <div className="ml-auto w-2 h-2 rounded-full bg-white" />}
      </button>
      
      <button
        onClick={() => onSwitch('assistant')}
        className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-300 border-2 ${
          !isGirlfriend
            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg border-transparent'
            : 'bg-white/50 text-gray-600 border-transparent hover:border-blue-300 hover:bg-blue-50'
        }`}
      >
        <Briefcase className="w-5 h-5" />
        <span className="font-medium">助理模式</span>
        {!isGirlfriend && <div className="ml-auto w-2 h-2 rounded-full bg-white" />}
      </button>
    </div>
  )
}

export default ModeSwitcher
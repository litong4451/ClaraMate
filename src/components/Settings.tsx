import React, { useState } from 'react'
import { X, User, Sparkles, Moon, Sun } from 'lucide-react'
import { useStore } from '../store/useStore'

interface SettingsProps {
  isOpen: boolean
  onClose: () => void
}

const Settings: React.FC<SettingsProps> = ({ isOpen, onClose }) => {
  const { userName, aiName, setUserName, setAiName } = useStore()
  const [tempUserName, setTempUserName] = useState(userName)
  const [tempAiName, setTempAiName] = useState(aiName)
  
  const handleSave = () => {
    if (tempUserName.trim()) setUserName(tempUserName.trim())
    if (tempAiName.trim()) setAiName(tempAiName.trim())
    onClose()
  }
  
  if (!isOpen) return null
  
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">设置</h2>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="space-y-3">
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
              <User className="w-4 h-4" />
              <span>你的昵称</span>
            </label>
            <input
              type="text"
              value={tempUserName}
              onChange={(e) => setTempUserName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="输入你的昵称"
            />
          </div>
          
          <div className="space-y-3">
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
              <Sparkles className="w-4 h-4" />
              <span>AI称呼</span>
            </label>
            <input
              type="text"
              value={tempAiName}
              onChange={(e) => setTempAiName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="输入AI的昵称"
            />
          </div>
          
          <div className="pt-4">
            <button
              onClick={handleSave}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              保存设置
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings

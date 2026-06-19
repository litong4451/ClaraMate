import { useCallback } from 'react'
import { useStore, Mode } from '../store/useStore'
import { generateAIResponse, getWelcomeMessage, getModeSwitchMessage, delay } from '../utils/aiResponses'

export const useMessages = () => {
  const { 
    messages, 
    mode, 
    aiName,
    addMessage, 
    setTyping,
    setMode,
    setTransitioning,
    clearMessages
  } = useStore()

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return
    
    addMessage(content, 'user')
    setTyping(true)
    
    await delay(1000 + Math.random() * 2000)
    
    const response = generateAIResponse(content, mode)
    addMessage(response, 'ai')
    setTyping(false)
  }, [addMessage, setTyping, mode])

  const switchMode = useCallback((newMode: Mode) => {
    if (newMode === mode) return
    
    setTransitioning(true)
    
    setTimeout(() => {
      setMode(newMode)
      const switchMessage = getModeSwitchMessage(newMode, aiName)
      addMessage(switchMessage, 'ai')
      setTransitioning(false)
    }, 1500)
  }, [mode, setMode, setTransitioning, addMessage, aiName])

  const initializeChat = useCallback(() => {
    if (messages.length === 0) {
      const welcome = getWelcomeMessage(mode, aiName)
      addMessage(welcome, 'ai')
    }
  }, [messages.length, mode, aiName, addMessage])

  return {
    messages,
    sendMessage,
    switchMode,
    initializeChat,
    clearMessages
  }
}

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Mode = 'assistant' | 'girlfriend'

export interface Message {
  id: string
  content: string
  sender: 'user' | 'ai'
  timestamp: number
  mode: Mode
}

interface AppState {
  mode: Mode
  messages: Message[]
  userName: string
  aiName: string
  isTyping: boolean
  isTransitioning: boolean
  
  setMode: (mode: Mode) => void
  setTransitioning: (transitioning: boolean) => void
  addMessage: (content: string, sender: 'user' | 'ai') => void
  setTyping: (typing: boolean) => void
  setUserName: (name: string) => void
  setAiName: (name: string) => void
  clearMessages: () => void
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      mode: 'girlfriend',
      messages: [],
      userName: '主人',
      aiName: '小依',
      isTyping: false,
      isTransitioning: false,
      
      setMode: (mode) => set({ mode }),
      setTransitioning: (isTransitioning) => set({ isTransitioning }),
      
      addMessage: (content, sender) => 
        set((state) => ({
          messages: [
            ...state.messages,
            {
              id: Date.now().toString(),
              content,
              sender,
              timestamp: Date.now(),
              mode: state.mode
            }
          ]
        })),
      
      setTyping: (isTyping) => set({ isTyping }),
      setUserName: (userName) => set({ userName }),
      setAiName: (aiName) => set({ aiName }),
      clearMessages: () => set({ messages: [] })
    }),
    {
      name: 'ai-companion-storage',
      partialize: (state) => ({
        mode: state.mode,
        userName: state.userName,
        aiName: state.aiName,
        messages: state.messages.slice(-50)
      })
    }
  )
)

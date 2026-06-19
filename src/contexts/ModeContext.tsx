import React, { createContext, useContext, ReactNode } from 'react'
import { useStore, Mode } from '../store/useStore'

interface ModeContextType {
  mode: Mode
  isTransitioning: boolean
  setMode: (mode: Mode) => void
  setTransitioning: (transitioning: boolean) => void
}

const ModeContext = createContext<ModeContextType | undefined>(undefined)

export const ModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { mode, isTransitioning, setMode, setTransitioning } = useStore()
  
  return (
    <ModeContext.Provider value={{ mode, isTransitioning, setMode, setTransitioning }}>
      {children}
    </ModeContext.Provider>
  )
}

export const useMode = () => {
  const context = useContext(ModeContext)
  if (context === undefined) {
    throw new Error('useMode must be used within a ModeProvider')
  }
  return context
}

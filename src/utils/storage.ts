export const getItem = (key: string, defaultValue: any = null) => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.error('Error reading from localStorage:', error)
    return defaultValue
  }
}

export const setItem = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    console.error('Error writing to localStorage:', error)
    return false
  }
}

export const removeItem = (key: string) => {
  try {
    localStorage.removeItem(key)
    return true
  } catch (error) {
    console.error('Error removing from localStorage:', error)
    return false
  }
}

export const STORAGE_KEYS = {
  USER_NAME: 'ai-companion-user-name',
  AI_NAME: 'ai-companion-ai-name',
  PREFERRED_MODE: 'ai-companion-preferred-mode',
  THEME: 'ai-companion-theme'
} as const

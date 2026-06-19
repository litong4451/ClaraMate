import { Mode } from '../store/useStore'
import { 
  assistantResponses, 
  girlfriendResponses,
  defaultGirlfriendResponses,
  defaultAssistantResponses 
} from '../data/responses'

export const generateAIResponse = (userMessage: string, mode: Mode): string => {
  const normalizedMessage = userMessage.toLowerCase()
  const responseSet = mode === 'assistant' ? assistantResponses : girlfriendResponses
  const defaultResponses = mode === 'assistant' ? defaultAssistantResponses : defaultGirlfriendResponses
  
  for (const { keywords, responses } of responseSet) {
    const hasKeyword = keywords.some(keyword => normalizedMessage.includes(keyword))
    if (hasKeyword) {
      return responses[Math.floor(Math.random() * responses.length)]
    }
  }
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
}

export const getWelcomeMessage = (mode: Mode, aiName: string): string => {
  if (mode === 'assistant') {
    return `您好，我是${aiName}，您的专属工作助理。有什么可以帮您的吗？`
  } else {
    return `嗨～欢迎回来！我是${aiName}，今天想和我聊什么呢？💕`
  }
}

export const getModeSwitchMessage = (newMode: Mode, aiName: string): string => {
  if (newMode === 'assistant') {
    return `${aiName}切换到助理模式，随时为您提供专业的帮助！`
  } else {
    return `${aiName}切换到女友模式～有什么心事想和我分享吗？💕`
  }
}

export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

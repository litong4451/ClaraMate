import React, { useEffect, useRef } from 'react'
import { Message } from '../store/useStore'
import MessageBubble from './MessageBubble'
import TypingIndicator from './TypingIndicator'

interface MessageListProps {
  messages: Message[]
  isTyping: boolean
}

const MessageList: React.FC<MessageListProps> = ({ messages, isTyping }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])
  
  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
      {isTyping && <TypingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  )
}

export default MessageList

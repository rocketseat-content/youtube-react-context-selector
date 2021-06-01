import { useCallback, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { createContext } from 'use-context-selector'

type Message = {
  id: string;
  author: string;
  text: string;
}

type User = {
  id: string;
  name: string;
}

type ChatContextType = {
  messages: Message[]
  connected: User[]
  onNewMessage: (message: Omit<Message, 'id'>) => void
  onUserConnected: (name: string) => void
}

export const ChatContext = createContext({} as ChatContextType)

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [connected, setConnected] = useState<User[]>([])

  const onNewMessage = useCallback(({ author, text }: Omit<Message, 'id'>) => {
    const id = uuid()

    const message = {
      id,
      author,
      text
    }

    setMessages(state => [...state, message]);
  }, []);

  const onUserConnected = useCallback((name: string) => {
    const id = uuid()

    const user = {
      id,
      name
    }

    setConnected(state => [...state, user])
  }, []);

  return (
    <ChatContext.Provider 
      value={{ 
        messages,
        connected,
        onNewMessage,
        onUserConnected,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}
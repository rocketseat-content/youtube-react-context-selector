import { useContextSelector } from 'use-context-selector'
import { ChatContext } from '../context/ChatContext'

export function useChatMessages() {
  const messages = useContextSelector(ChatContext, chat => chat.messages);
  const onNewMessage = useContextSelector(ChatContext, chat => chat.onNewMessage);

  return {
    messages,
    onNewMessage,
  }
}
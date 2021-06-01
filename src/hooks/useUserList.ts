import { useContextSelector } from 'use-context-selector'
import { ChatContext } from '../context/ChatContext'

export function useUserList() {
  const connected = useContextSelector(ChatContext, chat => chat.connected);
  const onUserConnected = useContextSelector(ChatContext, chat => chat.onUserConnected);

  return {
    connected,
    onUserConnected,
  }
}
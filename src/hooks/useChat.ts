import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export function useChat() {
  const chat = useContext(ChatContext)

  return chat;
}
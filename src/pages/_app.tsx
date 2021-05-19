import 'tailwindcss/tailwind.css'
import { ChatProvider } from '../context/ChatContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChatProvider>
      <Component {...pageProps} />
    </ChatProvider>
  )
}

export default MyApp

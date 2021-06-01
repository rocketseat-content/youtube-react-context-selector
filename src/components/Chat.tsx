import faker from "faker"
import { FormEvent } from "react"
import { useChatMessages } from "../hooks/useChatMessages"

export function Chat() {
  const { messages, onNewMessage } = useChatMessages()

  function handleSendMessage(event: FormEvent) {
    event.preventDefault()

    onNewMessage({
      author: 'Diego Fernandes',
      text: faker.lorem.paragraph(),
    }) 
  }

  return (
    <section aria-labelledby="chat-title">
      <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
        <div className="divide-y divide-gray-200">
          <div className="px-4 py-5 sm:px-6">
            <h2 id="chat-title" className="text-lg font-medium text-gray-900">
              Chat messages
            </h2>
          </div>
          <div className="px-4 py-6 sm:px-6">
            <ul className="space-y-8">
              {messages.map((message) => (
                <li key={message.id}>
                  <div className="flex space-x-3">
                    <div>
                      <div className="text-sm">
                        <a href="#" className="font-medium text-gray-900">
                          {message.author}
                        </a>
                      </div>
                      <div className="mt-1 text-sm text-gray-700">
                        <p>{message.text}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-6 sm:px-6">
          <div className="flex space-x-3">
            <div className="min-w-0 flex-1">
              <form action="#" onSubmit={handleSendMessage}>
                <textarea
                  id="comment"
                  name="comment"
                  rows={3}
                  className="shadow-sm block p-4 w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Leave a message"
                  defaultValue={''}
                />
                <div className="mt-3 flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
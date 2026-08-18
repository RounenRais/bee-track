'use client';

import { useState } from 'react';

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    const text = input.trim();

    if (!text || loading) {
      return;
    }

    const userMessage = {
      role: 'user',
      content: text,
    };

    const updatedMessages = [
      ...messages,
      userMessage,
    ];

    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || 'Bir hata oluştu.'
        );
      }

      const assistantMessage = {
        role: 'assistant',
        content: data.reply,
      };

      setMessages([
        ...updatedMessages,
        assistantMessage,
      ]);
    } catch (error) {
      console.error(error);

      setMessages([
        ...updatedMessages,
        {
          role: 'assistant',
          content:
            'Şu anda bir sorun oluştu. Lütfen tekrar deneyin.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <div>
      <h2>BeeTrack Asistan</h2>

      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>
              {message.role === 'user'
                ? 'Siz'
                : 'BeeTrack'}
              :
            </strong>

            <p>{message.content}</p>
          </div>
        ))}

        {loading && (
          <p>BeeTrack düşünüyor...</p>
        )}
      </div>

      <textarea
        value={input}
        onChange={(event) =>
          setInput(event.target.value)
        }
        onKeyDown={handleKeyDown}
        placeholder="BeeTrack hakkında bir şey sorun..."
      />

      <button
        onClick={sendMessage}
        disabled={loading}
      >
        Gönder
      </button>
    </div>
  );
}
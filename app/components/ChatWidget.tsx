"use client";

import { useEffect, useRef, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const WELCOME_MESSAGE: ChatMessage = {
  role: "assistant",
  content:
    "Merhaba! Ben BeeTrack Asistan 🐝 Donanım, sensörler, kurulum ya da fiyatlandırma hakkında merak ettiğin bir şey var mı?",
};

function BeeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <clipPath id="bee-body-clip">
          <ellipse cx="24" cy="27" rx="11" ry="13" />
        </clipPath>
      </defs>
      <ellipse
        cx="15"
        cy="19"
        rx="7.5"
        ry="5"
        fill="white"
        fillOpacity="0.9"
        transform="rotate(-25 15 19)"
      />
      <ellipse
        cx="33"
        cy="19"
        rx="7.5"
        ry="5"
        fill="white"
        fillOpacity="0.9"
        transform="rotate(25 33 19)"
      />
      <g clipPath="url(#bee-body-clip)">
        <ellipse cx="24" cy="27" rx="11" ry="13" fill="#F5A623" />
        <rect x="12" y="18" width="24" height="4" fill="#1E3B5A" />
        <rect x="12" y="25" width="24" height="4" fill="#1E3B5A" />
        <rect x="12" y="32" width="24" height="4" fill="#1E3B5A" />
      </g>
      <circle cx="24" cy="12" r="5.5" fill="#1E3B5A" />
      <path
        d="M20.5 8 L17.5 3M27.5 8 L30.5 3"
        stroke="#1E3B5A"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="17.5" cy="3" r="1.3" fill="#1E3B5A" />
      <circle cx="30.5" cy="3" r="1.3" fill="#1E3B5A" />
      <circle cx="21.5" cy="12.5" r="1" fill="white" />
      <circle cx="26.5" cy="12.5" r="1" fill="white" />
    </svg>
  );
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="4" y1="4" x2="20" y2="20" />
      <line x1="20" y1="4" x2="4" y2="20" />
    </svg>
  );
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, loading]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const userMessage: ChatMessage = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Bir hata oluştu.");
      }

      setMessages([
        ...updatedMessages,
        { role: "assistant", content: data.reply },
      ]);
    } catch (error) {
      console.error(error);
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "Şu anda bir sorun oluştu. Lütfen tekrar deneyin.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Chat panel */}
      <div
        className={`w-[92vw] max-w-sm sm:w-96 h-[520px] max-h-[75vh] bg-white rounded-2xl shadow-2xl border border-black/5 flex flex-col overflow-hidden origin-bottom-right transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
        role="dialog"
        aria-label="BeeTrack sohbet asistanı"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="relative bg-navy px-4 py-4 flex items-center gap-3 overflow-hidden shrink-0">
          <div className="absolute -top-4 -right-4 w-20 h-20 hexagon bg-gold/10" />
          <div className="absolute -bottom-6 left-8 w-14 h-14 hexagon bg-gold/10" />

          <div className="relative w-11 h-11 rounded-full bg-gold flex items-center justify-center shrink-0 shadow-inner">
            <BeeIcon className="w-8 h-8" />
          </div>
          <div className="relative min-w-0">
            <p className="text-white font-semibold text-sm leading-tight truncate">
              BeeTrack Asistan
            </p>
            <p className="text-gray-300 text-xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
              Çevrimiçi
            </p>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            aria-label="Sohbeti kapat"
            className="relative ml-auto text-gray-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <CloseIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#F8F9FA]">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap break-words shadow-sm ${
                  message.role === "user"
                    ? "bg-navy text-white rounded-2xl rounded-br-sm"
                    : "bg-white text-gray-800 border border-gray-200 rounded-2xl rounded-bl-sm"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 bg-white p-3 flex items-end gap-2 shrink-0">
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="BeeTrack hakkında bir şey sorun..."
            rows={1}
            className="flex-1 resize-none rounded-xl border border-gray-300 px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold max-h-28"
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            aria-label="Gönder"
            className="shrink-0 w-10 h-10 rounded-full bg-gold text-navy flex items-center justify-center hover:bg-yellow-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <SendIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Sohbeti kapat" : "Sohbeti aç"}
        aria-expanded={isOpen}
        className="relative w-16 h-16 rounded-full bg-gold shadow-xl flex items-center justify-center hover:scale-105 hover:bg-yellow-400 active:scale-95 transition-all duration-200 shrink-0"
      >
        {isOpen ? (
          <CloseIcon className="w-6 h-6 text-navy" />
        ) : (
          <BeeIcon className="w-10 h-10" />
        )}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-gold/50 animate-ping" />
        )}
      </button>
    </div>
  );
}

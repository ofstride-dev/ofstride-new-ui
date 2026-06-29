import type { RefObject } from 'react';
import type { ChatMessage } from '../../types/chat';

interface ChatMessagesProps {
  messages: ChatMessage[];
  isLoading: boolean;
  onOptionClick: (value: string) => void;
  messagesEndRef: RefObject<HTMLDivElement>;
}

export function ChatMessages({ messages, isLoading, onOptionClick, messagesEndRef }: ChatMessagesProps) {
  return (
    <div 
      className="flex-1 overflow-y-auto p-4 space-y-4"
      role="log"
      aria-live="polite"
      aria-label="Chat messages"
    >
      {messages.map((msg) => (
        <div 
          key={msg.id} 
          className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div 
            className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
              msg.type === 'user' 
                ? 'bg-primary-600 text-white rounded-br-sm' 
                : 'bg-slate-100 text-slate-800 rounded-bl-sm'
            }`}
          >
            <p className="whitespace-pre-line">{msg.content}</p>
            {msg.options && msg.options.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {msg.options.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => onOptionClick(opt.value)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                      msg.type === 'user'
                        ? 'bg-white/20 hover:bg-white/30 text-white'
                        : 'bg-primary-100 hover:bg-primary-200 text-primary-700'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
      
      {isLoading && (
        <div className="flex justify-start">
          <div className="rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-500 rounded-bl-sm">
            <span className="flex items-center gap-2">
              <span className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </span>
              Thinking...
            </span>
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
}

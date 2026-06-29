import { forwardRef } from 'react';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  disabled?: boolean;
  placeholder?: string;
}

export const ChatInput = forwardRef<HTMLInputElement, ChatInputProps>(
  ({ value, onChange, onSend, onKeyDown, disabled, placeholder }, ref) => {
    return (
      <div className="border-t border-slate-100 p-3 bg-white">
        <div className="flex gap-2">
          <input
            ref={ref}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={placeholder || 'Type your message...'}
            disabled={disabled}
            className="flex-1 rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 disabled:bg-slate-50 disabled:text-slate-400 transition"
            aria-label="Message input"
          />
          <button
            onClick={onSend}
            disabled={!value.trim() || disabled}
            className="rounded-xl bg-primary-600 px-4 py-2.5 text-sm text-white hover:bg-primary-700 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-1"
            aria-label="Send message"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
        <p className="mt-1.5 text-[10px] text-slate-400 text-center">
          Press Enter to send · Esc to close
        </p>
      </div>
    );
  }
);

ChatInput.displayName = 'ChatInput';

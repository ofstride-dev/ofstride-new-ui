import { forwardRef } from 'react';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
  disabled?: boolean;
  placeholder?: string;
}

export const ChatInput = forwardRef<HTMLInputElement, ChatInputProps>(function ChatInput({
  value,
  onChange,
  onSend,
  onKeyDown,
  disabled,
  placeholder = 'Type your message...'
}, ref) {
  return (
    <div className="border-t border-slate-200 bg-white p-3">
      <div className="flex items-center gap-2 rounded-2xl border border-slate-200 px-3 py-2">
        <input
          ref={ref}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          disabled={disabled}
          placeholder={placeholder}
          className="flex-1 border-none bg-transparent text-sm outline-none"
        />
        <button
          type="button"
          onClick={onSend}
          disabled={disabled || !value.trim()}
          className="rounded-full bg-primary-600 px-3 py-1.5 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
});

import { useState, useRef, useEffect, useCallback } from 'react';
import { useLeadIntake } from '../../hooks/useLeadIntake';
import { useChatPersistence } from '../../hooks/useChatPersistence';
import type { ChatMessage, LeadInfo, IntakeStep } from '../../types/chat';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { ChatErrorBoundary } from './ChatErrorBoundary';

const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  type: 'bot',
  content: "👋 Hi! I'm Saarthi, your Ofstride guide. I'll ask a few quick questions and then help you with answers or connect you with the right expert.",
  timestamp: Date.now(),
};

const NAME_PROMPT: ChatMessage = {
  id: 'name-prompt',
  type: 'bot',
  content: "What's your name?",
  timestamp: Date.now(),
};

function ChatWidgetContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE, NAME_PROMPT]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const { step, lead, errors, processInput, reset: resetIntake, isComplete, currentPrompt } = useLeadIntake();

  useChatPersistence(
    messages, lead, step,
    setMessages,
    (l: LeadInfo) => {},
    (s: string) => {}
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const addMessage = useCallback((message: ChatMessage) => {
    setMessages(prev => [...prev, message]);
  }, []);

  const handleSend = useCallback(async () => {
    if (!input.trim() || isLoading || isComplete) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: input.trim(),
      timestamp: Date.now(),
    };
    addMessage(userMsg);
    setInput('');
    setIsLoading(true);

    await new Promise(r => setTimeout(r, 400));

    const result = processInput(input.trim());
    setIsLoading(false);

    if (!result.success && result.error) {
      addMessage({
        id: `error-${Date.now()}`,
        type: 'bot',
        content: `⚠️ ${result.error}`,
        timestamp: Date.now(),
      });
      return;
    }

    if (result.botResponse) {
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        type: 'bot',
        content: result.botResponse,
        timestamp: Date.now(),
        options: result.success && isComplete ? [
          { label: '📅 Book a call now', value: 'book' },
          { label: '📝 Start over', value: 'restart' },
        ] : undefined,
      };
      addMessage(botMsg);
    }

    if (result.success && isComplete && result.updatedLead) {
      const formData = new FormData();
      formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY);
      formData.append('subject', `Chat Lead: ${result.updatedLead.name} — ${result.updatedLead.company}`);
      formData.append('name', result.updatedLead.name);
      formData.append('email', 'chat-lead@ofstride.com');
      formData.append('message', 
        `Chat Lead Submission:\n` +
        `Name: ${result.updatedLead.name}\n` +
        `Phone: ${result.updatedLead.phone}\n` +
        `Location: ${result.updatedLead.location}\n` +
        `Company: ${result.updatedLead.company}\n` +
        `Need: ${result.updatedLead.taskSummary}`
      );
      formData.append('botcheck', '');
      
      fetch('https://api.web3forms.com/submit', { 
        method: 'POST', 
        body: formData 
      }).catch(() => {});
    }
  }, [input, isLoading, isComplete, processInput, addMessage]);

  const handleOption = useCallback((value: string) => {
    if (value === 'book') {
      window.location.href = '/contact';
    } else if (value === 'restart') {
      setMessages([WELCOME_MESSAGE, NAME_PROMPT]);
      resetIntake();
      setInput('');
    }
  }, [resetIntake]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }, [handleSend]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
        aria-label="Open chat with Saarthi"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    );
  }

  return (
    <div 
      className="fixed bottom-24 right-6 z-50 flex h-[520px] w-[400px] flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden"
      role="dialog"
      aria-label="Chat with Saarthi"
      aria-modal="true"
    >
      <ChatHeader onClose={() => setIsOpen(false)} />
      <ChatMessages 
        messages={messages} 
        isLoading={isLoading}
        onOptionClick={handleOption}
        messagesEndRef={messagesEndRef}
      />
      <ChatInput
        ref={inputRef}
        value={input}
        onChange={setInput}
        onSend={handleSend}
        onKeyDown={handleKeyDown}
        disabled={isLoading || isComplete}
        placeholder={isComplete ? 'Conversation complete' : 'Type your message...'}
      />
    </div>
  );
}

export function ChatWidget() {
  return (
    <ChatErrorBoundary>
      <ChatWidgetContent />
    </ChatErrorBoundary>
  );
}

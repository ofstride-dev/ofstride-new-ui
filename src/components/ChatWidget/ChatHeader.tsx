interface ChatHeaderProps {
  onClose: () => void;
}

export function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold ring-2 ring-white/30">
          S
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Saarthi</p>
          <p className="text-xs text-primary-100 flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Online
          </p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="rounded-lg p-1.5 text-white/70 hover:text-white hover:bg-white/10 transition"
        aria-label="Close chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}

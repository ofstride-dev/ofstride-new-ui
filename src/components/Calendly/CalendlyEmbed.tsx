import { useRef, useState, useEffect } from 'react';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, string>;
        utm?: Record<string, string>;
      }) => void;
    };
  }
}

interface CalendlyEmbedProps {
  url: string;
  height?: number;
  prefill?: Record<string, string>;
}

export function CalendlyEmbed({ url, height = 650, prefill = {} }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let retryCount = 0;
    const maxRetries = 30;

    // Appends dark themes styling markers to the embedded URL properties to complement free accounts
    const darkUrlMarker = url.includes('?') 
      ? `${url}&background_color=030712&text_color=f8fafc&primary_color=00209F`
      : `${url}?background_color=030712&text_color=f8fafc&primary_color=00209F`;

    const initWidget = () => {
      if (window.Calendly && containerRef.current) {
        try {
          window.Calendly.initInlineWidget({
            url: darkUrlMarker,
            parentElement: containerRef.current,
            prefill,
            utm: {},
          });
          setLoaded(true);
        } catch {
          setError('Failed to initialize calendar widget');
        }
      } else if (retryCount < maxRetries) {
        retryCount++;
        timeoutId = setTimeout(initWidget, 200);
      } else {
        setError('Calendar container timed out. Please refresh to restore synchronization.');
      }
    };

    initWidget();
    return () => clearTimeout(timeoutId);
  }, [url, prefill]);

  return (
    <div
      ref={containerRef}
      style={{ minWidth: '320px', height: `${height}px` }}
      aria-label={loaded ? 'Booking calendar' : 'Loading booking calendar'}
      role="region"
      className="rounded-xl border border-white/5 bg-[#030712] overflow-hidden w-full transition-all"
    >
      {!loaded && !error && (
        <div className="flex flex-col items-center justify-center h-full gap-3 text-slate-500">
          <div className="h-8 w-8 border-2 border-white/10 border-t-[#5D7CC1] rounded-full animate-spin" />
          <p className="text-xs font-semibold uppercase tracking-wider">Syncing Hub Elements...</p>
        </div>
      )}
      {error && (
        <div className="flex flex-col items-center justify-center h-full gap-3 p-6 text-center">
          <p className="text-red-400 text-sm font-semibold">{error}</p>
        </div>
      )}
    </div>
  );
}

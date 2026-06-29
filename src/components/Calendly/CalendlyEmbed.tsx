// src/components/Calendly/CalendlyEmbed.tsx
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

export function CalendlyEmbed({ url, height = 700, prefill = {} }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let retryCount = 0;
    const maxRetries = 30; // 6 seconds max wait

    const initWidget = () => {
      if (window.Calendly && containerRef.current) {
        try {
          window.Calendly.initInlineWidget({
            url,
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
        setError('Calendar widget failed to load. Please refresh or contact us directly.');
      }
    };

    // Script is already in index.html, just wait for it
    initWidget();

    return () => clearTimeout(timeoutId);
  }, [url, prefill]);

  return (
    <div
      ref={containerRef}
      style={{ minWidth: '320px', height: `${height}px` }}
      aria-label={loaded ? 'Booking calendar' : 'Loading booking calendar'}
      role="region"
      className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
    >
      {!loaded && !error && (
        <div className="flex flex-col items-center justify-center h-full gap-3 text-slate-400">
          <div className="h-8 w-8 border-2 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
          <p className="text-sm">Loading calendar...</p>
        </div>
      )}
      {error && (
        <div className="flex flex-col items-center justify-center h-full gap-3 p-6 text-center">
          <p className="text-red-500 text-sm">{error}</p>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 text-sm underline"
          >
            Open calendar in new tab →
          </a>
        </div>
      )}
    </div>
  );
}

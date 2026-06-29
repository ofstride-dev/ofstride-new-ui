import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ChatErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ChatWidget error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <button
          onClick={() => window.location.href = '/contact'}
          className="fixed bottom-6 right-6 z-50 flex h-14 items-center gap-2 rounded-full bg-red-600 text-white shadow-lg px-5 hover:bg-red-700 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium">Chat unavailable — Contact us</span>
        </button>
      );
    }

    return this.props.children;
  }
}

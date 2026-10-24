import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('WeddingApp caught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#120306] text-[#FDF8E2] flex flex-col items-center justify-center p-6 text-center font-hindi">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center mb-4">
            <span className="text-2xl text-amber-300">🕉️</span>
          </div>
          <h1 className="font-rozha text-3xl sm:text-4xl text-amber-200 mb-2">
            ॥ शुभ विवाह ॥
          </h1>
          <p className="text-amber-100/90 text-sm sm:text-base max-w-md mx-auto mb-6">
            दीपऱाज संग नेहा के मांगलिक विवाह निमंत्रण में आपका स्वागत है।
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              window.location.reload();
            }}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-bold text-sm shadow-lg hover:from-amber-500 hover:to-amber-400 cursor-pointer"
          >
            पुनः लोड करें (Reload)
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

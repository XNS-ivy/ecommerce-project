import React, { ReactNode, ErrorInfo } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error:  Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends React. Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  public static getDerivedStateFromError(error: Error): Omit<State, 'errorInfo'> {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo:  null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="text-center bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
            <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Terjadi Kesalahan
            </h1>
            
            <p className="text-gray-600 mb-6 text-lg">
              Mohon maaf, terjadi error yang tidak terduga pada aplikasi.  Tim kami telah diberitahu. 
              Silakan coba refresh halaman atau hubungi admin jika masalah berlanjut.
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state. error && (
              <div className="mb-6 text-left">
                <details className="bg-gray-100 rounded-lg p-4 cursor-pointer">
                  <summary className="font-semibold text-gray-700 hover:text-gray-900">
                    Detail Error (Development Only)
                  </summary>
                  <pre className="mt-3 text-xs text-gray-700 overflow-auto max-h-40 bg-white p-3 rounded border border-gray-300">
                    {this.state.error.toString()}
                    {'\n\n'}
                    {this. state.errorInfo?.componentStack}
                  </pre>
                </details>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                <RefreshCw className="w-5 h-5" />
                Coba Lagi
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-semibold"
              >
                Kembali ke Beranda
              </button>
            </div>

            {/* Contact Info */}
            <p className="mt-6 text-sm text-gray-600">
              Butuh bantuan? Hubungi kami di{' '}
              <a href="mailto:dev@hazmatlog.com" className="text-blue-600 hover:underline">
                dev@hazmatlog.com
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
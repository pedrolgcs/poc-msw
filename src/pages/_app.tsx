import type { AppProps } from 'next/app';
import '../styles/globals.css';

if (process.env.NODE_ENV === 'development') {
  import('../mocks');
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

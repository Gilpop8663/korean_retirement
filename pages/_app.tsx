import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto max-w-xl">
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;

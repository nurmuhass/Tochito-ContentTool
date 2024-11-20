import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { EditorProvider } from '../context/EditorContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <EditorProvider>
    <Component {...pageProps} />
  </EditorProvider>
);

export default MyApp;

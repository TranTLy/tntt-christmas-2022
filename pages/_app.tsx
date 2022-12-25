import type { AppProps } from 'next/app'
import 'antd/dist/reset.css';

import '@src/styles/global.scss';
import '@src/styles/animation.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

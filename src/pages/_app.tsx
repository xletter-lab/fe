import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Reading from './reading'
import Body from './layout/body'
import Header from './layout/header'
import Main  from './main/index'
export default function App({ Component, pageProps }: AppProps) {
  return<><Component {...pageProps} /></>
}

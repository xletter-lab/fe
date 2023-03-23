import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Reading from './reading'
import Body from './layout/body'
import Header from './layout/header'
export default function App({ Component, pageProps }: AppProps) {
  return<><Header title='로고' /><Body children={<Reading NovelId={1}/>}/></>
}

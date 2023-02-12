import Layout from '../components/Layout'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'
import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}

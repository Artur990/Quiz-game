import Layout from '../components/Layout'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'
import { Inter } from '@next/font/google'
import { Bebas_Neue, Ceviche_One } from '@next/font/google'
import { CounterProvider } from '../Context/counterContext'
// import { CounterProvider } from '../Context/counterContext'

const inter2 = Inter({
  subsets: ['latin'],
  variable: '--font-inter2',
})

const inter = Ceviche_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main
        className={`${inter.variable} font-sans ${inter2.variable} font-sans2 `}
      >
        <CounterProvider>
          <Component {...pageProps} />
        </CounterProvider>
      </main>
    </Layout>
  )
}

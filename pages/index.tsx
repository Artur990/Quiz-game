import Head from 'next/head'

import MainPage from '../components/MainPage'
import { useCounter } from '../Context/counterContext'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Quiz Game</title>
        <meta name="description" content="Game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainPage />
      </main>
    </>
  )
}

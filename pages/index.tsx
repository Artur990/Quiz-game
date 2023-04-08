import Head from 'next/head'

import MainPage from '../components/MainPage'
import { useCounter } from '../Context/counterContext'
import Link from 'next/link'

export default function Home() {
  const { count, incrementCount, resetCount, randomNumber } = useCounter()
  randomNumber()
  return (
    <>
      <Head>
        <title>Quiz Game</title>
        <meta name="description" content="Game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {count}
        <Link href={'/counter'}>Counter</Link>
        <MainPage />
      </main>
    </>
  )
}

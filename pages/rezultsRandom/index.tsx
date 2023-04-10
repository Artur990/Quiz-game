import Link from 'next/link'
import React from 'react'
import { obj } from '../../hook/useTotalResult'
import { useRouter } from 'next/router'

const PlayersResults = () => {
  const router = useRouter()
  let rezults = obj.filter((e) => e.results === true).length

  const goToHome = () => {
    // window.location.reload()
    // router.push('/')
    // router.back()
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="h-2/3 w-1/2 flex-col rounded-xl bg-textColor  p-2 ">
        <h1 className="bg-textColor p-4 text-2xl text-primaryColor">
          <span className="text-green-600">Gratulacje</span> uzyskałeś:{' '}
          {rezults}
          /7 poprawnych odpwiedzi
        </h1>
        <div className="m-2 rounded-lg bg-primaryColor p-2 py-1  px-10 text-3xl font-bold text-bgColor hover:bg-slate-500 hover:text-black">
          <Link href="/quizRandom">Rozwiąż test ponownie</Link>
        </div>
        <div className="m-2 rounded-lg bg-primaryColor p-2 py-1  px-10 text-3xl font-bold text-bgColor hover:bg-slate-500 hover:text-black">
          <Link href="/">Strona główna</Link>
        </div>
      </div>
    </div>
  )
}

export default PlayersResults

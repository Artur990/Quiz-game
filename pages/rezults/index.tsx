import Link from 'next/link'
import React from 'react'
import { obj } from '../../hook/useTotalResult'
const PlayersResults = () => {
  let rezults = obj.filter((e) => e.results === true).length
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-700 ">
      <div className="h-2/3 w-1/2 flex-col rounded-xl bg-slate-800  p-2 ">
        <h1 className="text-center">
          <span className="text-green-600">Gratulacje</span> uzyskałeś:{' '}
          {rezults}
          /7 poprawnych odpwiedzi
        </h1>
        <div className="  rounded-lg bg-slate-900 p-2 text-center hover:bg-slate-500 hover:text-black">
          <Link href="/">Strona główna</Link>
        </div>
      </div>
    </div>
  )
}

export default PlayersResults

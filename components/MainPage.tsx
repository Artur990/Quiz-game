import Link from 'next/link'
import React from 'react'

const MainPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-700  ">
      <div className="h-auto min-h-fit w-1/2 min-w-fit flex-col rounded-xl bg-slate-800 p-2 text-center ">
        <div className="rounded-lg bg-slate-900 px-2   py-1 hover:bg-slate-500 hover:text-black ">
          <Link href="/quizNewGame" className="">
            Zaczynamy quiz
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainPage

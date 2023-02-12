import Link from 'next/link'
import React from 'react'

const index = () => {
  console.log('render quiz newGAme')

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-700 ">
      <div className="sm-h-2/3 h-3/4 min-h-fit w-1/2  min-w-fit flex-col rounded-xl bg-slate-800 p-2 text-center ">
        <div className="text-5xl text-slate-500">Quiz Gra</div>
        <div className="my-4 text-2xl">Nowa Gra</div>
        <div className=" m-1">
          <div className="rounded-lg bg-slate-900 p-2 hover:bg-slate-500 hover:text-black">
            <Link href="/quiz/1">Rozpoczynam</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index

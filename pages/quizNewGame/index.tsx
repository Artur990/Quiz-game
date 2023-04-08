import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className=" min-h-[50%] w-3/4  flex-col  rounded-3xl bg-textColor p-2 text-center sm:h-2/3 lg:h-3/4">
        <div className="bg-textColor font-sans text-5xl text-primaryColor">
          Quiz Gra
        </div>
        <div className="my-4 font-sans text-2xl text-bgColor">Nowa Gra</div>
        <div className="m-1">
          <div className="rounded-lg bg-primaryColor p-2 py-1  px-10 text-3xl font-bold text-bgColor hover:bg-slate-500 hover:text-black">
            <Link href="/quiz" className="">
              Rozpoczynam
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index

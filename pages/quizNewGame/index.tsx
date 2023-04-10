import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-bgColor">
      <div className=" min-h-[50%] w-3/4  flex-col  rounded-3xl bg-textColor p-2 text-center sm:h-2/3 lg:h-3/4">
        <div className="bg-textColor font-sans text-5xl text-primaryColor">
          Quiz Gra
        </div>
        <div className="my-4 font-sans text-2xl text-bgColor">Nowa Gra</div>
        <div className="m-1">
          <div className="m-2 rounded-lg bg-primaryColor py-1 px-10 text-center   font-bold text-bgColor hover:bg-bgColor hover:text-textColor ">
            <Link href="/quiz" className="p-1  text-3xl">
              Rozpoczynam
            </Link>
          </div>
          <div className="m-2 rounded-lg bg-primaryColor py-1 px-10 text-center   font-bold text-bgColor hover:bg-bgColor hover:text-textColor ">
            <Link href="/quizRandom" className="p-1  text-3xl">
              Losowe pytania
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index

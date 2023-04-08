import Link from 'next/link'
import React from 'react'

const MainPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-bgColor ">
      <div className="h-auto min-h-[25%] w-1/2 min-w-fit flex-col rounded-xl bg-textColor p-2 text-center text-textColor ">
        <div className=" rounded-lg bg-primaryColor py-1 px-10 font-bold   text-bgColor hover:bg-bgColor hover:text-textColor ">
          <Link href="/quizNewGame" className="p-10 font-sans text-3xl">
            Zaczynamy quiz
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainPage

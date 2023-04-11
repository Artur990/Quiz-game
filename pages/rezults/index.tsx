import React from 'react'
import { useRouter } from 'next/router'
import { useCounter } from '../../Context/counterContext'

const PlayersResults = () => {
  const { resultss, resetResults, setTotal } = useCounter()
  const router = useRouter()

  const goToHome = () => {
    router.push('/')
    resetResults()
    setTotal([])
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="h-2/3 w-1/2 flex-col rounded-xl bg-textColor  p-2 ">
        <h1 className="bg-textColor p-4 text-center text-2xl text-primaryColor">
          <span className="text-green-600">Gratulacje</span> uzyskałeś:
          {resultss}
          /7 poprawnych odpwiedzi
        </h1>
        <div
          onClick={goToHome}
          className=" m-2 rounded-lg bg-primaryColor py-1 px-10 text-center   font-bold text-bgColor hover:bg-bgColor hover:text-textColor "
        >
          <h1 className="p-1  text-3xl">Strona główna</h1>
        </div>
      </div>
    </div>
  )
}

export default PlayersResults

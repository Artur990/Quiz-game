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
        <h1 className="bg-textColor p-4 text-center text-2xl text-primaryColor">
          <span className="text-green-600">Gratulacje</span> uzyskałeś:{' '}
          {rezults}
          /7 poprawnych odpwiedzi
        </h1>
        <div className=" m-2 rounded-lg bg-primaryColor py-1 px-10 text-center   font-bold text-bgColor hover:bg-bgColor hover:text-textColor ">
          <Link href="/" className="p-1  text-3xl">
            Strona główna
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PlayersResults

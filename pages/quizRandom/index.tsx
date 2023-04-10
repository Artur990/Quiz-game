import React from 'react'

import Answear from '../../components/Answear'
import { useGetQuetion2 } from '../../hook/useGetQuetion'
import useTimeOut from '../../hook/useTimeOut'
import { useCounter } from '../../Context/counterContext'
import { useRouter } from 'next/router'

const NewId = () => {
  const { count } = useCounter()
  const { newtab2 } = useGetQuetion2(count)
  const { time, setTime } = useTimeOut()

  const router = useRouter()
  React.useEffect(() => {
    window.history.pushState(null, 'null', window.location.pathname)
    window.addEventListener('popstate', onBackButtonEvent)
  }, [])

  function onBackButtonEvent(e: any) {
    e.preventDefault()
    window.history.forward()
  }

  // React.useEffect(() => {
  //   const handleBeforePopState = () => {
  //     // Zwróć wartość `false`, aby zablokować cofanie strony
  //     return false
  //   }
  //   router.beforePopState(handleBeforePopState)

  //   // Czyszczenie
  //   return () => {
  //     router.beforePopState(undefined)
  //   }
  // }, [router])

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-bgColor  ">
      {newtab2.map((e) => {
        return (
          <div
            key={e.id}
            className=" h-auto min-h-[70%] w-full flex-col rounded-xl bg-textColor p-1 text-center sm:h-2/3 sm:w-11/12  md:min-w-[70%] lg:w-8/12 lg:w-10/12 xl:w-7/12 xl:w-9/12 2xl:w-6/12 2xl:w-8/12"
          >
            <div className="sm:h h-auto min-h-[70%] rounded-lg bg-textColor px-2 py-1">
              <div className="flex justify-between">
                <div className="text-2xl text-bgColor">{e.questionNr}/7</div>
                <div className="text-2xl text-bgColor">{time}/30</div>
              </div>
              <div className="py-10 text-4xl text-bgColor">{e.question}</div>
            </div>
            <div className="border border-bgColor"></div>
            <div className="flex h-auto min-h-[30%] w-full rounded-lg sm:h-1/4">
              <div className="flex w-full flex-wrap items-center justify-center">
                {e.answer.map((e) => {
                  return <Answear key={e.qid} {...e} setTime={setTime} />
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default NewId

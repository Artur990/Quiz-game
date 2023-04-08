import React from 'react'

import Answear from '../../components/Answear'
import { useSetQuestion } from '../../hook/useSetQuestion'
import { useGetQuetion } from '../../hook/useGetQuetion'
import useTimeOut from '../../hook/useTimeOut'
import { useCounter } from '../../Context/counterContext'

const NewId = () => {
  const { count } = useCounter()
  const { newData } = useGetQuetion(count)
  const { time, setTime } = useTimeOut()

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-bgColor  ">
      {newData.map((e) => {
        return (
          <div
            key={e.id}
            className=" h-[70%] w-full flex-col rounded-xl bg-textColor p-1 text-center sm:h-2/3 sm:w-11/12  md:w-[70%] lg:w-8/12 lg:w-10/12 xl:w-7/12 xl:w-9/12 2xl:w-6/12 2xl:w-8/12"
          >
            <div className="sm:h min-h-auto h-[70%] rounded-lg bg-textColor px-2 py-1">
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

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Answear from '../../components/Answear'
import { useSetQuestion } from '../../hook/useGetQuestion'
import { getQuetion } from '../../action/action'
import useTimeOut from '../../hook/useTimeOut'

const Id = () => {
  const router = useRouter()
  const id = router.query.id
  const data = getQuetion(id)
  const MemoAnswear = React.memo(Answear)
  const { time, setTime } = useTimeOut(id)
  console.log(data + 'data')
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-700  ">
      {data.map((e) => {
        return (
          <div
            key={e.id}
            className="h-min-2/3 w-1/2 flex-col rounded-xl bg-slate-800 p-1 text-center sm:h-2/3 "
          >
            <div className="sm:h h-2/3 rounded-lg bg-slate-900 px-2   py-1">
              <div className="flex justify-between">
                <div>{e.questionNr}/7</div>
                <div>{time}/30</div>
              </div>
              <div className="py-10">{e.question}</div>
            </div>
            <div className=" flex  h-1/3   w-full rounded-lg  p-1  sm:h-1/4  ">
              <div className="flex h-auto w-full flex-wrap">
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

export default Id

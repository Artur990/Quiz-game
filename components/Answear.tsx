import React from 'react'
import { useSetQuestion } from '../hook/useGetQuestion'
import { useTotalResult } from '../hook/useTotalResult'
const Answear = (props: any) => {
  const { getID, answear } = useSetQuestion()
  const { setTotal, totalFun } = useTotalResult()

  // console.log(props.qid);
  setTimeout(() => {
    if (answear === 'true') {
      props.setTime(30)
    }
  }, 1000)

  const fun = async () => {
    await getID(props)
    console.log(props)
    totalFun(props.id, props.rightAnswer)
  }
  return (
    <button
      onClick={fun}
      className={`h-15 max-h-15 my-1 w-full rounded-lg border bg-slate-900 text-left   hover:bg-slate-500 hover:text-black sm:h-16  sm:w-1/2 sm:text-center 
    ${answear === 'true' ? 'border-green-500' : ''}
    ${answear === 'false' ? 'border-red-500' : ''}
    ${
      props.select
        ? props.rightAnswer === 'true'
          ? 'border-green-500'
          : 'border-red-500'
        : ''
    }`}
    >
      {props.question}
    </button>
  )
}

export default Answear

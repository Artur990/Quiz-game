import React from 'react'
import { useSetQuestion } from '../hook/useSetQuestion'
import { useTotalResult } from '../hook/useTotalResult'
const Answear = (props: any) => {
  const { getID, answear } = useSetQuestion()
  const { totalFun } = useTotalResult()

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
      className={`m-1 h-[20%] w-full rounded-lg border-[4px] border-primaryColor bg-primaryColor text-left text-xs text-bgColor hover:border-slate-500 hover:bg-slate-500 hover:text-black sm:h-[20%] sm:w-2/3  sm:text-center sm:text-base md:h-[40%] md:w-2/5 ${
        answear === 'true' ? 'border-green-500 hover:border-green-500 ' : ''
      } ${answear === 'false' ? 'border-red-500 hover:border-red-500' : ''} ${
        props.select
          ? props.rightAnswer === 'true'
            ? 'border-green-500 '
            : 'border-red-500'
          : ''
      }`}
    >
      {props.question}
    </button>
  )
}

export default Answear

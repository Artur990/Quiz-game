import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { quiz } from '../data/quizData'
import { useGetQuetion } from './useGetQuetion'
import { useCounter } from '../Context/counterContext'

type TypeQuid = {
  id: number
  qid: number
  question: string
  rightAnswer: boolean
}

export const useSetQuestion = () => {
  const { count, incrementCount, resetCount } = useCounter()
  const router = useRouter()
  const [answear, setAnswear] = useState<any>(null)

  const getID = useCallback((id: TypeQuid) => {
    const { newData } = useGetQuetion(id.id)
    if (id.rightAnswer === true) {
      setAnswear('true')
      setTimeout(() => {
        if (count === 7) {
          resetCount()
          router.push('/rezults')
        } else {
          incrementCount()
        }
      }, 1000)
    } else {
      return setAnswear('false')
    }
    return { newData }
  }, [])

  return { getID, answear }
}

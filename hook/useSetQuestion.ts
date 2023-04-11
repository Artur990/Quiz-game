import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { useCounter } from '../Context/counterContext'
import { Tid } from '../types/Tcontext'

export const useSetQuestion = () => {
  const { count, incrementCount, resetCount } = useCounter()
  const router = useRouter()
  const [answear, setAnswear] = useState<any>(null)

  const getID = useCallback((id: Tid) => {
    if (id.rightAnswer === true) {
      setAnswear('true')
      setTimeout(() => {
        if (count === 7) {
          router.push('/rezults')
          resetCount()
        } else {
          incrementCount()
        }
      }, 1000)
    } else {
      return setAnswear('false')
    }
  }, [])

  return { getID, answear }
}

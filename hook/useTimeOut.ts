import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useCounter } from '../Context/counterContext'

const useTimeOut = () => {
  const router = useRouter()
  const [time, setTime] = useState(30)
  const { count, incrementCount, resetCount } = useCounter()
  const [running, setRunning] = useState(true)

  if (time === 0) {
    if (count === 7) {
      resetCount()
      router.push('/rezults')
    } else {
      setTime(30)
      incrementCount()
    }
  }
  useEffect(() => {
    let interval: any
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
    } else if (!running) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [])
  return { time, setTime }
}

export default useTimeOut

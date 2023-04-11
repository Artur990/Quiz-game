import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useCounter } from '../Context/counterContext'

const useTimeOut = () => {
  const router = useRouter()
  const [time, setTime] = useState(30)
  const { count, incrementCount, resetCount } = useCounter()
  const [running, setRunning] = useState(true)
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    const tick = () => setTime((prevTime) => prevTime - 1)

    if (running && time > 0) {
      interval = setInterval(tick, 1000)
    }

    if (time === 0) {
      if (count === 7) {
        router.push('/rezults')
        resetCount()
      } else {
        setTime(30)
        incrementCount()
      }
    }

    return () => {
      if (interval !== null) clearInterval(interval)
    }
  }, [running, time])

  return { time, setTime, setRunning }
}

export default useTimeOut

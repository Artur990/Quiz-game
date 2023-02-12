import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import React from 'react'

const useTimeOut = (id: string | string[] | undefined) => {
  console.log('render time hook')
  const router = useRouter()
  const [time, setTime] = useState(30)
  const [running, setRunning] = useState(true)
  const ids = Number(id) + 1
  if (time === 0) {
    if (Number(id) === 7) {
      router.push('/rezults')
    } else {
      setTime(30)
      router.push(`/quiz/${ids}`)
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

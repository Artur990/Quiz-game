import { createContext, useContext, useState } from 'react'

type CounterContextType = {
  count: number
  incrementCount: () => void
  resetCount: () => void
  randomNumber: () => void
  random: number
}

const CounterContext = createContext<CounterContextType>({
  count: 1,
  incrementCount: () => {},
  resetCount: () => {},
  randomNumber: () => {},
  random: 0,
})

export const useCounter = () => useContext(CounterContext)

export const CounterProvider = ({ children }: any) => {
  const [count, setCount] = useState(1)
  const [random, setRandom] = useState<number>(0)
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const resetCount = () => {
    setCount(1)
  }
  function randomNumber() {
    let Newranodm = Math.floor(Math.random() * 4) + 1
    setRandom(Newranodm)
  }
  return (
    <CounterContext.Provider
      value={{ count, incrementCount, resetCount, randomNumber, random }}
    >
      {children}
    </CounterContext.Provider>
  )
}

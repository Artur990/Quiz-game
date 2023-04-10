import { createContext, useContext, useState } from 'react'

type CounterContextType = {
  count: number
  incrementCount: () => void
  resetCount: () => void
}

const CounterContext = createContext<CounterContextType>({
  count: 1,
  incrementCount: () => {},
  resetCount: () => {},
})

export const useCounter = () => useContext(CounterContext)

export const CounterProvider = ({ children }: any) => {
  const [count, setCount] = useState(1)
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const resetCount = () => {
    setCount(1)
  }

  return (
    <CounterContext.Provider value={{ count, incrementCount, resetCount }}>
      {children}
    </CounterContext.Provider>
  )
}

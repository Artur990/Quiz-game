import { createContext, useContext, useState } from 'react'
import { TChildren, TCounterContext, TypeTotal } from '../types/Tcontext'

const CounterContext = createContext<TCounterContext>({
  count: 1,
  resultss: 0,
  total: [],
  setTotal: () => {},
  incrementCount: () => {},
  resetCount: () => {},
  incrementResults: () => {},
  resetResults: () => {},
})

export const useCounter = () => useContext(CounterContext)

export const CounterProvider = ({ children }: TChildren) => {
  const [count, setCount] = useState(1)
  const [resultss, setResults] = useState(0)

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const resetCount = () => {
    setCount(1)
  }
  const incrementResults = () => {
    setResults((prevCount) => prevCount + 1)
  }

  const resetResults = () => {
    setResults(0)
  }
  const [total, setTotal] = useState<TypeTotal>([])
  return (
    <CounterContext.Provider
      value={{
        count,
        incrementCount,
        resetCount,
        resultss,
        resetResults,
        incrementResults,
        total,
        setTotal,
      }}
    >
      {children}
    </CounterContext.Provider>
  )
}

import { useCallback, useState, useRef } from 'react'
import { useCounter } from '../Context/counterContext'

export const useTotalResult = () => {
  const { incrementResults, total, setTotal } = useCounter()
  const totalFun = useCallback(
    (id: number, results: boolean) => {
      const ar = total.find((e) => e.id === id)
      if (ar === undefined) {
        setTotal((prev) => [...prev, { id, results }])
        if (results === true) {
          incrementResults()
        }
      }
    },
    [incrementResults]
  )

  return { totalFun }
}

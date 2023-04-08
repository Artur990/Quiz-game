import React, { useState } from 'react'
let licznikK = 0
export const useCounter = () => {
  const [counter, setCounter] = useState<number>(1)

  return { counter, setCounter, licznikK }
}

import { useCallback, useState } from 'react'
type TypeTotal = {
  id: number
  results: boolean
}[]
export let obj: TypeTotal = []
export const useTotalResult = () => {
  const [total, setTotal] = useState<TypeTotal>([])
  const totalFun = useCallback((id: number, results: any) => {
    let arr = obj
    let ar = arr.find((e) => e.id === +id)
    if (ar === undefined) {
      obj.push({ id, results })
    }
  }, [])
  return { setTotal, total, totalFun }
}

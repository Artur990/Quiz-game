import { useCounter } from '../Context/counterContext'
import { quiz } from '../data/quizData'

const random = Math.floor(Math.random() * 4) + 1

export const useGetQuetion = (id: string | string[] | undefined | number) => {
  // const { random } = useCounter()
  let data = quiz[random]
  // data = data[random];
  let newData = data.filter((e) => e.id === Number(id))
  return { newData }
}

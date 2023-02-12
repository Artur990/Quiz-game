import { quiz } from '../data/quizData'
console.log('render pozafunkcią')
const random = Math.floor(Math.random() * 5) + 1
export const getQuetion = (id: string | string[] | undefined | number) => {
  let data = quiz
  console.log('render')
  console.log(random)
  // data = data[random];
  return data.filter((e) => e.id === Number(id))
}

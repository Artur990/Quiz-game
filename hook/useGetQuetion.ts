import { useEffect, useState } from 'react'
import { useCounter } from '../Context/counterContext'
import { quiz, quiz2 } from '../data/quizData'

const random = Math.floor(Math.random() * quiz.length)

const getRandomNumbers = () => {
  let numbers: number[] = []
  while (numbers.length < 7) {
    let random = Math.floor(Math.random() * quiz2.length)
    if (!numbers.includes(random)) {
      numbers.push(random)
    }
  }
  return numbers
}

let randomsy = getRandomNumbers()

export const useGetQuetion = (id: string | string[] | undefined | number) => {
  // console.log(random)
  let data = quiz[random]

  let newData = data.filter((e) => e.id === Number(id))
  return { newData }
}

type TNewTab = typeof quiz2
export const useGetQuetion2 = (id: number) => {
  let newtab: TNewTab = []

  const [randomNumbers, setRandomNumbers] = useState<number[]>([])
  useEffect(() => {
    const getRandomNumbers = () => {
      let numbers: number[] = []
      while (numbers.length < 7) {
        let random = Math.floor(Math.random() * 8)
        if (!numbers.includes(random)) {
          numbers.push(random)
        }
      }
      setRandomNumbers(numbers)
    }
    getRandomNumbers()
  }, [])

  let answer1 = quiz2[randomsy[0]].answer.filter((e) => (e.id = 1))
  let p1 = quiz2[randomsy[0]]
  p1.id = 1
  p1.answer = answer1
  p1.questionNr = 1
  //2
  let answer2 = quiz2[randomsy[1]].answer.filter((e) => (e.id = 2))
  let p2 = quiz2[randomsy[1]]
  p2.id = 2
  p2.answer = answer2
  p2.questionNr = 2
  //3
  let answer3 = quiz2[randomsy[2]].answer.filter((e) => (e.id = 3))
  let p3 = quiz2[randomsy[2]]
  p3.id = 3
  p3.answer = answer3
  p3.questionNr = 3
  //4
  let answer4 = quiz2[randomsy[3]].answer.filter((e) => (e.id = 4))
  let p4 = quiz2[randomsy[3]]
  p4.id = 4
  p4.answer = answer4
  p4.questionNr = 4
  //5
  let answer5 = quiz2[randomsy[4]].answer.filter((e) => (e.id = 5))
  let p5 = quiz2[randomsy[4]]
  p5.id = 5
  p5.answer = answer5
  p5.questionNr = 5
  //6
  let answer6 = quiz2[randomsy[5]].answer.filter((e) => (e.id = 6))
  let p6 = quiz2[randomsy[5]]
  p6.id = 6
  p6.answer = answer6
  p6.questionNr = 6
  //7
  let answer7 = quiz2[randomsy[6]].answer.filter((e) => (e.id = 7))
  let p7 = quiz2[randomsy[6]]
  p7.id = 7
  p7.answer = answer7
  p7.questionNr = 7

  newtab.push(p1, p2, p3, p4, p5, p6, p7)

  let newtab2 = newtab.filter((e) => e.id === Number(id))

  return { newtab2 }
}

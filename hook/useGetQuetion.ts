import { useEffect, useState } from 'react'
import { useCounter } from '../Context/counterContext'
import { quiz, quiz2 } from '../data/quizData'

const random = Math.floor(Math.random() * quiz.length)
const getRandomNumbers = (): number[] => {
  const numbers: number[] = []
  while (numbers.length < 7) {
    const random = Math.floor(Math.random() * quiz2.length)
    if (!numbers.includes(random)) {
      numbers.push(random)
    }
  }
  return numbers
}

export const useGetQuetion = (id: string | string[] | undefined | number) => {
  const data = quiz[random]
  const newData = data.filter((e) => e.id === Number(id))
  return { newData }
}

const randomNumbers = getRandomNumbers()
export const useGetQuetion2 = (id: number) => {
  const newtab = randomNumbers.map((index, questionNr) => {
    const question = quiz2[index]
    const answer = question.answer.map((a, i) => ({ ...a, qid: i + 1 }))
    return {
      id: questionNr + 1,
      questionNr: questionNr + 1,
      question: question.question,
      answer,
    }
  })
  const newtab2 = newtab.filter((e) => e.id === Number(id))
  return { newtab2 }
}

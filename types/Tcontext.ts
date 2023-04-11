import { Dispatch, SetStateAction } from 'react'

export type TypeTotal = {
  id: number
  results: boolean
}[]
export type TChildren = {
  children: React.ReactNode
}
export type TCounterContext = {
  count: number
  resultss: number
  incrementCount: () => void
  resetCount: () => void
  incrementResults: () => void
  resetResults: () => void
  total: TypeTotal
  setTotal: Dispatch<SetStateAction<TypeTotal>>
}

export type Tid = {
  id: number
  qid: number
  question: string
  rightAnswer: boolean
}
export type TQuizQuestionProps = {
  setTime: Dispatch<SetStateAction<number>>
  id: number
  qid: number
  question: string
  rightAnswer: boolean
  select?: boolean | null
  key: number
}

import { quiz } from "../data/quizData";

export const getQuetion = (id: string | string[] | undefined) => {
  let quizz = quiz;
  return quizz.filter((e) => e.id === Number(id));
};

import { useState } from "react";
import { useRouter } from "next/router";
import { quiz } from "../data/quizData";

type TypeQuid = {
  id: number;
  qid: number;
  question: string;
  rightAnswer: boolean;
};

export const useSetQuestion = () => {
  const router = useRouter();
  const [answear, setAnswear] = useState<any>(null);

  const getID = async (id: TypeQuid) => {
    let data = quiz;
    if (id.rightAnswer === true) {
      setAnswear("true");
      setTimeout(() => {
        if (id.id === 7) {
          router.push("/rezults");
        } else {
          router.push(`/quiz/${id.id + 1}`);
        }
      }, 1000);
    } else {
      return setAnswear("false");
    }
    return { data };
  };

  return { quiz, getID, answear };
};

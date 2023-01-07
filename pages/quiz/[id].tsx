import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Answear from "../../components/Answear";
import { useSetQuestion } from "../../hook/useGetQuestion";
import { getQuetion } from "../../action/action";
import useTimeOut from "../../hook/useTimeOut";
const Id = () => {
  const { quiz, getID } = useSetQuestion();
  const router = useRouter();
  const id = router.query.id;
  const data = getQuetion(id);
  const { time, setTime } = useTimeOut(id);
  return (
    <div className="w-screen h-screen bg-slate-700 flex justify-center items-center  ">
      {data.map((e) => {
        return (
          <div
            key={e.id}
            className="w-1/2 h-2/3 p-1 bg-slate-800 flex-col text-center rounded-xl "
          >
            <div className="px-2 py-1 h-2/3 rounded-lg   bg-slate-900">
              <div className="flex justify-between">
                <div>{e.questionNr}/7</div>
                <div>{time}/30</div>
              </div>
              <div className="py-10">{e.question}</div>
            </div>
            <div className=" h-1/3 w-full p-1  rounded-lg  flex  ">
              <div className="w-full  flex flex-wrap">
                {e.answer.map((e) => {
                  return <Answear key={e.qid} {...e} setTime={setTime} />;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Id;

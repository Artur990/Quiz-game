import React from "react";
import { useSetQuestion } from "../hook/useGetQuestion";

const Answear = (props: any) => {
  const { getID, answear } = useSetQuestion();
  setTimeout(() => {
    console.log(answear === "true");
    if (answear === "true") {
      props.setTime(30);
    }
  }, 1000);
  console.log(answear);
  const fun = async () => {
    await getID(props);
  };
  return (
    <button
      onClick={fun}
      className={`w-1/2 h-fit  my-1  hover:bg-slate-500 hover:text-black bg-slate-900  rounded-lg border 
    ${answear === "true" ? "border-green-500" : ""}
    ${answear === "false" ? "border-red-500" : ""}
    ${
      props.select
        ? props.rightAnswer === "true"
          ? "border-green-500"
          : "border-red-500"
        : ""
    }`}
    >
      {props.question}
    </button>
  );
};

export default Answear;

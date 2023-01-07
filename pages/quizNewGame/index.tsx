import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="w-screen h-screen bg-slate-700 flex justify-center items-center ">
      <div className="w-1/2 min-w-fit h-2/3  min-h-fit p-2 bg-slate-800 flex-col text-center rounded-xl ">
        <div className="text-5xl text-slate-500">Quiz Gra</div>
        <div className="my-4 text-2xl">Nowa Gra</div>
        <div>Nazwa użytkownika</div>
        <input className="my-1 bg-slate-700 rounded-md" />
        <div className=" m-1">
          <div className="p-2 rounded-lg hover:bg-slate-500 hover:text-black bg-slate-900">
            <Link href="/quiz/1">Rozpoczynam</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

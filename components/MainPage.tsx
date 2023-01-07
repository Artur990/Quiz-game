import Link from "next/link";
import React from "react";

const MainPage = () => {
  return (
    <div className="w-screen h-screen bg-slate-700 flex justify-center items-center  ">
      <div className="w-1/2 min-w-fit h-1/2 min-h-fit p-2 bg-slate-800 flex-col text-center rounded-xl ">
        <div className="px-2 py-1 rounded-lg   hover:bg-slate-500 hover:text-black bg-slate-900 ">
          <Link href="/quizNewGame" className="">
            Zaczynamy quiz
          </Link>
        </div>

        <br />
        <div className=" px-2 py-1   rounded-lg hover:bg-slate-500 hover:text-black bg-slate-900">
          <Link href="/">Sprawdź wyniki </Link>
        </div>

        <br />
        <div className=" px-2 py-1   rounded-lg hover:bg-slate-500 hover:text-black bg-slate-900">
          <Link href="/">Informacie</Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

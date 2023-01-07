import Link from "next/link";
import React from "react";

const PlayersResults = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-700 ">
      <div className="absolute top-4 left-5 p-1 rounded-lg hover:bg-slate-500 hover:text-black bg-slate-900">
        <Link href="/">Home</Link>
      </div>
      <div className="w-1/2 h-2/3 p-1 bg-slate-800 flex-col  rounded-xl ">
        <h1 className="ml-1 text-gray-500">Players results: </h1>
        <ul className="ml-3">
          <li>1. Mierek</li>
          <li>2. Adam</li>
          <li>3. Czesio</li>
          <li>4. Ela</li>
          <li>6. Zofia</li>
          <li>7. Kajetan</li>
        </ul>
      </div>
    </div>
  );
};

export default PlayersResults;

// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// const Stopwatch = () => {
//   const router = useRouter();
//   const [time, setTime] = useState(3);
//   const [running, setRunning] = useState(true);

//   if (time === 0) {
//     router.push("/quiz/1");
//     // setRunning(false);
//   }
//   useEffect(() => {
//     console.log(time);

//     let interval: any;
//     if (running) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime - 1);
//       }, 1000);
//     } else if (!running) {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [running]);
//   return (
//     <div className="stopwatch">
//       <div className="numbers">
//         <span>{time}</span>
//       </div>
//       <div className="buttons">
//         <button onClick={() => setRunning(true)}>Start</button>
//         <button onClick={() => setRunning(false)}>Stop</button>
//         <button onClick={() => setTime(20)}>Reset</button>
//       </div>
//     </div>
//   );
// };
// export default Stopwatch;
// import React from "react";

// const PlayersResults = () => {
//   return (
//     <div className="w-screen h-screen flex items-center justify-center bg-slate-600  rounded-lg">
//       <div className="w-1/2 h-2/3 p-1 bg-slate-800 flex-col  rounded-xl ">
//         <h1 className="ml-1 text-gray-500">Players results: </h1>
//         <ul className="ml-3">
//           <li>1. Mierek</li>
//           <li>2. Adam</li>
//           <li>3. Czesio</li>
//           <li>4. Ela</li>
//           <li>6. Zofia</li>
//           <li>7. Kajetan</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default PlayersResults;
import React from "react";

const PlayersResults = () => {
  return <div>PlayersResults</div>;
};

export default PlayersResults;

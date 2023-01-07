import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";

const useTimeOut = (id: string | string[] | undefined) => {
  const router = useRouter();
  const [time, setTime] = useState(30);
  const [running, setRunning] = useState(true);
  const ids = Number(id) + 1;
  console.log(ids);
  if (time === 0) {
    if (Number(id) === 7) {
      router.push("/rezults");
    } else {
      console.log(`/quiz/${ids}`);
      setTime(30);
      //   setRunning(false);
      router.push(`/quiz/${ids}`);
    }
  }
  useEffect(() => {
    console.log(time);

    let interval: any;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return { time, setTime };
};

export default useTimeOut;

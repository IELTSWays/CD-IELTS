
import { useState, useEffect } from "react";

const useTimer = (time: any) => {
  const [counter, setCounter] = useState<any>(time);
  const [timer, setTimer] = useState<any>('');

  // const formatFull = (s: number) =>
  //   (new Date(s * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];

  const formatHours = (s: number) =>
    ((new Date(s * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]).slice(0, -6) + ' Hours remaining';
  const formatMinutes = (s: number) =>
    ((new Date(s * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]).slice(3, -3) + ' Minutes remaining ';
  const formatSeconds = (s: number) =>
    ((new Date(s * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]).slice(6) + ' Seconds remaining';

  useEffect(() => {
    JSON.parse(localStorage.getItem('confirm')) && counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    localStorage.setItem("counter", counter);
    { counter > 3600 && setTimer(formatHours(counter)) }
    { counter < 3600 && counter > 60 && setTimer(formatMinutes(counter)) }
    { counter < 60 && setTimer(formatSeconds(counter)) }
    { counter == 0 && setTimer("FINISH !") }
  }, [counter]);

  useEffect(() => {
    setCounter(localStorage.getItem("counter"));
    JSON.parse(localStorage.getItem('confirm')) && counter
  }, []);

  return { timer };
}

export default useTimer;
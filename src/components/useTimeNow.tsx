import { useState, useEffect } from "react";

const useTimeNow = () => {
  const [timeNow, setTimeNow] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeNow(new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      }));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return {timeNow};
}

export default useTimeNow;
import { use, useEffect } from "react";

export default function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  const formatedSecs = secs < 10 ? "0" + secs : secs;

  useEffect(
    function () {
      const interval = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return function () {
        clearInterval(interval);
      };
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins}:{formatedSecs}
    </div>
  );
}

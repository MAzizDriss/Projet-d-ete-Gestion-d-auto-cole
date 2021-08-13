import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Timer.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

function Timer() {
  const [key, setKey] = useState(0);
  const [duration, setDuration] = useState(25);

  return (
    <div className="App">
      <h1>
        Attention
        <br />
        Il vous reste
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={key}
          isPlaying
          duration={duration}
          colors={[["#5bc0be"]]}
          onComplete={() => {
            setDuration(Math.random() * (30 - 10) + 10);
            setKey((prevKey) => prevKey + 1);
          }}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}
export default Timer
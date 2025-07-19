import React, { useRef, useState } from "react";

const App = () => {
  const [startVal, setStartVal] = useState(0);
  const [count, setCount] = useState(0);
  const timerRef = useRef();

  const clearTimerRef = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const start = () => {
    function incCount() {
      timerRef.current = setTimeout(() => {
        setCount((prev) => prev + 1);
        incCount();
      }, 1000);
    }
    clearTimerRef();
    setCount(startVal);
    incCount();
  };

  const stop = () => {
    clearTimerRef();
  };

  const startValChanged = (e) => {
    setStartVal(parseInt(e.target.value, 10));
  };

  return (
    <div className="App">
      <div className="Bar">
        <input type="number" value={startVal} onChange={startValChanged} />
        <button id="start" data-testid="start" onClick={start}>
          start
        </button>
        <button id="stop" onClick={stop}>
          stop
        </button>
      </div>
      <span
        style={{
          color: count % 2 === 0 ? "green" : "red",
          transition: "font-size ease 0.2s",
          fontSize: count % 2 === 0 ? "16px" : "24px",
        }}
      >
        Count: {count}
      </span>
    </div>
  );
};

export default App;

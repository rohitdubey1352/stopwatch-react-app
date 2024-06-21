import { useState, useEffect } from "react";

const App = () => {
  const [incr, setIncr] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [resetValues, setResetValues] = useState([]);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const startHandler = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setIncr((prev) => prev + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopHandler = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const resetHandler = () => {
    setIncr(0);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const getTimeHandler = () => {
    setResetValues((prev) => [...prev, `The current value is ${incr}`]);
  };

  const clearHandler = () => {
    setResetValues([]);
  };

  return (
    <main>
      <div className="box">
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Time lap</h2>

        <h4
          style={{
            textAlign: "center",
            fontSize: "2.6rem",
            marginBottom: "2rem",
          }}
          id="value"
        >
          {incr}
        </h4>

        <div className="btns">
          <button id="start" onClick={startHandler}>
            START
          </button>
          <button id="stop" onClick={stopHandler}>
            STOP
          </button>
        </div>
        <div className="btns">
          <button id="reset" onClick={resetHandler}>
            RESET
          </button>
          <button id="getTime" onClick={getTimeHandler}>
            GET TIME
          </button>
        </div>
        <div className="btn">
          <button id="clear" onClick={clearHandler}>
            CLEAR
          </button>
        </div>
        <div className="resetValue">
          {resetValues.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;

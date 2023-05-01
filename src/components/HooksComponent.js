import { useStatus, useLogger, useToggle } from "./Hook.js";
import React, { useState, useEffect } from "react";

function MyComponent() {
  const [status, setStatus] = useStatus("ready");
  const [isOn, toggleIsOn] = useToggle(false);
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  useLogger(status);
  const fetchData = () => {
  }
  useEffect(() => {
    setMessage(`Count is ${count}`);
  }, [count]);

  const handleClicks = () => {
    setCount(count + 1);
  };

  const handleClick = () => {
    setStatus("loading");
    fetchData()
      .then(() => {
        setStatus("success");
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div>
      <button onClick={handleClick}>Load Data</button>
      <p>Status: {status}</p>
      <p>Toggle is {isOn ? "on" : "off"}</p>
      <button onClick={toggleIsOn}>Toggle</button>
      <p>{message}</p>
      <button onClick={handleClicks}>Count </button>
    </div>
  );
}
export default MyComponent;
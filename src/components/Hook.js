import { useState, useEffect } from "react";


function useStatus(initialStatus) {
  const [status, setStatus] = useState(initialStatus);

  const updateStatus = (newStatus) => {
    setStatus(newStatus);
  };

  return [status, updateStatus];
}
function useLogger(data) {
  useEffect(() => {
    console.log(data);
  }, [data]);
}
function useToggle(initialState) {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
}
export {useToggle, useLogger, useStatus};

import React, { useState } from "react";
import "../css/Dialog.css";
import { CSSTransition } from "react-transition-group";

const Dialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDialog}>Open Dialog</button>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="dialog"
        unmountOnExit
      >
        <div className="dialog">
          <h2>Dialog Title</h2>
          <p>Dialog Content</p>
          <button onClick={toggleDialog}>Close Dialog</button>
        </div>
      </CSSTransition>
    </div>
  );
};
export default Dialog;
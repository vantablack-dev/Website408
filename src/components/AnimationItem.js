import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../css/Dialog.css";
function Animation() {
  const [items, setItems] = useState(["item 1", "item 2"]);

  const addItem = () => {
    setItems([...items, `item ${items.length + 1}`]);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <button onClick={addItem}>Add item</button>
      <TransitionGroup>
        {items.map((item, index) => (
          <CSSTransition key={item} timeout={500} classNames="item">
            <div>
              {item}{" "}
              <button onClick={() => removeItem(index)}>Remove</button>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default Animation;

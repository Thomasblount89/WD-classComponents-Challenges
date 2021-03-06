import React from "react";

const ToDoList = (props) => {
  // addItem = (event) => {
  //     console.log(event.target.value)

  // }

  return (
    <div>
      {props.theToDoList.map((todos) => {
        return (
          <li key={todos}>
            <button onClick={() => props.addItem(todos)} value={todos}>
              {todos}
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default ToDoList;

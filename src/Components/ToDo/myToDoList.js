import React from "react";

const myToDoList = (props) => {
  // addItem = (event) => {
  //     console.log(event.target.value)

  // }

  return (
    <div>
      {props.myToDoList.map((todos) => {
        return (
          <li key={todos}>
            <button onClick={() => props.addCompleteItem(todos)} value={todos}>
              {todos}
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default myToDoList;
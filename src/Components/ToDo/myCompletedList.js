import React from "react";

const myCompletedList = (props) => {
  // addItem = (event) => {
  //     console.log(event.target.value)

  // }

  return (
    <div>
      {props.myCompletedList.map((todos) => {
        return <li key={todos}>{todos}</li>;
      })}
    </div>
  );
};

export default myCompletedList;

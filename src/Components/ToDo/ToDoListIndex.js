import React, { Component } from "react";
import ToDoList from "./ToDoList";
import MyToDoList from './myToDoList';
import MyCompletedList from './myCompletedList';

class ToDoListIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [
        "do the dishes",
        "do the laundry",
        "wash the car",
        "make dinner",
      ],
      myToDoList: [],
      myCompletedList: [],
    };
  }

  addItem = (something) => {
    this.setState((state) => {
      const list = state.myToDoList.concat(something);
      this.setState({
        myToDoList: list,
      });
    });
    console.log(this.state.myToDoList);
    this.removeItem(something)
  };

  removeItem = (something) => {
    this.setState((state) => {
      const list = state.toDoList.filter(somethingElse => 
      somethingElse !== something);
      this.setState({
        toDoList: list,
      });
    });
    console.log(this.state.toDoList);
  };

  addCompleteItem = (something) => {
    this.setState((state) => {
        const list = state.myCompletedList.concat(something);
        this.setState({
          myCompletedList: list,
        });
      });
      this.removeCompleteItem(something)
    };
  
  
  removeCompleteItem = (something) => {
    this.setState((state) => {
      const list = state.myToDoList.filter(somethingElse => 
      somethingElse !== something);
      this.setState({
        myToDoList: list,
      });
    });
  };



  render() {
    return (
      <div>
          <h1>todo list</h1>
        <ToDoList theToDoList={this.state.toDoList} addItem={this.addItem} />
        <hr/>
        <h1>my to do list list</h1>

         <MyToDoList myToDoList={this.state.myToDoList} addCompleteItem={this.addCompleteItem} />
         <hr/>
         <h1>my completed list</h1>
         <MyCompletedList myCompletedList={this.state.myCompletedList} />
        <hr/>

      </div>
    );
  }
}

export default ToDoListIndex;

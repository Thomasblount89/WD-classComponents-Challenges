import React, {Component} from 'react';

import AddToDoList from './AddToDoList';
import SingleToDo from './SingleToDo';

class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addToDoValue:"", 
            toDoList: [
                {
                    id:1,
                    value: "todo 1",
                    isDone:false
                },
                {
                    id:2,
                    value: "todo 2",
                    isDone:true
                },
                {
                    id:3,
                    value: "todo 3",
                    isDone:false
                }
            ]
        }
    }
        

        getTime() {
            let d = new Date();
            var n = d.getTime();
             return n;
        }
    

        handleDelete = todo => {
            toDoList = this.state.ToDoList.filter((deleteItem) => {
                return deleteItem.id !== todo
            });
            this.setState({toDoList});
        }

        handleDone = todo => {
            toDoList = [...this.state.toDoList];
            toDoList.map((toDoDone) =>
             {
                if (toDoDone.id === todo.id) {
                toDoDone.isDone = !toDoDone.isDone;
                }
                return toDoDone;
            }
            );
            this.setState({toDoList})
        }

        addNewTodo = value => {
            if (value) {
                 toDoList = [...this.state.ToDoList];
            }toDoList.push(
                {
                    id: this.getTime(),
                    value: value,
                    isDone:false 
                }
            );
            this.setState({addToDoValue:"", toDoList});
             } else { 
            console.log('Please Add Todo TEXT');
        }
    }

    
    

    render() {
        return (
            <table className='table'>
                <tbody>
                    {this.state.toDoList.map((todo, index) => (
                        <tr key={todo.id}>
                            <Todo index={index+1} todo={todo} fooDelete={this.handleDelete} fooDoneDone={this.handleDone} />
                        </tr>
                    ))}
                        <tr>
                            <td
                                td colSpan="4" className="text-center">
                                    <AddToDo fooAddTodo={this.addNewToDo} addToDoValue={this.state.addToDoValue} />
                            </td>
                        </tr>
                </tbody>
            </table>
        )
    }
}

export default toDoList;
import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function App() {
  
  //Remove newTodo state variable
  //const [newTodo, setNewTodo] = useState("");
  
  //create new state variable todoList with an empty array
  const [todoList, setTodoList] = useState([]);

  //declare a new function addtodo that takes newTodo as a parameter
  const addTodo = ({newTodo}) => {
    //set todoList with spread operator newTodo
    setTodoList(...newTodo);
  }

  return (
    <div>
      <h1>Todo List</h1>
      {/* Remove corresponding JSX to newTodo state variable
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>*/}
      {/* change onAddTodo value */}
      <AddTodoForm onAddTodo={addTodo}/>
      {/*pass todoList*/}
      <TodoList todoList={todoList} />

    </div>
  );
}

export default App;

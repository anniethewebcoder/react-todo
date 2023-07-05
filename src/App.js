import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function App() {
  
  const [newTodo, setNewTodo] = useState("");
  
  //create new state variable todoList with an empty array
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      {/*pass todoList*/}
      <TodoList todoList={todoList} />

    </div>
  );
}

export default App;

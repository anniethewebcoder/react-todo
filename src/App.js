import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function App() {
  
  const getList = localStorage.getItem("savedTodoList");
  // console.log("This is JSON Parse " + JSON.parse(getList));

  const [todoList, setTodoList] = useState(
    JSON.parse(getList)
  );

  const addTodo = (newTodo) => {
    setTodoList([...todoList, {newTodo}]);
  }

  useEffect(() => {
   
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;

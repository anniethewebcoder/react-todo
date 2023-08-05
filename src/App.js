import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const useSemiPersistentState = () => {
  const getList = localStorage.getItem("savedTodoList");

  const [todoList, setTodoList] = useState(
    JSON.parse(getList) || []
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList]
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([...todoList, {newTodo}]);
  }

  const removeTodo = (item) => {
    const newList = todoList.filter(
      (todo) => todo.newTodo.id !== item.id
    );
    

    setTodoList(newList);
  
  };
  
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList}  onRemoveTodo={removeTodo} />
    </>
  );
}

export default App;

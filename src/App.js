import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const getSavedTodoList = JSON.parse(localStorage.getItem("savedTodoList"));

const getAsyncTodoList = () =>
new Promise((resolve) => 
  setTimeout(
    () => resolve({
      data: { todoList: getSavedTodoList }
    }), 2000
  )
)

function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getAsyncTodoList().then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    }).catch(() => setIsError(true));
  }, []);

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

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

      { isError && <p>Something went wrong ...</p> }

      { isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList}  onRemoveTodo={removeTodo} />
      )}
      
    </>
  );
}

export default App;

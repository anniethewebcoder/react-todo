import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import style from "./TodoListItem.module.css"

function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  const loadTodo = async() => {
    try {
      const response = await
        fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
          }
        })
  
        if(!response.ok) {
          const message = `Error: ${response.status}`
          throw new Error(message)
        }
  
        const todosFromAPI = await response.json()
  
        const todos = todosFromAPI.records.map((todo) => {
          
          const newTodo = {
            id: todo.id,
            title: todo.fields.title
          }
  
          return newTodo
        })
  
        setTodoList(todos)
        
    } catch (error) {
      console.log(error.message)
    }
  }
  
  useEffect(() => {
    loadTodo().then((result) => {
      setIsLoading(false);
    })
  }, [])

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, {newTodo}]);
  }

  const removeTodo = (item) => {
    const newList = todoList.filter(
      (todo) => todo.id !== item.id
    );
  
    setTodoList(newList);
  
  };
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <div className={style.Container}>
          
          <h1 className={style.Heading}>Todo List</h1>
          <AddTodoForm onAddTodo={addTodo} />
          { 
            isLoading ? (
              <p>Loading...</p>
            ) : (
              <TodoList todoList={todoList}  onRemoveTodo={removeTodo} />
            )
          }
        </div>
        } />
        <Route path="/new" element={<h1>New Todo List</h1>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
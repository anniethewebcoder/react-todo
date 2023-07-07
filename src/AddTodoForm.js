import React from 'react';
import { useState } from 'react';

const AddTodoForm = ({onAddTodo}) => {

    const [todoTitle, setTodoTitle] = useState("");
    
    const handleTitleChange = (event) => {
        let newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
        console.log(newTodoTitle)
    }

    const handleAddTodo = (event) => {
        event.preventDefault();

        onAddTodo({
            title: todoTitle,
            id: Date.now()
        });
        setTodoTitle("")
    }
    
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title</label>
            <input type='text' id='todoTitle' name='title' value={todoTitle} onChange={handleTitleChange}></input>
            <button type='submit'>Add</button>

        </form>
    );
}

export default AddTodoForm;
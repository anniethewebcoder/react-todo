import React from 'react';
import { useState } from 'react';
import InputWithLabel from './InputWithLabel';

const AddTodoForm = ({onAddTodo}) => {

    const [todoTitle, setTodoTitle] = useState("");
    
    const handleTitleChange = (event) => {
        let newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
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
            <InputWithLabel 
                id="todoTitle"
                name="title" 
                value={todoTitle}
                onChange={handleTitleChange}
            >Title: </InputWithLabel>
            <button type='submit'>Add</button>

            {/*<input type='text' id='todoTitle' name='title' value={todoTitle} onChange={handleTitleChange}></input>*/}

        </form>
    );
}

export default AddTodoForm;
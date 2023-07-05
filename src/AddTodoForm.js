import React from 'react';
import { useState } from 'react';

const AddTodoForm = (props) => {

    //create new state variable todoTitle
    const [todoTitle, setTodoTitle] = useState("")
    
    //declare a new function handleTitleChange
    const handleTitleChange = (event) => {
        //retrieve value input from event and store it to newTodoTitle
        let newTodoTitle = event.target.value;
        //set it to setTodoTitle
        setTodoTitle(newTodoTitle);
        console.log(newTodoTitle)
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        //Remove todoTitle from handleAddTodo
        //let todoTitle = event.target.title.value;
        //console.log(todoTitle);
        props.onAddTodo(todoTitle);
    }
    
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title</label>
            {/* 
            <input type='text' id='todoTitle' name='title'></input> 
            Modify input element to be a controlled input
            Add value to props.todoTitle
            add handleTitleChange function to onChange*/}
            <input type='text' id='todoTitle' name='title' value={props.todoTitle} onChange={handleTitleChange}></input>
            <button type='submit'>Add</button>

        </form>
    );
}

export default AddTodoForm;
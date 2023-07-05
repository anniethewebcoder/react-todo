import React from 'react';
import { useState } from 'react';

const AddTodoForm = ({onAddTodo}) => {

    //create new state variable todoTitle
    const [todoTitle, setTodoTitle] = useState("");
    
    //declare a new function handleTitleChange
    const handleTitleChange = (event) => {
        //retrieve value input from event and store it to newTodoTitle
        let newTodoTitle = event.target.value;
        //set it to setTodoTitle
        setTodoTitle(newTodoTitle);
        console.log(newTodoTitle)
    }

    const handleAddTodo = (event) => {
        //Remove reset() method 
        event.preventDefault();

        //Remove todoTitle from handleAddTodo
        //let todoTitle = event.target.title.value;
        //console.log(todoTitle);

        //update the onAddTodo callback prop to pass an Object instead of a String
        onAddTodo({
            title: todoTitle,
            id: Date.now()
        });
        setTodoTitle("")
        //and reset to todoTitle state to empty String
        //todoTitle = "";
    }
    
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title</label>
            {/* 
            <input type='text' id='todoTitle' name='title'></input> 
            Modify input element to be a controlled input
            Add value to props.todoTitle
            add handleTitleChange function to onChange*/}
            <input type='text' id='todoTitle' name='title' value={todoTitle} onChange={handleTitleChange}></input>
            <button type='submit'>Add</button>

        </form>
    );
}

export default AddTodoForm;
import React from 'react';

const AddTodoForm = () => {
    
    const handleAddTodo = (event) => {
        event.preventDefault();
        let todoTitle = event.target.value;
        console.log(todoTitle);
    }
    
    return (
        <form>
            <label htmlFor='todoTitle'>Title</label>
            <input type='text' id='todoTitle' name='title' onSubmit={handleAddTodo}></input>
            <button type='submit' >Add</button>

        </form>
    );
}

export default AddTodoForm;
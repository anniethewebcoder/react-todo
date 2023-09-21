import React from 'react';
import PropTypes from 'prop-types'
import { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import style from './TodoListItem.module.css'

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
        <form className={style.AddForm} onSubmit={handleAddTodo}>
            <InputWithLabel 
                id="todoTitle"
                name="title" 
                value={todoTitle}
                isFocused
                onChange={handleTitleChange}
            >Title: </InputWithLabel>
            <button className={style.Button} type='submit'>Add</button>
        </form>
    );
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func
}

export default AddTodoForm;
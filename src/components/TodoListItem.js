import React from "react";
import PropTypes from 'prop-types'
import style from "./TodoListItem.module.css";

const TodoListItem = ({ todo, onRemoveTodo }) => {

    const handleRemoveTodo = () => {
        onRemoveTodo(todo);
    }
    
    return (
        <li className={style.ListItem}>
            {todo.title}
            &nbsp; &nbsp;
            <button className={style.Button} type="button" onClick={handleRemoveTodo}>Remove</button>
        </li>
    );
}

TodoListItem.propTypes = {
    todo: PropTypes.object,
    onRemoveTodo: PropTypes.func
}

export default TodoListItem;
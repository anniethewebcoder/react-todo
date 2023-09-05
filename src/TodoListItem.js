import React from "react";
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

export default TodoListItem;
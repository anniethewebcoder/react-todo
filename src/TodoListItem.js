import React from "react";

const TodoListItem = ({ todo, onRemoveTodo }) => {

    const handleRemoveTodo = () => {
        onRemoveTodo(todo);
    }
    
    return (
        <li>
            {todo.title}
            &nbsp; &nbsp;
            <button type="button" onClick={handleRemoveTodo}>Remove</button>
        </li>
    );
}

export default TodoListItem;
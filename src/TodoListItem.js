import React from "react";

const TodoListItem = ({ todo }) => {

    
    return (
        <li>
            {todo.title}
            <button type="button">Remove</button>
        </li>
    );
}

export default TodoListItem;
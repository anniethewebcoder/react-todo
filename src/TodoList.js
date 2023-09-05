import React from 'react';
import TodoListItem from './TodoListItem';
import style from "./TodoListItem.module.css";

const TodoList = ({ todoList, onRemoveTodo }) => {

    return (
      <>
        <ul className={style.List}>
        {
          todoList.map(function(item) {
            return ( 
              <TodoListItem 
                key={item.id} 
                todo={item}
                onRemoveTodo={onRemoveTodo}
              />
            );          
          })
        }
      </ul>
      </>
    );
}

export default TodoList;

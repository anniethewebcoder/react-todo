import React from 'react';
import PropTypes from 'prop-types'
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

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func
}

export default TodoList;

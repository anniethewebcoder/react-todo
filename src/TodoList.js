import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todoList}) => {
    return (
      <>
        <ul>
        {
          todoList.map(function(item) {
            console.log(item);
            return <TodoListItem key={item.newTodo.id} todo={item.newTodo}/>
          })
        }
      </ul>
      </>
    );
}

export default TodoList;

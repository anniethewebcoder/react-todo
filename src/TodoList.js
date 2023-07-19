import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todoList}) => {

  console.log(todoList);
    return (
      <>
        <ul>
        {
          todoList.map(function(item) {
            return <TodoListItem key={item.newTodo.id} todo={item.newTodo}/>
          })
        }
      </ul>
      </>
    );
}

export default TodoList;

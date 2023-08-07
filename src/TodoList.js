import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, onRemoveTodo }) => {

    return (
      <>
        <ul>
        {
          todoList.map(function(item) {
            return ( 
              <TodoListItem 
                key={item.newTodo.id} 
                todo={item.newTodo}
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

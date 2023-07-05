import React from 'react';
import TodoListItem from './TodoListItem';

//Delete the hard-coded varaible
// const todoList = [
//     { 
//       id: 1, 
//       title: "Read the Road to React Fundamentals"
//     }, 
//     {
//       id: 2, 
//       title: "Read more arrticles listed in the textbook"
//     },
//     {
//       id: 3,
//       title: "Follow along the Todo List assignment"
//     }
// ]

//add props parameter and destructuring props
const TodoList = ({todoList}) => {
    return (
        <ul>
        {
          todoList.map(function(item) {
            return <TodoListItem key={item.id} todo={item}/>
          })
        }
      </ul>
    );
}

export default TodoList;

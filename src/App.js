import React from 'react';

const todoList = [
  { 
    id: 1, 
    title: "Read the Road to React Fundamentals"
  }, 
  {
    id: 2, 
    title: "Read more arrticles listed in the textbook"
  },
  {
    id: 3,
    title: "Follow along the Todo List assignment"
  }
]

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {
          todoList.map(function(item) {
            return <li key={item.id}>{item.title}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;

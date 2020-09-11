import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import Box from '@material-ui/core/Box';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = description => {
    const newList = [...todos, { description }];
    setTodos(newList);
  };

  const crossTodo = index => {
    const newList = [...todos];
    newList[index].isCompleted = !newList[index].isCompleted;
    setTodos(newList);
  }

  const deleteTodo = index => {
    const newList = [...todos];
    newList.splice(index, 1)
    setTodos(newList)
  }

  return (
    <Box className="main-container">
      <h1 color="primary">ToDo List</h1>
      <Form addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          crossTodo={crossTodo}
          deleteTodo={deleteTodo}
        />
      ))
      }
    </Box>
  );
}

export default App;

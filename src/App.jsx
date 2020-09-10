import React, { useState } from 'react';
import Todo from './components/Todo';
import Form from './components/Form';


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
    <div className="general-container">
      <div className="main-div">
        <h1>ToDo List</h1>
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
      </div>
    </div>
  );
}

export default App;

import React from 'react';

function Todo({ todo, index, crossTodo, deleteTodo }) {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>{todo.description}
      <div>
        <button onClick={() => crossTodo(index)}>Done</button>
      </div>
      <div>
        <button onClick={() => deleteTodo(index)}> X </button>
      </div>
    </div>
  )
}

export default Todo;

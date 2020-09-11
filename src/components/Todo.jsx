import React from 'react';
import './Todo.css';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import Box from '@material-ui/core/Box';



function Todo({ todo, index, crossTodo, deleteTodo }) {

  return (
    <Box className="todo-list" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
      <h4 className="todo">
        {todo.description}
      </h4>
      <Fab variant="round" sizeSmall onClick={() => crossTodo(index)}>
        <DoneIcon />
      </Fab>
      <Fab
        variant="round"
        color="secondary"
        sizeSmall
        onClick={() => deleteTodo(index)}>
        <DeleteIcon />
      </Fab>
    </Box>
  )
}

export default Todo;

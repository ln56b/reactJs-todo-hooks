import React, { useState } from 'react';
import './Form.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

function Form({ addTodo }) {
  const [input, setInput] = useState('')

  const handleSubmit = event => {
    event.preventDefault();
    if (!input) return;
    addTodo(input);
    setInput('');
  }
  return (
    <form className="input-and-submit">
      <TextField id="standard-basic" label="Add a todo" type="text"
        value={input}
        onChange={event => setInput(event.target.value)} />
      <Fab color="primary" aria-label="add" onClick={handleSubmit}>
        <AddIcon />
      </Fab>
    </form>
  )
};

export default Form;
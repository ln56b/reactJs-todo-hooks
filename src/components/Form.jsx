import React, { useState } from 'react';

function Form({ addTodo }) {
  const [input, setInput] = useState('')

  const handleSubmit = event => {
    event.preventDefault();
    if (!input) return;
    addTodo(input);
    setInput('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add a todo"
        className="input"
        value={input}
        onChange={event => setInput(event.target.value)}
      />
      <button onClick={handleSubmit}> + </button>
    </form>
  )
};

export default Form;
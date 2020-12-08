import React, { useState } from 'react';

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const handleChange = e => {
      setInput(e.target.value);
      console.log()
  }

  const handleSubmit = e => {
      e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 333),
        text: input
    })

    setInput('');
  }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
           <input type="text"
           value={input}
           placeholder="Your todo"
           name="text"
           className="todo-input"
           onChange={handleChange}
           /> 
           <button type="submit" className="todo-button">Add</button>
        </form>
    )
}

export default TodoForm

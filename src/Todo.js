import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addToDo = () => {
    if (inputValue.trim() !== '') { // Correctly invoke trim()
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={addToDo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button> {/* Wrap handleDelete in an arrow function */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

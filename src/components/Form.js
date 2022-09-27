import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => {
      return todo.id === id ? { title, id, completed } : todo;
    });
    setTodos(newTodo);
    setEditTodo(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [editTodo, setInput]);

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        placeholder="Enter your todo..."
        className="task-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button type="submit" className="button-add">
        {editTodo ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default Form;

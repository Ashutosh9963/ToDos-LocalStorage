import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import "./App.css";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header />
          </div>
          <div>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
          </div>
          <div>
            <Todolist
              todos={todos}
              setTodos={setTodos}
              setEditTodo={setEditTodo}
            />
          </div>
        </div>
      </div>
      <div className="foot-note">
        <p>Made with &#10084; by Ashutosh</p>
      </div>
    </>
  );
};

export default App;
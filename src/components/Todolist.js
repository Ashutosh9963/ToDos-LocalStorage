import React from "react";
import { FaRegEdit, FaRegTrashAlt, FaQuestion } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";

const Todolist = ({ todos, setTodos, setEditTodo }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (todo.id === item.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );

    if (todo.completed) {
      alert("TO MARK THE TASK AS PENDING, CLICK 'OK'");
    } else if (!todo.completed) {
      alert("TO MARK THE TASK AS COMPLETED, CLICK 'OK'");
    }
  };

  const handleEdit = ({ id }) => {
    setEditTodo(true);
    const findTodo = todos.find((todo) => todo.id === id);
    // console.log(findTodo);
    setEditTodo(findTodo);
  };

  return (
    <div className="todos-area">
      {todos.length === 0
        ? "No Todos to display, kindly add one !"
        : todos.map((todo) => {
            return (
              <li className="todo-list" key={todo.id}>
                <input
                  type="text"
                  value={todo.title}
                  className="list-input"
                  onChange={(e) => e.preventDefault()}
                />
                <div>
                  <button
                    className="btn-completed task-button"
                    onClick={() => handleComplete(todo)}
                  >
                    {todo.completed ? <GrCompliance /> : <FaQuestion />}
                  </button>
                  <button
                    className="btn-edit task-button"
                    onClick={() => handleEdit(todo)}
                  >
                    <FaRegEdit />
                  </button>
                  <button
                    className="btn-delete task-button"
                    onClick={() => handleDelete(todo)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </div>
              </li>
            );
          })}
    </div>
  );
};

export default Todolist;

import React, { useState } from "react";
import AddTodos from "./AddTodos";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else return (list = []);
};

const Todos = () => {
  const [todoitem, settodoitem] = useState("Write your todo here");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState("false");
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = () => {
    if (todoitem) {
      let newList = setList([...list, todoitem]);
      return setList(newList);
    }
    // const id = new Date().getTime().toString();
    // const objt = todoitem;
    // const list = localStorage.setItem([
    //   { ...todoitem },
    //   { id: id },
    //   { item: objt },
    // ]);
  };

  return (
    <div>
      <div className="container">
        <div className="heading">
          <h2>What's your Todo?</h2>
        </div>
        <div className="form-input">
          <form>
            <input
              type="text"
              placeholder={todoitem}
              onChange={(e) => settodoitem(e.target.value)}
            />
            <button
              type="submit"
              className="submit-btn"
              onClick={() => handleSubmit()}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Todos;

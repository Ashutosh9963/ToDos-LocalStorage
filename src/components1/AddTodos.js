import React from "react";

const AddTodos = (value) => {
  return (
    <div>
      <div className="items">
        <table>
          <tr>
            <td>{value.value}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AddTodos;

import React from "react";

import { AiOutlineExclamation } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const Todo = ({ items, removeItem, toggleImportant }) => {
  return items.map((item, index) => (
    <div
      className={item.isComplete ? "todo-row important" : "todo-row"}
      key={index}
    >
      <div key={item.id} >{item.text}</div>
      <div className="icons">
        <AiOutlineExclamation onClick={() => toggleImportant(item.id)}/>
        <AiFillDelete
          className="delete-icon"
          onClick={() => removeItem(item.id)}
        />
      </div>
    </div>
  ));
};

export default Todo;

import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

function TodoList({ key, handleOnDelete, currTask }) {
  return (
    <li key={key} className="todo-item">
      <span>{currTask}</span>
      <button className="check-btn">
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => handleOnDelete(currTask)}>
        <MdDeleteForever />
      </button>
    </li>
  );
}

export default TodoList;

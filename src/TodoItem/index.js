import React from "react";
import { AiFillCheckCircle,AiFillDelete } from 'react-icons/ai';
import "./TodoItem.css";

function TodoItem(props) {

  return (
    <li className="TodoItem">
      <AiFillCheckCircle
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      onClick={props.onComplete}
      >
      </AiFillCheckCircle>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <AiFillDelete className="Icon Icon-delete"
      onClick={props.onDelete}
      ></AiFillDelete>
    </li>
  );
}
export { TodoItem };

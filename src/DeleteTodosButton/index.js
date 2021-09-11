import React from "react";
import { AiFillDelete } from 'react-icons/ai';
import { TodoContext } from "../TodoContent";
import "./DeleteTodosButton.css";

function DeleteTodosButton() {
  const { deleteAllTodos } = React.useContext(TodoContext);


  const onClickButton = () => {
    deleteAllTodos();
  };

  return (
    <AiFillDelete className="DeleteTodosButton" onClick={onClickButton}>
    </AiFillDelete>
  );
}
export { DeleteTodosButton };

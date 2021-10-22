import React from "react";
import { AiFillDelete } from 'react-icons/ai';
import "./DeleteTodosButton.css";

function DeleteTodosButton({deleteAllTodos}) {
  
  const onClickButton = () => {
    deleteAllTodos();
  };

  return (
    <AiFillDelete className="DeleteTodosButton" onClick={onClickButton}>
    </AiFillDelete>
  );
}
export { DeleteTodosButton };

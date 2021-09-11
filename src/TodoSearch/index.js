import React from "react";
import { TodoContext } from "../TodoContent";
import "./TodoSearch.css";
function TodoSearch() {
const {searchValue, setSearchValue} = React.useContext(TodoContext);

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <input
      onChange={onSearchValueChange}
      placeholder="Cebolla"
      value={searchValue}
      className="TodoSearch"
    />
    );
}
export { TodoSearch };

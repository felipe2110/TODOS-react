import React from "react";
import "./TodoSearch.css";
function TodoSearch({searchValue,setSearchValue,loading}) {

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <input
      onChange={onSearchValueChange}
      placeholder="Cebolla"
      value={searchValue}
      className="TodoSearch"
      disabled={loading}
    />
    );
}
export { TodoSearch };

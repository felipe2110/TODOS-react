import React from "react";
import './EmptyTodosSearchResults.css';

function EmptyTodosSearchResults({searchText}){
    return(
        <p className="EmptyTodosSearchResults">No hay resultados para {searchText}. =(</p>
    )
}
export {EmptyTodosSearchResults};
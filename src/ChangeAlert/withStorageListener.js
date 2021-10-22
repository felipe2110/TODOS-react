import React from "react";

function withStorageListener(WrappedComponent){
return function WrappedComponentWithStorageListener(props){
    const[storageChange,setstorageChange]= React.useState(false);

    return (
    <WrappedComponent 
    show={storageChange}
    toggleShow={setstorageChange}
    />)
}
}
export {withStorageListener}
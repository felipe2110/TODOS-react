import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { DeleteTodosButton } from "../DeleteTodosButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { EmptyTodosSearchResults } from "../EmptyTodosSearchResults";
import{ChangeAlertWithStorageListener} from "../ChangeAlert";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    setDeleteTodos,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    deleteAllTodos,
  } = useTodos();
  return (
    <React.Fragment>
      <TodoHeader loading={loading} >
        <TodoCounter 
        totalTodos={totalTodos} 
        completedTodos={completedTodos}
        />
        <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
      error={error}
      loading={loading}
      searchedTodos={searchedTodos}
      totalTodos={totalTodos}
      searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText)=> <EmptyTodosSearchResults searchText={searchText}/>}
        /*render={todo =>(
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      */
      >
      {todo =>(
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}></TodoForm>
        </Modal>
      )}
      <DeleteTodosButton
        deleteAllTodos={deleteAllTodos}
        setDeleteTodos={setDeleteTodos}
      />
      <CreateTodoButton setOpenModal={setOpenModal} />
      <ChangeAlertWithStorageListener />
    </React.Fragment>
  );
}

export default App;

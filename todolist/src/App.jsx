import {  useState } from "react";
import "./App.css";
import Card from "./Card";
export const App = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  function createTodo() {
    if (value == "") return;
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), name: value, complete: false },
      ];
    });
    setValue("");
  }
  function checkedTodo(todoId, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === todoId) return { ...todo, complete:completed };

        return todo;
      });
    });
  }
  function deleteTodo(todoId){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=>todo.id!==todoId)
    });
  }
  return (
    <div>
      <br></br>
      <input
        type="text"
        placeholder="enter the task"
        id="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button id="btn" onClick={createTodo}>
        Click me
      </button>
      <div id="list-items">
      {todos.map((todo) => {
        return (
          <Card
            key={todo.id}
            id={todo.id}
            name={todo.name}
            checkedTodo={checkedTodo}
            complete={todo.complete}
            deleteTodo={deleteTodo}
          />
        );
      })}</div>
    </div>
  );
};

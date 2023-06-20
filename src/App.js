import InputBar from "./Components/InputBar/inputBar";
import React, { useState, useEffect } from "react";
import List from "./Components/List/list";
import styles from "./App.module.scss";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Saving in LocalStorage
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  };
  return (
    <div className={styles.App}>
      <header>Simple To do List</header>
      <div className={styles.container}>
        <InputBar
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          setStatus={setStatus}
        />
      </div>
      <div className={styles.container}>
        <List filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;

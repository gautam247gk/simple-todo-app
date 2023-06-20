import React from "react";
import styles from "./inputBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function InputBar({ inputText, setInputText, todos, setTodos, setStatus }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.random() * 1000,
        },
      ]);
    }
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <div className={styles.input}>
        <input
          className={styles["todo-input"]}
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          placeholder="Type Here..."
        />
        <button
          className={styles["todo-button"]}
          onClick={submitTodoHandler}
          type="submit"
        >
          <FontAwesomeIcon icon={faPlus} fade />
        </button>

        <div className={styles.select}>
          <select
            onChange={statusHandler}
            name="todos"
            className={styles["filter-todo"]}
          >
            <option value="all">All Items</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default InputBar;

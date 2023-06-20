import React from "react";
import styles from "./ListItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

function ListItem({ text, todo, todos, setTodos }) {
  //Event Handlers
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className={styles.todo}>
      <li
        className={`${styles["todo-item"]} ${
          todo.completed ? styles.completed : ""
        }`}
      >
        {text}
      </li>

      <button onClick={completeHandler} className={styles["complete-btn"]}>
        <FontAwesomeIcon icon={faCheck} />
      </button>

      <button onClick={deleteHandler} className={styles["trash-btn"]}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default ListItem;

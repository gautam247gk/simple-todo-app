import React from "react";
import ListItem from "../ListItem/ListItem";
import styles from "./list.module.scss";

function List({ todos, setTodos, filteredTodos }) {
  return (
    <div className={styles["todo-container"]}>
      <ul className={styles["todo-list"]}>
        {filteredTodos.map((todo) => (
          <ListItem
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;

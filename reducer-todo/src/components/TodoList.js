import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  const { state, dispatch } = props;

  return (
    <div>
      {state.items.map(element => {
        return (
          <Todo
            key={element.id}
            id={element.id}
            dispatch={dispatch}
            completed={element.completed}
            item={element.item}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
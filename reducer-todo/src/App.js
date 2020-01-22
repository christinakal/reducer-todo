import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { reducer, initialState } from "./reducers/Reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <TodoList dispatch={dispatch} state={state} />
      <h2>Add New Tasks Below</h2>
      <TodoForm dispatch={dispatch} state={state} />
    </div>
  );
};

export default App;
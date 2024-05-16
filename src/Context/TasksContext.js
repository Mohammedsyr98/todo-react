import { createContext, useContext, useState, useReducer } from "react";
import taskReducer from "../Reducers/TaskReducer";
import buttonReducer from "../Reducers/ButtonReducer";
export const TasksContext = createContext([]);
export const TasksContextProvider = ({ children }) => {
  const tasksInitialState = {
    input: "",
    darkmode: false,
    All: [],
    Completed: [],
    Active: [],
  };
  const buttonInitialState = [
    { tabName: "All", status: true },
    { tabName: "Active", status: false },
    { tabName: "Completed", status: false },
  ];
  const [state, dispatch] = useReducer(taskReducer, tasksInitialState);
  const [buttonState, buttonDispatch] = useReducer(
    buttonReducer,
    buttonInitialState
  );
  console.log(state);

  const [input, setInput] = useState();
  const [darkmode, setDarkMode] = useState(false);

  return (
    <TasksContext.Provider
      value={{
        buttonState,
        buttonDispatch,
        state,
        dispatch,
        input,
        setInput,
        darkmode,
        setDarkMode,
      }}>
      {children}
    </TasksContext.Provider>
  );
};
export const useTask = () => {
  return useContext(TasksContext);
};

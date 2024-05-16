import "./App.css";

import bgDesktopDark from "./images/bg-desktop-dark.jpg";
import bgDesktopLight from "./images/bg-desktop-light.jpg";
import { FaMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import { useTask } from "./Context/TasksContext";
import Task from "./Component/Task";

function App() {
  const {
    buttonState,
    buttonDispatch,
    state,
    dispatch,
    input,
    setInput,
    darkmode,
    setDarkMode,
    setAllTasks,
    allTasks,
    setActiveTasks,
  } = useTask();

  return (
    <div className="App ">
      <div className=" transition main h-screen  flex flex-col transition-all duration-150 ease-in-out relative">
        <div className="photo basis-2/5 bg-slate-400  flex justify-center items-end">
          <div className="box absolute lg:w-2/5 w-11/12 m-auto">
            <div className="flex items-center justify-between  font-bold text-white">
              <h1 className="text-5xl">TO DO</h1>
              {darkmode ? (
                <LuSunMedium
                  onClick={() => setDarkMode(!darkmode)}
                  className="text-5xl cursor-pointer"
                />
              ) : (
                <FaMoon
                  onClick={() => setDarkMode(!darkmode)}
                  className="text-3xl cursor-pointer"
                />
              )}
            </div>

            <div className="relative flex items-center mt-5">
              <input
                type="search"
                id="search"
                className={`block w-full  text-sm p-7 rounded-lg duration-200 transition    ${
                  darkmode
                    ? "bg-darkcardcolor text-white"
                    : "lightcardcolor text-gray-900"
                } focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="New task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                onClick={() => {
                  if (input !== "") {
                    dispatch({ type: "newTask", payload: input });
                  }

                  setInput("");
                }}
                type="submit"
                disabled={input === ""}
                className={`text-white absolute end-2.5 ${
                  input == ""
                    ? "bg-inactivedarkcolor "
                    : "bg-blue-700 hover:bg-blue-800"
                }   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600`}>
                Add
              </button>
            </div>
            <div
              className={`tasklist duration-200 transition rounded-lg ${
                darkmode
                  ? "bg-darkcardcolor shadow-darker"
                  : "bg-lightcardcolor shadow-lighter"
              }  mt-5 absolute w-full`}>
              <Task />
              <div
                className={` mb-2 mt-2 p-5 flex justify-between ${
                  darkmode ? "text-zinc-500" : "text-inactivedarkcolor"
                }`}>
                <span className="py-2.5 ">{state.All.length} tasks</span>

                {buttonState.map((button, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      buttonDispatch({ type: button.tabName, payload: true });
                    }}
                    type="button"
                    className={`  me-2  text-lg font-bold  focus:outline-none  ${
                      darkmode ? "hover:text-white " : "hover:text-dark "
                    } ${
                      button.status
                        ? " text-blue-600"
                        : " text-inactivedarkcolor"
                    }`}>
                    {button.tabName}
                  </button>
                ))}
                <button
                  className={`py-2.5 ${
                    darkmode
                      ? "hover:text-white text-zinc-500"
                      : "hover:text-dark text-inactivedarkcolor"
                  }`}
                  onClick={(e) => {
                    dispatch({ type: "ClearCompleted" });
                  }}>
                  Clear Completed
                </button>
              </div>
            </div>
          </div>
          <img
            alt=""
            className="w-full h-full duration-300 transition ease-in-out"
            src={darkmode ? bgDesktopDark : bgDesktopLight}></img>
        </div>
        <div
          className={`other basis-3/5 duration-200 transition ${
            darkmode ? "bg-dark" : "bg-light"
          }`}></div>
      </div>
    </div>
  );
}
// tasks today
/// 1- active add task from input -done-
/// 2- make the button inactive with color and events if input empty -done-
/// 3- when click on task move it to completed state
/// 4- check the active state from all tasks state with not icluded value in completed state
export default App;

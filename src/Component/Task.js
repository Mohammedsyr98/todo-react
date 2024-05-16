import { useTask } from "../Context/TasksContext";

export default function Task() {
  const { state, darkmode, dispatch, buttonState } = useTask();

  const current = buttonState.filter((ele) => (ele.status ? ele : ""))[0]
    .tabName;

  return (
    <>
      {state[current].length > 0 &&
        state[current].map((task, index) => (
          <div
            key={index}
            onClick={() =>
              state.Active.includes(task)
                ? dispatch({ type: "moveToCompletedTasks", payload: task })
                : dispatch({ type: "moveToActiveTasks", payload: task })
            }
            className={`task flex items-center ${
              darkmode ? "text-white" : "text-dark"
            } border-b border-gray-500 p-5`}>
            <input
              checked={state.Completed.includes(task)}
              type="checkbox"
              className="w-6 h-6 rounded-full focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              className={`w-full py-3 rounded-xl ms-2 text-lg font-medium ${
                state.Completed.includes(task) ? "line-through" : ""
              }`}>
              {task}
            </label>
          </div>
        ))}
    </>
  );
}

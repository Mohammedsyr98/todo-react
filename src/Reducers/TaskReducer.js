export default function StateReducer(state, action) {
  const value = action.payload;
  console.log(action);
  switch (action.type) {
    case "newTask": {
      return {
        ...state,
        All: [...state.All, value],
        Active: [...state.Active, value],
      };
    }
    case "moveToCompletedTasks": {
      const updatedActiveTasks = state.Active.filter((task) => task !== value);
      const updatedCompletedTasks = [...state.Completed, value];
      return {
        ...state,
        ...state.All,
        Active: [...updatedActiveTasks],
        Completed: [...updatedCompletedTasks],
      };
      // return {
      //   ...state,
      //   ...state.allTasks,
      //   activeTasks: [newValue],
      // };
    }
    case "moveToActiveTasks": {
      const updatedCompletedTasks = state.Completed.filter(
        (task) => task !== value
      );
      const updatedActiveTasks = state.All.filter((task) => task === value);
      return {
        ...state,
        ...state.All,
        Active: [...state.Active, ...updatedActiveTasks].sort(
          (a, b) => state.All.indexOf(a) - state.All.indexOf(b)
        ),
        Completed: [...updatedCompletedTasks],
      };
    }
    case "ClearCompleted": {
      const updatedAllTasks = state.All.filter((ele) =>
        state.Completed.includes(ele) ? "" : ele
      );
      const updatedCompletedTasks = [];

      return {
        ...state,
        Completed: updatedCompletedTasks,
        All: updatedAllTasks,
      };
    }
    default:
      return state;
  }
}

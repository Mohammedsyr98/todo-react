export default function ButtonState(currentState, action) {
  switch (action.type) {
    case "All":
    case "Completed":
    case "Active": {
      const updatedState = currentState.map((ele) =>
        ele.tabName === action.type
          ? { ...ele, status: true }
          : { ...ele, status: false }
      );
      return updatedState;
    }
    default:
      return currentState;
  }
}

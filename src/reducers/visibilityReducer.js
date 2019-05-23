const visibilityReducer = (state = { show: "all" }, action) => {
  switch (action.type) {
    case "SHOW_COMPLETED":
      return { ...state, show: "completed" }
    case "SHOW_ACTIVE":
      return { ...state, show: "active" }
    case "SHOW_ALL":
      return { ...state, show: "all" }
    default:
      return state
  }
}

export default visibilityReducer

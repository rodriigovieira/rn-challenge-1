const TodosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo]
    case "EDIT_TODO":
      return state.map((todo, index) => {
        if (index === action.index) {
          return action.todo
        } else {
          return todo
        }
      })
    case "DELETE_TODO":
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    default:
      return state
  }
}

export default TodosReducer

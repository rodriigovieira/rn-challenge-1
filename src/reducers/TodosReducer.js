const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "POPULATE_TODOS":
      return [...action.todos]
    case "ADD_TODO":
      return [...state, action.todo]
    case "EDIT_TODO":
      return [
        ...state.map((todo, index) => {
          if (index === action.index) {
            return action.todo
          }

          return todo
        })
      ]
    case "DELETE_TODO":
      return [...state.filter((_, index) => index !== action.index)]
    case "TOGGLE_TODO":
      return [
        ...state.map((todo, index) => {
          if (index === action.index) {
            return { ...todo, completed: !todo.completed }
          }

          return todo
        })
      ]
    default:
      return state
  }
}

export default todosReducer

// import AsyncStorage from "@react-native-community/async-storage"

const TodosReducer = (state = [], action) => {
  switch (action.type) {
    case "POPULATE_TODOS":
      return {
        ...state,
        todos: [...action.todos]
      }
    case "ADD_TODO":
      // AsyncStorage.setItem("@todos", JSON.stringify([...state.todos, action.todo]))

      return {
        ...state,
        todos: [...state.todos, action.todo]
      }
    case "EDIT_TODO":
      // AsyncStorage.setItem(
      //   "@todos",
      //   JSON.stringify(
      //     state.todos.map((todo, index) => {
      //       if (index === action.index) {
      //         return action.todo
      //       }

      //       return todo
      //     })
      //   )
      // )

      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return action.todo
          }

          return todo
        })
      }
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.index)
      }
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return { ...todo, completed: !todo.completed }
          }

          return todo
        })
      }
    case "TOGGLE_MODAL":
      return {
        ...state,
        showModal: !state.showModal,
        index: action.index
      }
    default:
      return state
  }
}

export default TodosReducer

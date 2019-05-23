import { connect } from "react-redux"
import TodoCard from "../components/TodoCard"
import { deleteTodo, toggleTodo } from "../actions/todoActions"

const getVisibleTodos = (todos, filter) => {
  switch (filter.show) {
    case "all":
      return todos
    case "completed":
      return todos.filter(todo => todo.completed)
    case "active":
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: index => dispatch(toggleTodo(index)),
  deleteTodo: index => dispatch(deleteTodo(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoCard)

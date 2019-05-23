const populateTodos = todos => ({
  type: "POPULATE_TODOS",
  todos
})

const addTodo = todo => ({
  type: "ADD_TODO",
  todo
})

const editTodo = (index, todo) => ({
  type: "EDIT_TODO",
  index,
  todo
})

const deleteTodo = index => ({
  type: "DELETE_TODO",
  index
})

const toggleTodo = index => ({
  type: "TOGGLE_TODO",
  index
})

export {
  populateTodos, addTodo, editTodo, deleteTodo, toggleTodo
}

import { combineReducers } from "redux"

import visibilityReducer from "./visibilityReducer"
import todosReducer from "./todosReducer"
import modalReducer from "./modalReducer"

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: visibilityReducer,
  modal: modalReducer
})

export default rootReducer

import React from "react"
import Routes from "./Routes"

import TodosContext from "../context/TodosContext"
import TodosReducer from "../reducers/TodosReducer"

if (__DEV__) {
  import("../config/reactotron").then(() => console.log("Reactotron Configured"))
}

const App = () => {
  const [state, dispatch] = React.useReducer(TodosReducer, {
    todos: [],
    showModal: false
  })

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <Routes />
    </TodosContext.Provider>
  )
}

export default App

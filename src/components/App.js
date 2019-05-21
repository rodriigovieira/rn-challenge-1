import React from "react"
import Routes from "./Routes"

import TodosContext from "../context/TodosContext"
import TodosReducer from "../reducers/TodosReducer"

const App = () => {
  const [state, dispatch] = React.useReducer(TodosReducer, [
    {
      title: "Finish all challenges",
      text: "You must finish all the Mastermind challenges.",
      completed: false
    },
    {
      title: "Post my repository",
      text: "Post my repository at the Mastermind group, so everyone can see it.",
      completed: true
    }
  ])

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <Routes />
    </TodosContext.Provider>
  )
}

export default App

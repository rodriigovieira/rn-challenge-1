import React from "react"
import { Provider } from "react-redux"

import store from "../store"

import Routes from "./Routes"

// import TodosContext from "../context/TodosContext"
// import TodosReducer from "../reducers/todosReducer"

if (__DEV__) {
  import("../config/reactotron").then(() => console.log("Reactotron Configured"))
}

const App = () => {
  // const [state, dispatch] = React.useReducer(TodosReducer, {
  //   todos: [],
  //   showModal: false
  // })

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App

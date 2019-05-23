import React from "react"
import AsyncStorage from "@react-native-community/async-storage"

import { Container, AddTodoButton, AddTodoButtonText } from "./styles"

import TodoCard from "../../components/TodoCard"

import TodosContext from "../../context/TodosContext"

const HomePage = (props) => {
  const { dispatch, state } = React.useContext(TodosContext)

  React.useEffect(() => {
    AsyncStorage.getItem("@todos")
      .then(localData => dispatch({
        type: "POPULATE_TODOS",
        todos: JSON.parse(localData)
      }))
      .catch(e => console.tron(e))
  }, [])

  React.useEffect(() => {
    AsyncStorage.setItem("@todos", JSON.stringify(state.todos))
  }, [state.todos])

  return (
    <Container contentContainerStyle={{ alignItems: "center" }}>
      <AddTodoButton onPress={() => props.navigation.navigate("AddTodoPage")}>
        <AddTodoButtonText>Add Todo</AddTodoButtonText>
      </AddTodoButton>

      {state.todos.map((todo, index) => (
        <TodoCard
          title={todo.title}
          text={todo.text}
          completed={todo.completed}
          key={index}
          index={index}
          navigation={props.navigation}
        />
      ))}
    </Container>
  )
}

HomePage.navigationOptions = { title: "HomePage", headerLeft: null, gesturesEnabled: false }

export default HomePage

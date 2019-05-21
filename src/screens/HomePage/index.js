import React from "react"
import { ScrollView } from "react-native"

import { Container, AddTodoButton, AddTodoButtonText } from "./styles"

import TodoCard from "../../components/TodoCard"

import TodosContext from "../../context/TodosContext"

const HomePage = (props) => {
  const { state } = React.useContext(TodosContext)

  return (
    <Container contentContainerStyle={{ alignItems: "center" }}>
      <AddTodoButton onPress={() => props.navigation.navigate("AddTodoPage")}>
        <AddTodoButtonText>Add Todo</AddTodoButtonText>
      </AddTodoButton>

      {state.map((todo, index) => (
        <TodoCard
          title={todo.title}
          text={todo.text}
          completed={todo.completed}
          key={index}
        />
      ))}
    </Container>
  )
}

HomePage.navigationOptions = { title: "HomePage" }

export default HomePage

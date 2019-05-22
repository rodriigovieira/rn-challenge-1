import React from "react"
import Reactotron from "reactotron-react-native"

import { Container, AddTodoButton, AddTodoButtonText } from "./styles"

import TodoCard from "../../components/TodoCard"

import TodosContext from "../../context/TodosContext"

const HomePage = (props) => {
  const { state } = React.useContext(TodosContext)

  // Reactotron.log(state)

  return (
    <Container contentContainerStyle={{ alignItems: "center" }}>
      <AddTodoButton onPress={() => props.navigation.navigate("AddTodoPage")}>
        <AddTodoButtonText>Add Todo</AddTodoButtonText>
      </AddTodoButton>

      {state.todos.map((todo, index) => (
        <>
          {/* {Reactotron.log(index)} */}
          <TodoCard
            title={todo.title}
            text={todo.text}
            completed={todo.completed}
            key={index}
            index={index}
            navigation={props.navigation}
          />
        </>
      ))}
    </Container>
  )
}

HomePage.navigationOptions = { title: "HomePage", headerLeft: null }

export default HomePage

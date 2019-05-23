import React from "react"
import AsyncStorage from "@react-native-community/async-storage"
import { connect } from "react-redux"

import { Container, AddTodoButton, AddTodoButtonText } from "./styles"

import { populateTodos as populateTodosAction } from "../../actions/todoActions"

import TodoCard from "../../components/TodoCard"

const HomePage = ({ populateTodos, navigation, todos }) => {
  React.useEffect(() => {
    AsyncStorage.getItem("@todos")
      .then((localData) => {
        if (localData) populateTodos([...JSON.parse(localData)])
      })
      .catch(e => console.tron(e))
  }, [])

  React.useEffect(() => {
    console.trom(JSON.stringify(todos))
    console.trom(todos)

    AsyncStorage.setItem("@todos", JSON.stringify(todos))
  }, [todos])

  console.trom(todos)

  return (
    <Container contentContainerStyle={{ alignItems: "center" }}>
      <AddTodoButton onPress={() => navigation.navigate("AddTodoPage")}>
        <AddTodoButtonText>Add Todo</AddTodoButtonText>
      </AddTodoButton>

      {todos.map((todo, index) => (
        <TodoCard
          title={todo.title}
          text={todo.text}
          completed={todo.completed}
          key={index}
          index={index}
          navigation={navigation}
        />
      ))}
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  populateTodos: todos => dispatch(populateTodosAction(todos))
})

const mapStateToProps = state => ({
  todos: state.todos
})

HomePage.navigationOptions = { title: "HomePage", headerLeft: null, gesturesEnabled: false }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

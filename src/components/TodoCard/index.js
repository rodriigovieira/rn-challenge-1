import React from "react"

import {
  Container,
  CardTitle,
  CardText,
  ActionsContainer,
  CardAction,
  Divider
} from "./styles"

const TodoCard = (props) => {
  return (
    <Container
      completed={props.completed}
      onPress={() => props.navigation.navigate("EditTodoPage", {
        title: props.title,
        text: props.text,
        completed: props.completed,
        index: props.index
      })}
    >
      <CardTitle>{props.title}</CardTitle>

      <CardText>{props.text}</CardText>

      <ActionsContainer>
        <CardAction>Complete</CardAction>

        <Divider />

        <CardAction>Delete</CardAction>
      </ActionsContainer>
    </Container>
  )
}

export default TodoCard

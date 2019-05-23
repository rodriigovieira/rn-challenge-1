import React from "react"
import { connect } from "react-redux"

import { toggleTodo as toggleTodoAction } from "../../actions/todoActions"
import { toggleModal as toggleModalAction } from "../../actions/modalActions"

import {
  Container,
  CardTitle,
  CardText,
  ActionsContainer,
  CardAction,
  CardActionText,
  Divider
} from "./styles"

import ConfirmModal from "../ConfirmModal"

const TodoCard = ({
  title,
  text,
  completed,
  navigation,
  index,
  toggleTodo,
  modal,
  toggleModal
}) => {
  const handleOpenModal = () => {
    toggleModal()
  }

  const handleComplete = () => {
    toggleTodo(index)

    navigation.push("HomePage")
  }

  return (
    <Container
      completed={completed}
      onPress={() => navigation.navigate("EditTodoPage", {
        title,
        text,
        completed,
        index
      })
      }
    >
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>

      <ActionsContainer>
        <CardAction onPress={handleComplete}>
          <CardActionText>Complete</CardActionText>
        </CardAction>

        <Divider />

        <CardAction onPress={handleOpenModal}>
          <CardActionText>Delete</CardActionText>
        </CardAction>
      </ActionsContainer>

      {modal && <ConfirmModal title={title} index={index} navigation={navigation} />}
    </Container>
  )
}

const mapStateToProps = ({ modal }) => ({ modal })

const mapDispatchToProps = dispatch => ({
  toggleTodo: index => dispatch(toggleTodoAction(index)),
  toggleModal: () => dispatch(toggleModalAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoCard)

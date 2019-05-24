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
  modalIndex,
  toggleModal
}) => {
  const handleOpenModal = () => {
    toggleModal(index)
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
        index,
        modalIndex
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

      {index === modalIndex && <ConfirmModal title={title} index={index} navigation={navigation} />}
    </Container>
  )
}

const mapStateToProps = state => ({ modal: state.modal.modal, modalIndex: state.modal.index })

const mapDispatchToProps = dispatch => ({
  toggleTodo: index => dispatch(toggleTodoAction(index)),
  toggleModal: index => dispatch(toggleModalAction(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoCard)

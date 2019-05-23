import React from "react"
import Modal from "react-native-modal"
import { connect } from "react-redux"

import {
  Container,
  ModalTitle,
  ModalText,
  ActionsContainer,
  Action,
  CancelText,
  DeleteText
} from "./styles"
import { toggleModal as toggleModalAction } from "../../actions/modalActions"
import { deleteTodo as deleteTodoAction } from "../../actions/todoActions"

const ConfirmModal = ({
  title, index, modal, toggleModal, deleteTodo
}) => {
  const handleDelete = () => {
    deleteTodo(index)
    toggleModal()
  }

  const handleClose = () => {
    toggleModal()
  }

  return (
    <Modal transparent isVisible={modal}>
      <Container>
        <ModalTitle>Confirm</ModalTitle>

        <ModalText>Are you sure you want to the todo {`"${title}"`}?</ModalText>

        <ActionsContainer>
          <Action onPress={handleClose}>
            <CancelText>Cancel</CancelText>
          </Action>

          <Action delete onPress={handleDelete}>
            <DeleteText>Delete</DeleteText>
          </Action>
        </ActionsContainer>
      </Container>
    </Modal>
  )
}

const mapStateToProps = ({ modal }) => ({ modal })

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModalAction()),
  deleteTodo: index => dispatch(deleteTodoAction(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmModal)

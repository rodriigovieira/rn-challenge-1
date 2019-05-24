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
  title, index, modal, toggleModal, deleteTodo, navigation
}) => {
  const handleDelete = () => {
    deleteTodo(index)
    toggleModal(index)
    navigation.popToTop()
  }

  const handleClose = () => {
    toggleModal(index)
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

const mapStateToProps = state => ({ modal: state.modal.modal })

const mapDispatchToProps = dispatch => ({
  toggleModal: index => dispatch(toggleModalAction(index)),
  deleteTodo: index => dispatch(deleteTodoAction(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmModal)

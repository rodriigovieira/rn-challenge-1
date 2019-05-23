import React from "react"
import Modal from "react-native-modal"

import {
  Container,
  ModalTitle,
  ModalText,
  ActionsContainer,
  Action,
  CancelText,
  DeleteText
} from "./styles"
import TodosContext from "../../context/TodosContext"

const ConfirmModal = ({ title, index, navigation }) => {
  const { state, dispatch } = React.useContext(TodosContext)

  const handleDelete = () => {
    dispatch({
      type: "DELETE_TODO",
      index
    })

    dispatch({ type: "TOGGLE_MODAL" })

    navigation.popToTop()
  }

  const handleClose = () => {
    dispatch({ type: "TOGGLE_MODAL" })
  }

  return (
    <Modal transparent isVisible={state.showModal}>
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

export default ConfirmModal

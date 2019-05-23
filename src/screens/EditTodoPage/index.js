import React from "react"
import { connect } from "react-redux"

import {
  Container,
  PageTitle,
  ErrorContainer,
  ErrorNoChangeText,
  ErrorEmptyText,
  FormContainer,
  TodoTitleInput,
  TodoTextInput,
  SubmitButton,
  SubmitButtonText,
  ButtonsContainer
} from "./styles"
import ConfirmModal from "../../components/ConfirmModal"

import { editTodo as editTodoAction } from "../../actions/todoActions"
import { toggleModal as toggleModalAction } from "../../actions/modalActions"

const EditTodoPage = ({ navigation, editTodo, toggleModal }) => {
  const defaultTodoTitle = navigation.getParam("title", "")
  const defaultTodoText = navigation.getParam("text", "")
  const index = navigation.getParam("index", -1)

  console.trom({
    title: defaultTodoTitle,
    text: defaultTodoText,
    index
  })

  const [todoTitle, setTodoTitle] = React.useState(defaultTodoTitle)
  const [todoText, setTodoText] = React.useState(defaultTodoText)

  const [errorEmpty, setErrorEmpty] = React.useState(false)
  const [errorNoChange, setErrorNoChange] = React.useState(false)

  const handleSubmit = () => {
    setErrorNoChange(false)
    setErrorEmpty(false)

    if (!todoTitle || !todoText) {
      setErrorEmpty(true)

      return
    }

    if (todoTitle === defaultTodoTitle && todoText === defaultTodoText) {
      setErrorNoChange(true)

      return
    }

    // dispatch({
    //   type: "EDIT_TODO",
    //   index,
    //   todo: {
    //     title: todoTitle,
    //     text: todoText,
    //     completed: false
    //   }
    // })

    editTodo(index, {
      title: todoTitle,
      text: todoText,
      completed: false
    })

    navigation.navigate("HomePage")
  }

  const handleDelete = () => {
    toggleModal()
  }

  return (
    <Container>
      <PageTitle>Editing Todo</PageTitle>

      {(errorEmpty || errorNoChange) && (
        <ErrorContainer>
          {errorNoChange && <ErrorNoChangeText>You need to change something.</ErrorNoChangeText>}

          {errorEmpty && <ErrorEmptyText>You need to fill all fields.</ErrorEmptyText>}
        </ErrorContainer>
      )}

      <FormContainer>
        <TodoTitleInput value={todoTitle} onChangeText={setTodoTitle} />

        <TodoTextInput value={todoText} onChangeText={setTodoText} multiline />

        <ButtonsContainer>
          <SubmitButton onPress={handleSubmit}>
            <SubmitButtonText>Edit</SubmitButtonText>
          </SubmitButton>

          <SubmitButton delete onPress={handleDelete}>
            <SubmitButtonText>Delete</SubmitButtonText>
          </SubmitButton>
        </ButtonsContainer>
      </FormContainer>

      <ConfirmModal title={defaultTodoTitle} index={index} navigation={navigation} />
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  editTodo: (index, todo) => dispatch(editTodoAction(index, todo)),
  toggleModal: () => dispatch(toggleModalAction())
})

export default connect(
  null,
  mapDispatchToProps
)(EditTodoPage)

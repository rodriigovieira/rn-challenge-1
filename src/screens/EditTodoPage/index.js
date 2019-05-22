import React from "react"

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

import TodosContext from "../../context/TodosContext"

const EditTodoPage = ({ navigation }) => {
  const { dispatch } = React.useContext(TodosContext)

  const defaultTodoTitle = navigation.getParam("title", "")
  const defaultTodoText = navigation.getParam("text", "")
  const index = navigation.getParam("index", -1)

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

    dispatch({
      type: "EDIT_TODO",
      index,
      todo: {
        title: todoTitle,
        text: todoText,
        completed: false
      }
    })

    navigation.navigate("Home")
  }

  const handleDelete = () => {
    dispatch({
      type: "TOGGLE_MODAL"
    })
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

export default EditTodoPage

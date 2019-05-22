import React from "react"

import {
  Container,
  PageTitle,
  ErrorContainer,
  ErrorEmptyText,
  FormContainer,
  TodoTitleInput,
  TodoTextInput,
  SubmitButton,
  SubmitButtonText
} from "./styles"

import TodosContext from "../../context/TodosContext"

const AddTodoPage = (props) => {
  const { dispatch } = React.useContext(TodosContext)

  const [todoTitle, setTodoTitle] = React.useState("")
  const [todoText, setTodoText] = React.useState("")

  const [errorEmpty, setErrorEmtpy] = React.useState(false)

  const handleSubmit = () => {
    if (!todoTitle || !todoText) {
      setErrorEmtpy(true)

      return
    }

    dispatch({
      type: "ADD_TODO",
      todo: {
        title: todoTitle,
        text: todoText,
        completed: false
      }
    })

    props.navigation.navigate("Home")
  }

  return (
    <Container>
      <PageTitle>Creating Todo</PageTitle>

      {errorEmpty && (
        <ErrorContainer>
          <ErrorEmptyText>You need to fill all fields.</ErrorEmptyText>
        </ErrorContainer>
      )}

      <FormContainer>
        <TodoTitleInput value={todoTitle} onChangeText={setTodoTitle} placeholder="Todo Title" />

        <TodoTextInput
          value={todoText}
          onChangeText={setTodoText}
          multiline
          placeholder="Add the todo text here"
        />

        <SubmitButton onPress={handleSubmit}>
          <SubmitButtonText>Add Todo</SubmitButtonText>
        </SubmitButton>
      </FormContainer>
    </Container>
  )
}

export default AddTodoPage

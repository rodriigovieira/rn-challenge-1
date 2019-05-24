import React from "react"
import { connect } from "react-redux"

import { addTodo as addTodoAction } from "../../actions/todoActions"

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

const AddTodoPage = ({ navigation, addTodo }) => {
  const [todoTitle, setTodoTitle] = React.useState("")
  const [todoText, setTodoText] = React.useState("")

  const [errorEmpty, setErrorEmtpy] = React.useState(false)

  const handleSubmit = () => {
    if (!todoTitle || !todoText) {
      setErrorEmtpy(true)

      return
    }

    addTodo({
      title: todoTitle,
      text: todoText,
      completed: false
    })

    navigation.popToTop()
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

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodoAction(todo))
})

export default connect(
  null,
  mapDispatchToProps
)(AddTodoPage)

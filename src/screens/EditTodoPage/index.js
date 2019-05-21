import React from "react"

import {
  Container,
  PageTitle,
  FormContainer,
  TodoTitleInput,
  TodoTextInput,
  SubmitButton,
  SubmitButtonText,
  ButtonsContainer
} from "./styles"

import TodosContext from "../../context/TodosContext"

const EditTodoPage = (props) => {
  const { dispatch } = React.useContext(TodosContext)

  const defaultTodoTitle = props.navigation.getParam("title", "")
  const defaultTodoText = props.navigation.getParam("text", "")
  const index = props.navigation.getParam("index", -1)

  const [todoTitle, setTodoTitle] = React.useState(defaultTodoTitle)
  const [todoText, setTodoText] = React.useState(defaultTodoText)

  const handleSubmit = () => {
    dispatch({
      type: "EDIT_TODO",
      index,
      todo: {
        title: todoTitle,
        text: todoText,
        completed: false
      }
    })

    props.navigation.navigate("Home")
  }

  const handleDelete = () => {
    dispatch({
      type: "DELETE_TODO",
      index
    })

    props.navigation.navigate("Home")
  }

  return (
    <Container>
      <PageTitle>Editing Todo</PageTitle>

      <FormContainer>
        <TodoTitleInput
          value={todoTitle}
          onChangeText={(todoTitle) => setTodoTitle(todoTitle)}
        />

        <TodoTextInput
          value={todoText}
          onChangeText={(todoText) => setTodoText(todoText)}
          multiline={true}
        />

        <ButtonsContainer>
          <SubmitButton onPress={handleSubmit}>
            <SubmitButtonText>Edit</SubmitButtonText>
          </SubmitButton>

          <SubmitButton delete={true} onPress={handleDelete}>
            <SubmitButtonText>Delete</SubmitButtonText>
          </SubmitButton>
        </ButtonsContainer>
      </FormContainer>
    </Container>
  )
}

export default EditTodoPage

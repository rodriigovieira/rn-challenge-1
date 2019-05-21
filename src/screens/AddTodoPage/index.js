import React from "react"

import {
  Container,
  PageTitle,
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

  const handleSubmit = () => {
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

      <FormContainer>
        <TodoTitleInput
          value={todoTitle}
          onChangeText={(todoTitle) => setTodoTitle(todoTitle)}
          placeholder="Todo Title"
        />

        <TodoTextInput
          value={todoText}
          onChangeText={(todoText) => setTodoText(todoText)}
          multiline={true}
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

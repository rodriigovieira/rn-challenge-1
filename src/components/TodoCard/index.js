import React from "react"
import Reactotron from "reactotron-react-native"

import {
  Container,
  CardTitle,
  CardText,
  ActionsContainer,
  CardAction,
  CardActionText,
  Divider
} from "./styles"

import TodosContext from "../../context/TodosContext"
import ConfirmModal from "../ConfirmModal"

const TodoCard = ({
  title, text, completed, navigation, index
}) => {
  const { state, dispatch } = React.useContext(TodosContext)

  const handleOpenModal = () => {
    dispatch({ type: "TOGGLE_MODAL", index })
  }

  const handleComplete = () => {
    dispatch({
      type: "TOGGLE_TODO",
      index
    })

    navigation.push("Home")
  }

  return (
    <Container
      completed={completed}
      onPress={() => navigation.navigate("EditTodoPage", {
        title,
        text,
        completed,
        index
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

      {/* {Reactotron.log(index)} */}

      {state.showModal && state.index === index && (
        <ConfirmModal title={title} index={index} navigation={navigation} />
      )}
    </Container>
  )
}

export default TodoCard

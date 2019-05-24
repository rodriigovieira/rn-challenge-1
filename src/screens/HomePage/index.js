import React from "react"
import AsyncStorage from "@react-native-community/async-storage"
import { connect } from "react-redux"
import {
  Alert, Button, Platform, ActionSheetIOS
} from "react-native"

import {
  Container, AddTodoButton, AddTodoButtonText, FilterTypeText
} from "./styles"

import {
  populateTodos as populateTodosAction,
  deleteAllTodos as deleteAllTodosAction
} from "../../actions/todoActions"
import {
  showCompleted as showCompletedAction,
  showActive as showActiveAction,
  showAll as showAllAction
} from "../../actions/visibilityActions"

import GetTodoList from "../../selectors/getTodoList"

const HomePage = ({
  populateTodos,
  deleteAllTodos,
  navigation,
  todos,
  showCompleted,
  showActive,
  showAll,
  filter
}) => {
  React.useEffect(() => {
    navigation.setParams({
      showCompleted,
      showActive,
      showAll,
      deleteAllTodos
    })
  }, [])

  React.useEffect(() => {
    AsyncStorage.getItem("@todos")
      .then((localData) => {
        if (localData) populateTodos([...JSON.parse(localData)])
      })
      .catch(() => navigation.popToTop())
  }, [])

  React.useEffect(() => {
    AsyncStorage.setItem("@todos", JSON.stringify(todos))
  }, [todos])

  return (
    <Container contentContainerStyle={{ alignItems: "center" }}>
      <AddTodoButton onPress={() => navigation.navigate("AddTodoPage")}>
        <AddTodoButtonText>Add Todo</AddTodoButtonText>
      </AddTodoButton>

      {(filter === "completed" || filter === "active") && (
        <FilterTypeText>Currently showing only {filter} todos.</FilterTypeText>
      )}

      <GetTodoList navigation={navigation} />
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  populateTodos: todos => dispatch(populateTodosAction(todos)),
  deleteAllTodos: () => dispatch(deleteAllTodosAction()),
  showAll: () => dispatch(showAllAction()),
  showCompleted: () => dispatch(showCompletedAction()),
  showActive: () => dispatch(showActiveAction())
})

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter.show
})

HomePage.navigationOptions = ({ navigation }) => ({
  title: "HomePage",
  headerLeft: null,
  gesturesEnabled: false,
  headerRight: (
    <Button
      title="Filter"
      onPress={
        Platform.OS === "ios"
          ? () => ActionSheetIOS.showActionSheetWithOptions(
            {
              options: ["Cancel", "Active", "Show All", "Completed", "Delete All Todos"],
              destructiveButtonIndex: 4,
              cancelButtonIndex: 0,
              title: "Filter Todos",
              message: "Which type of todo would you like to display?"
            },
            (buttonIndex) => {
              if (buttonIndex === 1) {
                const showActive = navigation.getParam("showActive")

                showActive()
              }

              if (buttonIndex === 2) {
                const showAll = navigation.getParam("showAll")

                showAll()
              }

              if (buttonIndex === 3) {
                const showCompleted = navigation.getParam("showCompleted")

                showCompleted()
              }

              if (buttonIndex === 4) {
                const deleteAllTodos = navigation.getParam("deleteAllTodos")

                deleteAllTodos()
              }
            }
          )
          : () => Alert.alert(
            "Filter",
            "What kind of todos would you like to display?",
            [
              {
                text: "Active",
                onPress: navigation.getParam("showActive")
              },
              {
                text: "Show All",
                onPress: navigation.getParam("showAll")
              },
              {
                text: "Completed",
                onPress: navigation.getParam("showCompleted")
              }
            ],
            { cancelable: true }
          )
      }
    />
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

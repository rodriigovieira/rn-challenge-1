import { createStackNavigator, createAppContainer } from "react-navigation"

import HomePage from "../screens/HomePage"
import AddTodoPage from "../screens/AddTodoPage"
import EditTodoPage from "../screens/EditTodoPage"

const AppNavigator = createStackNavigator({
  Home: HomePage,
  AddTodoPage,
  EditTodoPage
})

export default createAppContainer(AppNavigator)

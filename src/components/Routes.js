import { createStackNavigator, createAppContainer } from "react-navigation"

import HomePage from "../screens/HomePage"
import AddTodoPage from "../screens/AddTodoPage"
import EditTodoPage from "../screens/EditTodoPage"

const AppNavigator = createStackNavigator(
  {
    HomePage,
    AddTodoPage,
    EditTodoPage
  },
  {
    initialRouteName: "HomePage",
    navigationOptions: {
      title: "TodoApp"
    }
  }
)

export default createAppContainer(AppNavigator)

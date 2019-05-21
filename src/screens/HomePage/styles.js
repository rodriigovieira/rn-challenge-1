import styled from "styled-components/native"

const Container = styled.ScrollView`
  background-color: rgba(128, 128, 128, 0.1);
`

const AddTodoButton = styled.TouchableOpacity`
  margin: 20px;
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  width: 200px;
  padding: 10px;
  background-color: darkorange;
`

const AddTodoButtonText = styled.Text`
  text-align: center;
  font-size: 18px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
`

export { Container, AddTodoButton, AddTodoButtonText }

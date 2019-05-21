import styled from "styled-components"

const Container = styled.View`
  align-items: center;
  background-color: rgba(128, 128, 128, 0.1);
  flex: 1;
`

const PageTitle = styled.Text`
  margin: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`

const FormContainer = styled.View`
  background-color: white;
  height: 260px;
  width: 300px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.7);
  padding: 10px;
  align-items: center;
  justify-content: center;
`

const TodoTitleInput = styled.TextInput`
  font-size: 16px;
  margin: 10px;
  background-color: lightgrey;
  border-radius: 8px;
  padding: 5px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.7);
  min-width: 250px;
`

const TodoTextInput = styled(TodoTitleInput)`
  height: 100px;
  padding: 10px;
`

const SubmitButton = styled.TouchableOpacity`
  margin: 10px;
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  width: 200px;
  padding: 10px;
  background-color: darkorange;
  min-width: 250px;
`

const SubmitButtonText = styled.Text`
  text-align: center;
  font-size: 18px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
`

export {
  Container,
  PageTitle,
  FormContainer,
  TodoTitleInput,
  TodoTextInput,
  SubmitButton,
  SubmitButtonText
}

import styled from "styled-components/native"

const Container = styled.TouchableOpacity`
  margin: 15px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.7);
  align-items: center;
  padding: 10px;
  width: 300px;
  opacity: ${props => (props.completed ? 0.5 : 1)};
  background-color: white;
`

const CardTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin: 5px;
`

const CardText = styled.Text`
  font-size: 16px;
  margin: 5px;
`

const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 8px;
`

const CardAction = styled.TouchableOpacity`
  margin: 0 3px;
  padding: 10px;
`

const CardActionText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`

const Divider = styled.View`
  height: 30px;
  width: 2px;
  margin: 0 10px;
  background-color: lightgrey;
`

export {
  Container, CardTitle, CardText, ActionsContainer, CardAction, Divider, CardActionText
}

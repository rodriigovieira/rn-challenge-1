import styled from "styled-components/native"

const Container = styled.View`
  align-items: center;
  margin: auto;
  padding: 8px;
  border: 1px solid black;
  border-radius: 8px;
  height: 180px;
  width: 80%;
  background-color: white;
`

const ModalTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 8px;
`

const ModalText = styled.Text`
  font-size: 16px;
  margin: 10px;
`

const ActionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 8px;
  width: 100%;
`

const Action = styled.TouchableOpacity`
  padding: 10px;
  margin: 0 4px;
  background-color: ${props => (props.delete ? "red" : "darkorange")};
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.7);
`

const CancelText = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
`

const DeleteText = styled(CancelText)``

export {
  Container, ModalTitle, ModalText, ActionsContainer, Action, CancelText, DeleteText
}

const modalReducer = (state = { modal: false, index: -1 }, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return { modal: !state.modal, index: action.index }
    default:
      return state
  }
}

export default modalReducer

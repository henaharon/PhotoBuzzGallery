import TOGGLE_GRID from './picturesActionsTypes'

const initialState = {
  grid: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_GRID: {
      return {
        ...state,
        grid: action.data
      }
    }
    default:
      return state
  }
}

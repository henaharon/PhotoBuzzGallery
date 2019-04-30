import { ADD_RESULTS, LOADING } from './homePageActionsTypes'

const initialState = {
  results: {},
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESULTS:
      return {
        ...state,
        results: action.data
      }
    case LOADING:
      return {
        ...state,
        loading: action.data.loading
      }
    default:
      return state
  }
}

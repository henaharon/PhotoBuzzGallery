import { ADD_TO_FAVORITES, REMOVE_FROM_FAV, INIT_LOAD } from './favoritesActionsTypes'

const initialState = {
  favList: [],
  initLoad: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FROM_FAV: {
      const newFav = state.favList.filter(i => i.id !== action.data.id)
      return {
        ...state,
        favList: newFav
      }
    }
    case ADD_TO_FAVORITES:
      if (action.data.img)
        return {
          ...state,
          favList: [...state.favList, action.data.img]
        }
      return state
    case INIT_LOAD: {
      return {
        ...state,
        initLoad: false
      }
    }
    default:
      return state
  }
}

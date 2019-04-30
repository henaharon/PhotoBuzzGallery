import { ADD_TO_FAVORITES, REMOVE_FROM_FAV, INIT_LOAD } from './favoritesActionsTypes'

const addToFav = img => ({ type: ADD_TO_FAVORITES, data: { img } })
const removeFromFav = id => ({ type: REMOVE_FROM_FAV, data: { id } })
const initLoadChanged = () => ({ type: INIT_LOAD })

const handleAddToFav = img => async dispatch => {
  dispatch(addToFav(img))
}
const handleRemoveFromFav = id => async dispatch => {
  dispatch(removeFromFav(id))
}

const handleInitLoad = () => async dispatch => {
  dispatch(initLoadChanged())
}

export default {
  handleAddToFav,
  handleRemoveFromFav,
  handleInitLoad,
  addToFav,
  removeFromFav,
  initLoadChanged
}

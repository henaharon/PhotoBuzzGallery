import { combineReducers } from 'redux'
import PicturesListReducer from './components/picturesList/picturesListReducer'
import HomePageReducer from './components/homePage/homePageReducer'
import FavoritesReducer from './components/favorites/favoritesReducer'

export default combineReducers({
  PicturesList: PicturesListReducer,
  HomePage: HomePageReducer,
  Favorites: FavoritesReducer
})

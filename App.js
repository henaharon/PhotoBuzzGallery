import HomePage from './src/components/homePage/homePage'
import Favorites from './src/components/favorites/favorites'
import PicZoom from './src/components/picturesList/picZoom'
import { createAppContainer, createStackNavigator } from 'react-navigation'

const MainNavigator = createStackNavigator(
  {
    HomePage: { screen: HomePage },
    Favorites: { screen: Favorites },
    PicZoom: { screen: PicZoom }
  },
  {
    initialRouteName: 'HomePage'
  },
  {
    headerLayoutPreset: 'center'
  }
)

const App = createAppContainer(MainNavigator)

export default App

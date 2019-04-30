import React, { Component } from 'react'
import styles from './styles'
import { connect } from 'react-redux'
import PicActions from '../picturesList/picturesActions'
import HomePageActions from './homePageActions'
import FavoritesActions from '../favorites/favoritesActions'
import PropTypes from 'prop-types'
import ConnectedPicList from '../picturesList/picturesList'
import { View, TouchableOpacity, Image } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'

const mapStateToProps = ({ HomePage, Favorites }) => {
  return {
    loading: HomePage.loading,
    initLoad: Favorites.initLoad
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      PicActions: bindActionCreators(PicActions, dispatch),
      HomePageActions: bindActionCreators(HomePageActions, dispatch),
      FavoritesActions: bindActionCreators(FavoritesActions, dispatch)
    }
  }
}
class HomePage extends Component {
  state = {
    searchText: ''
  }

  updateSearch = searchText => {
    // eslint-disable-next-line no-invalid-this
    this.setState({ searchText })
  }

  componentDidMount() {
    const { initLoad } = this.props
    initLoad && this.loadFavFromStorage()
    this.handleSearchSubmission(this.state.searchText)
  }
  async loadFavFromStorage() {
    const { handleAddToFav, handleInitLoad } = this.props.actions.FavoritesActions
    const keys = await AsyncStorage.getAllKeys()
    const stores = await AsyncStorage.multiGet(keys)
    stores.forEach(result => {
      handleAddToFav(JSON.parse(result[1]))
    })
    handleInitLoad()
  }
  showLoading() {
    return <Image source={require('../../images/loaderGif.gif')} style={styles.loading} />
  }
  async handleSearchSubmission(text) {
    const { handleSearch, handleLoading } = this.props.actions.HomePageActions
    this.setState({ searchText: text })
    handleLoading(true)
    await handleSearch(text)
    handleLoading(false)
  }
  static navigationOptions = ({ navigation }) => ({
    title: 'Photo Bazz Gallery',
    headerStyle: {
      backgroundColor: '#fad159'
    },
    headerTitleStyle: {
      fontSize: 25,
      left: 50,
      color: '#222222'
    },
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
        <Image
          source={require('../../images/Circle-icons-heart.svg.png')}
          style={styles.favorite}
        />
      </TouchableOpacity>
    )
  })
  render() {
    const { loading } = this.props
    return (
      <View>
        <SearchBar
          placeholder="Search..."
          onChangeText={text => this.setState({ searchText: text })}
          onSubmitEditing={() => this.handleSearchSubmission(this.state.searchText)}
          value={this.state.searchText}
        />
        {loading ? (
          this.showLoading()
        ) : (
          <View style={styles.container}>
            <ConnectedPicList navigation={this.props.navigation} />
          </View>
        )}
      </View>
    )
  }
}

HomePage.propTypes = {
  handleSearch: PropTypes.func,
  actions: PropTypes.objectOf(PropTypes.object),
  loading: PropTypes.bool,
  initLoad: PropTypes.bool,
  navigation: PropTypes.object,
  handleInitLoad: PropTypes.func,
  handleAddToFav: PropTypes.func,
  FavoritesActions: PropTypes.objectOf(PropTypes.func)
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

import React, { Component } from 'react'
import styles from './styles'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import FavoritesActions from './favoritesActions'
import { View, Image, ScrollView } from 'react-native'
import ConnectedPicturesList from '../picturesList/picturesList'

const mapStateToProps = ({ Favorites }) => {
  return {
    favList: Favorites.favList,
    initLoad: Favorites.initLoad
  }
}
class Favorites extends Component {
  showLoading() {
    return <Image source={require('../../images/loaderGif.gif')} style={styles.loading} />
  }
  static navigationOptions = () => ({
    title: 'Favorites',

    headerStyle: {
      backgroundColor: '#fad159'
    },

    headerTitleStyle: {
      fontSize: 25,
      left: 55,
      color: '#222222'
    },
    headerTintColor: '#222222'
  })
  render() {
    const fav = true
    return (
      <View>
        <ScrollView>
          <ConnectedPicturesList fav={fav} nav={this.props.navigation} />
        </ScrollView>
      </View>
    )
  }
}

Favorites.propTypes = {
  navigation: PropTypes.object
}
export default connect(
  mapStateToProps,
  FavoritesActions
)(Favorites)

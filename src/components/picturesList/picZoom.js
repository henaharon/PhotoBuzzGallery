import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import { connect } from 'react-redux'
import { View, TouchableOpacity, Image } from 'react-native'
import FavoritesActions from '../favorites/favoritesActions'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'

const mapStateToProps = ({ Favorites }) => {
  return {
    favList: Favorites.favList
  }
}

class PicZoom extends Component {
  static navigationOptions = () => ({
    title: 'Photo Bazz Gallery',
    headerStyle: {
      backgroundColor: '#fad159'
    },
    headerTitleStyle: {
      fontSize: 25,
      left: 45,
      color: '#222222'
    },
    headerTintColor: '#222222'
  })
  async updateStorage(imgInfo, isFav) {
    if (!isFav) {
      await AsyncStorage.setItem(`img${imgInfo.id}`, JSON.stringify(imgInfo))
    } else {
      await AsyncStorage.removeItem(`img${imgInfo.id}`)
    }
  }

  handleAddRemove(isFav) {
    const { handleAddToFav, handleRemoveFromFav } = this.props
    const item = this.props.navigation.getParam('item', { item: { id: -111 } })
    const id = item.id
    const imgInfo = item
    isFav ? handleRemoveFromFav(id) : handleAddToFav(imgInfo)
    this.updateStorage(imgInfo, isFav)
  }
  checkFav() {
    const { favList } = this.props
    const item = this.props.navigation.getParam('item', { item: { id: -111 } })
    const id = item.id
    for (let i = 0; i < favList.length; ++i) if (favList[i].id === id) return true

    return false
  }
  render() {
    const item = this.props.navigation.getParam('item', { item: { id: -111 } })
    const img = item.largeImageURL
    const isFav = this.checkFav()
    return (
      <View>
        <Image source={{ uri: img }} style={styles.fullImg} />
        {!isFav && (
          <TouchableOpacity style={styles.like} onPress={() => this.handleAddRemove(isFav)}>
            <Icon name="heart" size={50} color="#000000" />
          </TouchableOpacity>
        )}
        {isFav && (
          <TouchableOpacity style={styles.like} onPress={() => this.handleAddRemove(isFav)}>
            <Icon name="trash" size={50} color="#000000" />
          </TouchableOpacity>
        )}
      </View>
    )
  }
}

PicZoom.propTypes = {
  navigation: PropTypes.object,
  favList: PropTypes.arrayOf(PropTypes.object),
  handleRemoveFromFav: PropTypes.func,
  handleAddToFav: PropTypes.func
}

export default connect(
  mapStateToProps,
  FavoritesActions
)(PicZoom)

import React from 'react'
import { Image, FlatList, TouchableOpacity, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import styles from './styles'

const GridImage = props => {
  return (
    <View style={styles.center}>
      <FlatList
        data={props.data}
        numColumns={3}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ flexGrow: 5 }}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => props.navigation.navigate('PicZoom', { item })}>
              <Image style={styles.G_image} source={{ uri: item.previewURL }} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}
GridImage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  navigation: PropTypes.object
}
export default withNavigation(GridImage)

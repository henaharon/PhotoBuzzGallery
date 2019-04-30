import React from 'react'
import { Image, FlatList, TouchableOpacity, Text, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import styles from './styles'

const ListImage = props => {
  return (
    <View>
      <FlatList
        data={props.data}
        numColumns={1}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ flexGrow: 2 }}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.L_container}
              onPress={() => props.navigation.navigate('PicZoom', { item })}
            >
              <Image style={styles.L_image} source={{ uri: item.previewURL }} />
              <View style={styles.L_detailsContainer}>
                <Text style={styles.L_title}>{item.tags}</Text>
                <Text>
                  Views: {item.views} Likes: {item.likes}
                </Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}
ListImage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  navigation: PropTypes.object
}
export default withNavigation(ListImage)

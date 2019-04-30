import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import PicActions from './picturesActions'
import { bindActionCreators } from 'redux'
import GridImage from '../picturesList/picGridItem'
import ListImage from '../picturesList/picListItem'

const mapStateToProps = ({ HomePage, PicturesList, Favorites }) => {
  return {
    results: HomePage.results,
    favList: Favorites.favList,
    grid: PicturesList.grid
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      PicActions: bindActionCreators(PicActions, dispatch)
    }
  }
}
export class PicturesList extends Component {
  constructor(props) {
    super(props)
    this.swapView = this.swapView.bind(this)
    this.renderList = this.renderList.bind(this)
  }
  swapView(newGrid) {
    const { handleToggleGrid } = this.props.actions.PicActions
    const { grid } = this.props
    if (newGrid === grid) return
    handleToggleGrid(newGrid)
  }
  renderList(fav, grid) {
    const { results, favList } = this.props
    if (fav) {
      if (favList.length) {
        return (
          <GridImage style={styles.container} data={favList} navigation={this.props.navigation} />
        )
      }
      return <Text style={styles.noResult}>No favorites yet </Text>
    }
    if (grid) {
      if (results.data)
        if (results.data.hits.length) {
          return (
            <GridImage
              style={styles.container}
              data={results.data.hits}
              navigation={this.props.navigation}
            />
          )
        } else return <Text style={styles.noResult}>No Results Found</Text>
    } else if (results.data)
      if (results.data.hits.length) {
        return (
          <ListImage
            style={styles.container}
            data={results.data.hits}
            navigation={this.props.navigation}
          />
        )
      } else return <Text style={styles.noResult}>No Results Found</Text>

    return <Text style={styles.noResult}>No Results Found</Text>
  }
  render() {
    const { grid, fav } = this.props
    const style = grid || fav ? styles.grid : styles.list
    const switchActiveGrid = grid || fav ? styles.switchActive : null
    const switchActiveList = grid ? null : styles.switchActive
    return (
      <View>
        {!fav && (
          <View style={styles.viewSwitch}>
            <TouchableOpacity onPress={() => this.swapView(true)} style={styles.switchItem}>
              <Text style={[styles.center, switchActiveGrid]}>Grid View</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.swapView(false)} style={styles.switchItem}>
              <Text style={[styles.center, switchActiveList]}>List View</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={style}>{this.renderList(fav, grid)}</View>
      </View>
    )
  }
}

PicturesList.propTypes = {
  results: PropTypes.object,
  grid: PropTypes.bool,
  favList: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.objectOf(PropTypes.object),
  navigation: PropTypes.object,
  fav: PropTypes.bool
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PicturesList)

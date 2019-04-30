import { StyleSheet, Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    width: SCREEN_WIDTH
  },
  like: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center'
  },
  loading: {
    alignSelf: 'center',
    width: 250,
    height: 250,
    top: 125
  },
  favorite: {
    height: 25,
    width: 25,
    right: 10
  },
  G_image: {
    width: 125,
    height: 125
  },
  L_container: {
    flex: 1,
    flexDirection: 'row'
  },
  L_image: {
    width: 75,
    height: 75
  },
  line: {
    width: 500,
    marginBottom: 5,
    marginTop: 5,
    height: 70
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: SCREEN_WIDTH,
    height: '100%'
  },
  list: {
    height: '100%',
    width: SCREEN_WIDTH
  },
  viewSwitch: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: 32,
    borderWidth: 1,
    borderColor: '#fce8ab'
  },
  switchItem: {
    width: '50%',
    height: 30
  },
  switchActive: {
    backgroundColor: '#fce8ab',
    color: '#222222',
    height: 30
  },
  center: {
    textAlign: 'center'
  },
  noResult: {
    fontSize: 25,
    textAlign: 'center',
    width: 350,
    height: 100,
    top: 50,
    left: 5
  },
  fullImg: {
    width: '97%',
    height: '90%',
    alignSelf: 'center',
    top: 10
  }
})
export default styles

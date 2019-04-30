import { ADD_RESULTS, LOADING } from './homePageActionsTypes'

const addResults = data => ({ type: ADD_RESULTS, data: { data } })
const toggleLoading = loading => ({ type: LOADING, data: { loading } })

const handleLoading = loading => async dispatch => {
  dispatch(toggleLoading(loading))
}
const handleSearch = text => async dispatch => {
  await fetch(
    `https://pixabay.com/api/?key=12269234-ec61d143011999a134c2b1029&q=${text}&image_type=photo&pretty=true`
  )
    .then(res => res.json())
    .then(async data => {
      dispatch(addResults(data))
    })
    .catch(err => {
      throw new Error(`"Error": ${err}`)
    })
}

export default {
  handleSearch,
  handleLoading,
  addResults,
  toggleLoading
}

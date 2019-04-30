import TOGGLE_GRID from './picturesActionsTypes'

const toggleGrid = grid => ({ type: TOGGLE_GRID, data: grid })

const handleToggleGrid = grid => async dispatch => {
  dispatch(toggleGrid(grid))
}

export default {
  handleToggleGrid,
  toggleGrid
}

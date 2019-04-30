import TOGGLE_GRID from '../../src/components/picturesList/picturesActionsTypes'
import PicturesListReducer from '../../src/components/picturesList/picturesListReducer'

describe('Pictures List Reducer', () => {
  it('should return the initial state', () => {
    expect(PicturesListReducer(undefined, {})).toEqual({
      grid: true
    })
  })

  it('should handle TOGGLE_GRID', () => {
    expect(
      PicturesListReducer(
        {},
        {
          type: TOGGLE_GRID,
          payload: { grid: true }
        }
      )
    ).toEqual({ grid: false })
    expect(
      PicturesListReducer(
        {},
        {
          type: TOGGLE_GRID,
          payload: { grid: false }
        }
      )
    ).toEqual({ grid: true })
  })
})

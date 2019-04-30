import PicturesActions from '../../src/components/picturesList/picturesActions'

describe('Pictures List functionality', () => {
  it('should create an action with the correct type', () => {
    expect(PicturesActions.toggleGrid().type).toEqual('TOGGLE_GRID')
  })
})
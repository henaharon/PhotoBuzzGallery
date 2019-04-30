import FavoritesActions from '../../src/components/favorites/favoritesActions'

describe('Favorites List functionality', () => {
  it('should create an action with the correct type', () => {
    expect(FavoritesActions.addToFav().type).toEqual('ADD_TO_FAVORITES')
    expect(FavoritesActions.removeFromFav().type).toEqual('REMOVE_FROM_FAV')
    expect(FavoritesActions.initLoadChanged().type).toEqual('INIT_LOAD')
  })
})

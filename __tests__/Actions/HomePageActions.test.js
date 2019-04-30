import HomePageActions from '../../src/components/homePage/homePageActions'

describe('HomePageActions functionality', () => {
  it('should create an action with the correct type', () => {
    expect(HomePageActions.addResults().type).toEqual('ADD_RESULTS')
    expect(HomePageActions.toggleLoading().type).toEqual('LOADING')
  })
})

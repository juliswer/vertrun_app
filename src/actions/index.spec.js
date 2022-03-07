import * as actions from './index'

describe('todo actions', () => {
  it('setVisibilityFilter sets the necessary filters to search an specific month', () => {
    expect(actions.setVisibilityFilter('Filter the months')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

})

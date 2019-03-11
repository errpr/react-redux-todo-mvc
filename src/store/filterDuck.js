export const VISIBILITY_FILTERS = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// Actions
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// Reducers
const filterReducer = (state = VISIBILITY_FILTERS.SHOW_ALL, action) => {
  const { payload } = action
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return payload.filter
    default:
      return state
  }
}

// Action Creators
export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: {
    filter
  }
})

export default filterReducer

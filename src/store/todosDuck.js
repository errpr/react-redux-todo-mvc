// Actions
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const INCREMENT_ID = 'INCREMENT_ID'

// Reducers
export const idReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_ID:
      return state + 1
    default:
      return state
  }
}

const todoReducer = (state, action) => {
  const { payload } = action
  if (payload.id !== state.id) {
    return state
  }
  switch (action.type) {
    case REMOVE_TODO:
      return
    case TOGGLE_TODO:
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todosReducer = (state = [], action) => {
  const { payload } = action
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: payload.text,
          id: payload.id,
          completed: false
        }
      ]
    case REMOVE_TODO:
      return state.filter(todo => todoReducer(todo, action))
    case TOGGLE_TODO:
      return state.map(todo => todoReducer(todo, action))
    default:
      return state
  }
}

// Action Creators
export const addTodo = text => (dispatch, getState) => {
  const id = getState().nextId
  dispatch({ type: INCREMENT_ID })
  dispatch({
    type: ADD_TODO,
    payload: {
      text,
      id
    }
  })
}

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: {
    id
  }
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
})

export default todosReducer

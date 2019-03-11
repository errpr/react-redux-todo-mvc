// Actions
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

// Reducers
const todosReducer = (state = [], action) => {
  const { payload } = action
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: payload.text,
          completed: false
        }
      ]
    case REMOVE_TODO:
      return state.filter((todo, index) => index !== payload.index)
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === payload.index) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    default:
      return state
  }
}

// Action Creators
export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    text
  }
})

export const removeTodo = index => ({
  type: REMOVE_TODO,
  payload: {
    index
  }
})

export const toggleTodo = index => ({
  type: TOGGLE_TODO,
  payload: {
    index
  }
})

export default todosReducer

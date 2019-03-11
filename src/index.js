import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { combineReducers, createStore } from 'redux'
import visibilityFilter from './store/filterDuck'
import todos from './store/todosDuck'
import { Provider } from 'react-redux'

const store = createStore(
  combineReducers({
    visibilityFilter,
    todos
  })
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import visibilityFilter from './store/filterDuck'
import todos from './store/todosDuck'
import { Provider } from 'react-redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    visibilityFilter,
    todos
  }),
  undefined,
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

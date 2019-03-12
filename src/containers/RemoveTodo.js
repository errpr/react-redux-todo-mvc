import React from 'react'
import { connect } from 'react-redux'
import { removeTodo } from '../store/todosDuck'

const RemoveTodo = ({ id, removeTodo }) => {
  return <button onClick={() => removeTodo(id)}>x</button>
}

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: id => dispatch(removeTodo(id))
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(RemoveTodo)

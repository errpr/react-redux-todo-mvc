import React from 'react'
import { connect } from 'react-redux'
import { removeTodo } from '../store/todosDuck'
import PropTypes from 'prop-types'

const RemoveTodo = ({ id, removeTodo }) => {
  return <button onClick={() => removeTodo(id)}>x</button>
}

RemoveTodo.propTypes = {
  id: PropTypes.number.isRequired,
  removeTodo: PropTypes.func.isRequired
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

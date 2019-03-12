import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import RemoveTodo from '../containers/RemoveTodo'

const StyledTodo = styled.li`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`

const Todo = ({ onClick, id, completed, text }) => (
  <StyledTodo onClick={onClick} completed={completed}>
    {text}
    <RemoveTodo id={id} />
  </StyledTodo>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo

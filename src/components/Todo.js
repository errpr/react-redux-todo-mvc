import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTodo = styled.li`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`

const Todo = ({ onClick, completed, text }) => (
  <StyledTodo onClick={onClick} completed={completed}>
    {text}
  </StyledTodo>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo

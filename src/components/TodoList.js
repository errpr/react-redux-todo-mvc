import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import styled from 'styled-components'

const StyledTodoList = styled.ul``

const TodoList = ({ todos, onTodoClick }) => {
  const todoItems = todos.map((todo, index) => (
    <Todo key={index} {...todo} onClick={() => onTodoClick(todo.id)} />
  ))

  return <StyledTodoList>{todoItems}</StyledTodoList>
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default TodoList

import { connect } from 'react-redux'
import { VISIBILITY_FILTERS } from '../store/filterDuck'
import { toggleTodo } from '../store/todosDuck'
import TodoList from '../components/TodoList.js'

const mapStateToProps = state => {
  const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VISIBILITY_FILTERS
  // eslint-disable-next-line
  switch (state.visibilityFilter) {
    case SHOW_ALL:
      return { todos: state.todos }
    case SHOW_COMPLETED:
      return { todos: state.todos.filter(todo => !!todo.completed) }
    case SHOW_ACTIVE:
      return { todos: state.todos.filter(todo => !todo.completed) }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: index => dispatch(toggleTodo(index))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

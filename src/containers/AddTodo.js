import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../store/todosDuck'
import PropTypes from 'prop-types'

class AddTodo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ text: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    if (!this.state.text.trim()) {
      return
    }

    this.props.addTodo(this.state.text)
    this.setState({ text: '' })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button type='submit'>Add Todo</button>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text))
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(AddTodo)

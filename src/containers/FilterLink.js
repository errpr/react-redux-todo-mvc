import { connect } from 'react-redux'
import { setVisibilityFilter } from '../store/filterDuck'
import Link from '../components/Link.js'

const mapStateToProps = (state, ownProps) => {
  return { active: state.visibilityFilter === ownProps.filter }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

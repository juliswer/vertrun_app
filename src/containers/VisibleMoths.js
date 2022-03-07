import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (months, filter) => {
  switch (filter) {
    case VisibilityFilters.ULTIMATE_MONTH:
      return months.filter(t => t.month === 'ultimate')
    case VisibilityFilters.ANTEULTIMATE_MONTH:
      return months.filter(t => t.month === 'ante-ultimate')
    case VisibilityFilters.ANTEPENULTIMATE_MONTH:
      return months.filter(t => t.month === 'ante-penultimate')
    case VisibilityFilters.LAST_THREE_MONTHS:
        return months
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)

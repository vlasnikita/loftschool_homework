import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import { request, success, failure } from '../actions/shows'

const isFetching = handleActions({
	[request]: () => true,
	[success]: () => false,
	[failure]: () => false
}, false)

const show = handleActions({
	[success]: (_, action) => action.payload
}, [])

const error = handleActions({
	[failure]: (_, action) => action.payload
}, null)

export default combineReducers({
	isFetching,
	show,
	error
})
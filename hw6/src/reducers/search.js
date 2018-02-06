import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import { request, success, failure } from '../actions/search'

const isFetching = handleActions({
	[request]: () => true,
	[success]: () => false,
	[failure]: () => false
}, false)

const result = handleActions({
	[success]: (_, action) => action.payload
}, [])

const error = handleActions({
	[failure]: (_, action) => action.payload
}, null)

export default combineReducers({
	isFetching,
	result,
	error
})
import { createActions } from 'redux-actions'

const { search: { request, success, failure } } = createActions({
	SEARCH: {
		REQUEST: undefined,
		SUCCESS: result => result,
		FAILURE: undefined
	}
}, { namespace: '_' })

export { request, success, failure }
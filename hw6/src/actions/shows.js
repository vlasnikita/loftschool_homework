import { createActions } from 'redux-actions'

const { show: { request, success, failure } } = createActions({
	SHOW: {
		REQUEST: value => value,
		SUCCESS: show => show,
		FAILURE: undefined
	}
}, { namespace: '_' })

export { request, success, failure }
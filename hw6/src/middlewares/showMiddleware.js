import { show } from '../api'
import { request, success, failure } from '../actions/shows'

export default store => next => action => {

    if(action.type === request.toString()) 
        show(action.payload)
            .then(show => store.dispatch(success(show)))
            .catch(error => store.dispatch(failure(error)))

    return next(action)
}
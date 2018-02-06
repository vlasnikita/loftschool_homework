import { search } from '../api'
import { request, success, failure } from '../actions/search'

export default store => next => action => {

    if(action.type === request.toString()){
        search(action.payload)
            .then(result => store.dispatch(success(result)))
            .catch(error => store.dispatch(failure(error)))
    }
    
    return next(action)
}
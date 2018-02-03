import { combineReducers } from 'redux';

import budget from './budget'
import farm from './farm'
import market from './market'

export default combineReducers({
    budget,
    farm,
    market
})
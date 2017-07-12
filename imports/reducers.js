import { combineReducers } from 'redux'

import {
	REQUEST_ANNOTATIONS,
	RECEIVE_ANNOTATIONS
} from './actions'

function annotations(
	state = {
		isFetching: false,
		didInvalidate: false,
		items: []
	},
	action
){
	switch(action.type){
		case REQUEST_ANNOTATIONS:
			return Object.assign({}, state, {
				isFetching: true
			})
		
		case RECEIVE_ANNOTATIONS:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.annotations,
				lastUpdated: action.receivedAt
			})
		
		default:
			return state
	}
}

const rootReducer = combineReducers({
	annotations
})

export default rootReducer

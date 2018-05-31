import { FETCH_USERS, SET_EMAIL, GET_EMAIL, SAVE_UUID } from '../actions/types';

const INITIAL_STATE = {
	email: '',
	uuid: '',
    details: []
};

export default function(state = INITIAL_STATE, action) {

	switch(action.type) {
		case FETCH_USERS:
			return {...state, details: action.payload.data};
		case SET_EMAIL:
			return {...state, email: action.payload};
		case SAVE_UUID:
			return {...state, uuid: action.payload};
		case GET_EMAIL:
			return state;
		default:
			return state;
	}

} 
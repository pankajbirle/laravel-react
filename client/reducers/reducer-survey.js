import { GET_SURVEY, SAVE_SURVEY, GET_REWARD } from '../actions/types';

const INITIAL_STATE = {
    answers: {},
	coupon: ''
};

export default function(state = INITIAL_STATE, action) {

	switch(action.type) {
		case SAVE_SURVEY:
			return {...state, answers: action.payload};
		case GET_SURVEY:
			return state;
		case GET_REWARD:
			return {...state, coupon: action.payload.data};
		default:
			return state;
	}

} 
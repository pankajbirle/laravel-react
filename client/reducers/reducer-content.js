import { FETCH_CONTENT } from '../actions/types';

const INITIAL_STATE = {
	slide1: undefined,
	slide2: undefined,
	slide3: undefined
};

export default function(state = INITIAL_STATE, action) {

	switch(action.type) {
		case FETCH_CONTENT:
			return true
		default:
			return state;
	}

}
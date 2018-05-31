import { combineReducers } from 'redux';
import ContentReducer from './reducer-content';
import UserReducer from './reducer-users';
import SurveyReducer from './reducer-survey';

const rootReducer = combineReducers({
	user: UserReducer,
	survey: SurveyReducer
});

export default rootReducer;
import { combineReducers } from 'redux';
import ContentReducer from './reducer-content';
import UserReducer from './reducer-users';
import SurveyReducer from './reducer-survey';
import {reducer as toastrReducer} from 'react-redux-toastr'

const rootReducer = combineReducers({
	user: UserReducer,
	survey: SurveyReducer,
    toastr: toastrReducer
});

export default rootReducer;
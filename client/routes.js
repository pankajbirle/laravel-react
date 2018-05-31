import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import CaptureEmail from './components/captureEmail';
import Questions from './components/questions';
import Video from './components/video';
import Record from './components/record';
import Thankyou from './components/thankyou';
import Language from './components/language';
import TermCondition from './components/termCondition';
 
export default (
	<Route path='/' component={App} >
		<IndexRoute component={Language} />
		<Route path='/' component={Language} ></Route>
		<Route path='questions' component={Questions} ></Route>
		<Route path='termCondition' component={TermCondition} ></Route>
		<Route path='video' component={Video} ></Route>
		<Route path='record' component={Record} ></Route>
		<Route path='thankyou' component={Thankyou} ></Route>
	</Route>
);
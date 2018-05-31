import {polyfill} from 'es6-promise';
polyfill(); // apply promise polyfill -- 

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import {Router, hashHistory} from 'react-router';
import '../css/variable.scss';

import routes from './routes';
import promise from 'redux-promise';
import ReduxToastr from 'react-redux-toastr';

import App from './components/app';

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
	function(m,key,value) {
	  vars[key] = value;
	});
	return vars;
}

const view = getUrlVars()["view"];

const createStoreWithMiddleware = applyMiddleware(
	promise
)(createStore);

ReactDOM.render( 
	<Provider store={createStoreWithMiddleware(reducers)}>
		<div>
		<Router history={hashHistory} routes={routes} />
		<ReduxToastr
			timeOut={4000}
			newestOnTop={false}
			preventDuplicates
			position="top-left"
			transitionIn="fadeIn"
			transitionOut="fadeOut"
			progressBar/>
		</div>
	</Provider>, application);


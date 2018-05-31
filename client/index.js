import {polyfill} from 'es6-promise';
polyfill(); // apply promise polyfill -- 

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import {Router, hashHistory} from 'react-router'; 

import routes from './routes';
import promise from 'redux-promise';

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
		<Router history={hashHistory} routes={routes} />
	</Provider>, application);


import React, { Component } from 'react';
import classNames from 'classnames';
import {Link, browserHistory } from 'react-router';
import Header from './header';
import TopBand from './topband';
import uuidV1 from 'uuid/v1';
import {connect} from 'react-redux';
import { saveUUID } from '../actions/users';
import {setCookie, getCookie} from './helpers';

class App extends Component {  

	constructor(){
		super(); 
	}

	componentWillMount(){

		//set the UUID for the user ---
		const storedUUID = getCookie('meshh-uuid');
		let uuid;

		if(storedUUID==''){
			uuid = uuidV1();
			setCookie('meshh-uuid', uuid, 365);
		}else{
			uuid = storedUUID;
		}

		this.props.saveUUID(uuid);
	}

	render(){  
		
		return ( 
			<div>
				<Header />
				<div className="contentWrapper">
					{React.cloneElement(this.props.children, {  })}
				</div>
		    </div>
		) 
	}
}

function mapStateToProps(state){
	return { 
		state
	}
}

export default connect(mapStateToProps, { saveUUID })(App);

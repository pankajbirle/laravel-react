import React, { Component } from 'react';
import classNames from 'classnames';
import {Link, browserHistory } from 'react-router';

import {connect} from 'react-redux';
import { getUser, setEmail, getEmail } from '../actions/users';

class CaptureEmail extends Component {  

	constructor(){
		super(); 
		this.state = {
			email: '',
			animate:false,
			loading: false
		}
	}

	componentWillMount(){
		this.props.getEmail();
		
		setTimeout(()=>{
			this.setState({ animate:true});
		},500);
	}

	componentWillReceiveProps(next){
		if(next.email != this.state.email) this.setState({ email : next.state.user.email });
	}
	
	saveEmail(e){
		e.preventDefault();
		this.setState({loading: true});
		this.props.setEmail(this.state.email);
		setTimeout(()=>{
			this.props.history.replace('/questions');
		},1000);
	}

	handleEmailInput(e){
		e.preventDefault();
		this.setState({ email: e.currentTarget.value });
	} 

	render(){  

		const loading = classNames('spinner',{show: this.state.loading});
		const submitBtn = classNames('btn saveEmail', {show: !this.state.loading});

		return (  
			<section className="slide slide_1">
	        		<div className="inner">
						<p>Enter your email address in the box below to access our high speed content.</p>
			        	<form className="search-bar" onSubmit={this.saveEmail.bind(this)}>
							<input type="email" required ref="inputEmail" className="inputEmail" onChange={this.handleEmailInput.bind(this)} value={this.state.email} />
							<button className={submitBtn} >Get Started</button>
						</form>

						<div className={loading} >
							<div className="bounce1"></div>
							<div className="bounce2"></div>
							<div className="bounce3"></div>
						</div>
		        	</div> 
	        </section>
		) 
	}
}

function mapStateToProps(state){
	return { 
		state
	}
}

export default connect(mapStateToProps, { getUser, setEmail, getEmail })(CaptureEmail);
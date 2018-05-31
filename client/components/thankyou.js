import React, { Component } from 'react';
import classNames from 'classnames';
import {Link, browserHistory } from 'react-router';
import ReactPlayer from 'react-player';

import {connect} from 'react-redux';
import {getReward} from '../actions/survey';

import Config from '../surveyConfig';
import langs from '../localization';

class Thankyou extends Component {  

    /* 
	|--------------------------------------------------------------------------
	| constructor
	|--------------------------------------------------------------------------
	*/
	constructor(){
		super();
		this.state = {
			animate:false,
			loading: false,
			answers: []
		}
	}

    /* 
	|--------------------------------------------------------------------------
	| componentWillMount
	|--------------------------------------------------------------------------
	*/
	componentWillMount(){
		if(this.props.state.user.uuid == '') this.props.history.replace('/');
		this.props.getReward(this.props.state.user.uuid);
	}

	/* 
	|--------------------------------------------------------------------------
	| componentDidMount
	|--------------------------------------------------------------------------
	*/
	componentDidMount(){
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

	renderCoupon(){
		let coupon = this.props.state ? this.props.state.survey.coupon : '';

		switch(coupon){
			case 'unauthorised':
				return langs.coupon_error;
			break;

			case -1:
				return '000000';
			break;	

			default:
				return coupon;	
		}
	}

    /* 
	|--------------------------------------------------------------------------
	| render - render the main view
	|--------------------------------------------------------------------------
	*/
	render(){  
		
		const slideCSS =  classNames('slide thankyou', {in:this.state.animate});
		const loading = classNames('spinner',{show: this.state.loading});

		return ( 
			<section className={slideCSS}>
	        		<div className="inner">
                        <h1>{langs.thank}</h1>
						<p>{langs.thankyou}</p>
						<p className="coupon">{this.renderCoupon()}</p>
                        <p>&nbsp;</p>
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

export default connect(mapStateToProps, { getReward })(Thankyou);

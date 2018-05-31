import React, { Component } from 'react';
import classNames from 'classnames';
import { Link, browserHistory } from 'react-router';
import ReactPlayer from 'react-player';

import { connect } from 'react-redux';
import { reactLocalStorage } from "reactjs-localstorage";

import Config from '../surveyConfig';
import langs from '../localization';
import Checkbox from './checkbox';

class TermCondition extends Component {

    /* 
	|--------------------------------------------------------------------------
	| constructor
	|--------------------------------------------------------------------------
	*/
	constructor() {
		super();
		this.state = {
			termCondition: false,
			loading: false,
		}
	}

    /* 
	|--------------------------------------------------------------------------
	| componentWillMount
	|--------------------------------------------------------------------------
	*/
	componentWillMount() {
		if (this.props.state.user.uuid == '') this.props.history.replace('/');
		document.body.scrollTop = document.documentElement.scrollTop = 0;

		setTimeout(() => {
			this.setState({ animate: true });
		}, 300);

	}

	/* 
|--------------------------------------------------------------------------
| handleForm - Redirect on start servey page
|--------------------------------------------------------------------------
*/
	handleForm(e) {
		e.preventDefault();
		if (this.state.termCondition == false) {
			alert("Please select terms & Condition.");
			return false;
		}
		this.setState({ loading: true });
		setTimeout(() => {
			this.props.history.replace('/questions');
		}, 1000);
	}

	/* 
	|--------------------------------------------------------------------------
	| goBack - Go back on language selection page
	|--------------------------------------------------------------------------
	*/
	goBack() {
		this.setState({ loading: true });
		setTimeout(() => {
			this.props.history.replace('/');
		}, 1000);
	}



	/* 
	|--------------------------------------------------------------------------
	| handleCheckbox - handles switch buttons
	|--------------------------------------------------------------------------
	*/
	handleCheckbox(e) {
		console.log(e);
		if (e.state.checked) {
			this.setState({ termCondition: true });
		} else {
			this.setState({ termCondition: false });
		}
	}

	/* 
	|--------------------------------------------------------------------------
	| showBackButton - show back button
	|--------------------------------------------------------------------------
	*/

	renderBackButton(){
		if(Config.defaultBrand == "TwistedTea"){
			return ""
		}else{
			return <button onClick={this.goBack.bind(this)} className="btn back">{langs.back}</button>
		}
	}


    /* 
	|--------------------------------------------------------------------------
	| render - render the main view
	|--------------------------------------------------------------------------
	*/
	render() {
		const loading = classNames('preloader', { show: this.state.loading });
		const slideCSS = classNames('slide', { in: this.state.animate });
		const submitBtn = classNames('btn saveEmail', { show: !this.state.loading });
		let selected = (this.state.termCondition == true) ? true : false;
		return (
			<section className={slideCSS}>
				<div className="inner">
					{ this.renderBackButton }
					<h1>{ langs.terms_condition_heading}</h1>
					<div className="terms-condition-section" contentEditable='true' dangerouslySetInnerHTML={{ __html: langs.terms_condition }}></div>
					<form onSubmit={this.handleForm.bind(this)}>
						<label>&nbsp;</label>
						<Checkbox id="terms-condition-input" value="1" selected={selected} question={langs.terms_condition_label} label={langs.terms_condition_label} handleCheckbox={this.handleCheckbox.bind(this)} />
						<button type="submit" className={submitBtn} >{langs.button_name}</button>
						<div className={loading}>
							<div className="spinner" >
								<div className="bounce1"></div>
								<div className="bounce2"></div>
								<div className="bounce3"></div>
							</div>
						</div>
					</form>
				</div>

			</section>
		)
	}
}

function mapStateToProps(state) {
	return {
		state
	}
}

export default connect(mapStateToProps, null)(TermCondition);

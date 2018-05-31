import React, { Component } from 'react';
import classNames from 'classnames';
import { Link, browserHistory } from 'react-router';
import ReactPlayer from 'react-player';

import { connect } from 'react-redux';
import { getUser, getEmail } from '../actions/users';
import { saveSurvey, getSurvey } from '../actions/survey';
import Checkbox from './checkbox';
import langs from '../localization';

class Video extends Component {

	/* 
	|--------------------------------------------------------------------------
	| constructor
	|--------------------------------------------------------------------------
	*/
	constructor() {
		super();
		this.state = {
			animate: false,
			loading: false,
			answers: {}
		}
	}

	/* 
	|--------------------------------------------------------------------------
	| componentWillReceiveProps
	|--------------------------------------------------------------------------
	*/
	componentWillReceiveProps(next) {
		this.setState({ answers: next.state.survey.answers });
	}

	/* 
	|--------------------------------------------------------------------------
	| componentWillMount
	|--------------------------------------------------------------------------
	*/
	componentWillMount() {
		if (this.props.state.user.uuid == '') this.props.history.replace('/');
		this.props.getSurvey();
	}

	/* 
	|--------------------------------------------------------------------------
	| componentDidMount
	|--------------------------------------------------------------------------
	*/
	componentDidMount() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

	/* 
	|--------------------------------------------------------------------------
	| handleForm - handle the posting of the form
	|--------------------------------------------------------------------------
	*/
	handleForm(e) {
		e.preventDefault();
		if (this.state.answers.q12 == -1) {
			this.notValid(); return;
		}

		this.setState({ loading: true });
		this.props.saveSurvey(this.state.answers, this.props.state.user.uuid);
		this.handleNextStep();
	}

	/* 
	|--------------------------------------------------------------------------
	| notValid - alert user if no option is selected
	|--------------------------------------------------------------------------
	*/
	notValid() {
		alert('Please select an option');
	}

	/* 
	|--------------------------------------------------------------------------
	| handleNextStep - decides which route the user chooses.
	|--------------------------------------------------------------------------
	*/
	handleNextStep() {
		if (this.state.answers.q12 == langs.questions.q12.values[0]) {
			setTimeout(() => {
				this.props.history.replace('/record');
			}, 1000);
		} else {
			setTimeout(() => {
				this.props.history.replace('/thankyou');
			}, 1000);
		}
	}

	/* 
	|--------------------------------------------------------------------------
	| renderSelect - renders the dropdown selectors
	|--------------------------------------------------------------------------
	*/
	renderSelect(q) {
		return langs.questions[q].values.map((value, i) => {
			let selected = this.props.state.survey.answers[q] == value ? true : false;
			return (
				<option selected={selected} >{value}</option>
			)
		})
	}

	/* 
	|--------------------------------------------------------------------------
	| handleSelect - handles the dropdown selectors
	|--------------------------------------------------------------------------
	*/
	handleSelect(e) {

		let answers = this.props.state.survey.answers;
		answers = { ...answers, q12: e.currentTarget.value }

		this.setState({ answers });
	}

	/* 
	|--------------------------------------------------------------------------
	| goBack - navigate back 
	|--------------------------------------------------------------------------
	*/
	goBack() {
		this.props.history.replace('/');
	}

	/* 
	|--------------------------------------------------------------------------
	| render - render main view
	|--------------------------------------------------------------------------
	*/
	render() {
		const slideCSS = classNames('slide', { in: this.state.animate });
		const loading = classNames('preloader', { show: this.state.loading });
		const submitBtn = classNames('btn saveEmail', { show: !this.state.loading });

		return (
			<section className={slideCSS}>
				<div className="inner">

					<button onClick={this.goBack.bind(this)} className="btn back">{ langs.back}</button>

					<form onSubmit={this.handleForm.bind(this)}>
						<div dangerouslySetInnerHTML={{ __html: langs.labels.q12 }}>							
						</div>
						<div className="select-style">
							<select name="q12" onChange={this.handleSelect.bind(this)}>
								<option value="-1"></option>
								{this.renderSelect('q12')}
							</select>
						</div>

						<button type="submit" className={submitBtn} >{langs.button_name}</button>
						<div className={loading}>
							<div className="spinner" >
								<div className="bounce1"></div>
								<div className="bounce2"></div>
								<div className="bounce3"></div>
							</div>
						</div>
						<hr />

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

export default connect(mapStateToProps, { saveSurvey, getSurvey })(Video);

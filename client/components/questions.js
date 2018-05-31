import React, { Component } from 'react';
import classNames from 'classnames';
import { Link, browserHistory } from 'react-router';
import ReactPlayer from 'react-player';

import { connect } from 'react-redux';
import { getUser, getEmail } from '../actions/users';
import { saveSurvey, getSurvey } from '../actions/survey';
import Checkbox from './checkbox';
import Radio from './radio';
import langs from '../localization';
import Config from '../surveyConfig';

class Questions extends Component {

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
			answers: {},
			multiples: {
				q5: [],
				q6: [],
				q11: []
			}
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
		document.body.scrollTop = document.documentElement.scrollTop = 0;

		this.props.getUser('');
		this.props.getSurvey();

		setTimeout(() => {
			this.setState({ animate: true });
		}, 300);
	}

	/* 
	|--------------------------------------------------------------------------
	| handleForm - handles the posting of the form
	|--------------------------------------------------------------------------
	*/
	handleForm(e) {
		e.preventDefault();
		this.setState({ loading: true });

		this.props.saveSurvey(this.state.answers, this.props.state.user.uuid);

		setTimeout(() => {
			this.props.history.replace('/video');
		}, 1000);
	}

	/* 
	|--------------------------------------------------------------------------
	| handleSelect - handles the drop down selectors
	|--------------------------------------------------------------------------
	*/
	handleSelect(e) {
		let state = this.state;
		state.answers[e.currentTarget.name] = e.currentTarget.value;
		this.setState(state, () => {
			//console.log(this.state);
		});
	}

	/* 
	|--------------------------------------------------------------------------
	| handleCheckbox - handles switch buttons
	|--------------------------------------------------------------------------
	*/
	handleCheckbox(e) {
		if (e.state.checked) {
			let state = this.state;
			state.multiples[e.state.question].push(e.state.label);
			state.answers[e.state.question] = state.multiples[e.state.question];
			this.setState(state);
		} else {
			let state = this.state;
			let index = state.multiples[e.state.question].indexOf(e.state.label);
			state.multiples[e.state.question].splice(index, 1);
			state.answers[e.state.question] = state.multiples[e.state.question];
			this.setState(state);
		}
	}

	/* 
	|--------------------------------------------------------------------------
	| handleRadio - handles radio buttons
	|--------------------------------------------------------------------------
	*/
	handleRadio(e) {
		let state = this.state;
		state.answers[e.state.name] = e.state.label;
		this.setState(state, () => {
			//console.log(this.state);
		});
	}

	/* 
	|--------------------------------------------------------------------------
	| renderSelect - renders the drop down selectors
	|--------------------------------------------------------------------------
	*/
	renderSelect(q) {
		return langs.questions[q].values.map(value => {
			let selected = this.props.state.survey.answers[q] == value ? true : false;
			return (
				<option selected={selected} >{value}</option>
			)
		})
	}

	/* 
	|--------------------------------------------------------------------------
	| renderSwitch - renders the switch buttons
	|--------------------------------------------------------------------------
	*/
	renderSwitch(q) {
		return langs.questions[q].values.map((value, i) => {
			let selected = false;
			if (this.props.state.survey.answers[q]) {
				selected = this.props.state.survey.answers[q].indexOf(value) != -1 ? true : false;
			}
			return (
				<Checkbox id={q + '_' + i} value="1" selected={selected} question={q} label={value} handleCheckbox={this.handleCheckbox.bind(this)} />
			)
		})
	}

	/* 
	|--------------------------------------------------------------------------
	| renderRadio - renders the radio buttons
	|--------------------------------------------------------------------------
	*/
	renderRadio(q) {
		return langs.questions[q].values.map((value, i) => {
			let selected = this.props.state.survey.answers[q] == value ? true : false;
			return (
				<Radio value="1" name={q} id={q + '_' + i} label={value} selected={selected} handleCheckbox={this.handleRadio.bind(this)} />
			)
		})
	}

	/* 
	|--------------------------------------------------------------------------
	| renderDefaultSurvey - render default survey
	|--------------------------------------------------------------------------
	*/
	renderDefaultSurvey() {
		return (
			<div>
				<label dangerouslySetInnerHTML={{ __html: langs.labels.q1 }} ></label>
				<div className="select-style">
					<select name="q1" onChange={this.handleSelect.bind(this)}>
						<option></option>
						{this.renderSelect('q1')}
					</select>
				</div>

				<hr />

				<label dangerouslySetInnerHTML={{ __html: langs.labels.q2 }}></label>
				<div className="select-style">
					<select name="q2" onChange={this.handleSelect.bind(this)}>
						<option></option>
						{this.renderSelect('q2')}
					</select>
				</div>

				<hr />
				<label dangerouslySetInnerHTML={{ __html: langs.labels.q3 }}></label>
				<div className="select-style">
					<select name="q3" onChange={this.handleSelect.bind(this)}>
						<option></option>
						{this.renderSelect('q3')}
					</select>
				</div>

				<hr />

				<label dangerouslySetInnerHTML={{ __html: langs.labels.q4 }}></label>
				<div className="select-style">
					<select name="q4" onChange={this.handleSelect.bind(this)}>
						<option></option>
						{this.renderSelect('q4')}
					</select>
				</div>

				<hr />

				<label dangerouslySetInnerHTML={{ __html: langs.labels.q5 }}></label>
				{this.renderSwitch('q5')}

				<hr />

				<label dangerouslySetInnerHTML={{ __html: langs.labels.q6 }}></label>
				{this.renderSwitch('q6')}


				<hr />

				<label dangerouslySetInnerHTML={{ __html: langs.labels.q7 }}></label>
				<label className="subLabel">{langs.questions.q7a.title}</label>
				{this.renderRadio('q7a')}

				<label className="subLabel">{langs.questions.q7b.title}</label>
				{this.renderRadio('q7b')}

				<label className="subLabel">{langs.questions.q7c.title}</label>
				{this.renderRadio('q7c')}

				<label className="subLabel">{langs.questions.q7d.title}</label>
				{this.renderRadio('q7d')}

				<label className="subLabel">{langs.questions.q7e.title}</label>
				{this.renderRadio('q7e')}

				<label className="subLabel">{langs.questions.q7f.title}</label>
				{this.renderRadio('q7f')}


				<hr />

				<label dangerouslySetInnerHTML={{ __html: langs.labels.q8 }}></label>
				<div className="select-style">
					<select name="q8" onChange={this.handleSelect.bind(this)}>
						<option></option>
						{this.renderSelect('q8')}
					</select>
				</div>

				<hr />

				<label dangerouslySetInnerHTML={{ __html: langs.labels.q9 }}></label>
				<div className="select-style">
					<select name="q9" onChange={this.handleSelect.bind(this)}>
						<option></option>
						{this.renderSelect('q9')}
					</select>
				</div>

				<hr />

				<label dangerouslySetInnerHTML={{ __html: langs.labels.q10 }}></label>
				<div className="select-style">
					<select name="q10" onChange={this.handleSelect.bind(this)}>
						<option></option>
						{this.renderSelect('q10')}
					</select>
				</div>

				<hr />

				<label dangerouslySetInnerHTML={{ __html: langs.labels.q11 }}></label>
				{this.renderSwitch('q11')}
			</div>
		);
	}

	/* 
	|--------------------------------------------------------------------------
	| renderTwistedTeaSurvey - render default survey
	|--------------------------------------------------------------------------
	*/
	renderTwistedTeaSurvey() {
		return (
			<div>
				<label dangerouslySetInnerHTML={{ __html: langs.labels.q1 }} ></label>
				<div className="select-style">
					<select name="q1" onChange={this.handleSelect.bind(this)}>
						<option></option>
						{this.renderSelect('q1')}
					</select>
				</div>

				<hr />

				<label dangerouslySetInnerHTML={{ __html: langs.labels.q2 }}></label>
				<div className="select-style">
					<select name="q2" onChange={this.handleSelect.bind(this)}>
						<option></option>
						{this.renderSelect('q2')}
					</select>
				</div>

				<hr />
				<label dangerouslySetInnerHTML={{ __html: langs.labels.q3 }}></label>
				<div className="select-style">
					<select name="q3" onChange={this.handleSelect.bind(this)}>
						<option></option>
						{this.renderSelect('q3')}
					</select>
				</div>

				<hr />

				<label dangerouslySetInnerHTML={{ __html: langs.labels.q4 }}></label>
				<div className="select-style">
					<select name="q4" onChange={this.handleSelect.bind(this)}>
						<option></option>
						{this.renderSelect('q4')}
					</select>
				</div>

				<hr />

				<label dangerouslySetInnerHTML={{ __html: langs.labels.q5 }}></label>
				{this.renderSwitch('q5')}

				<hr />

				<label dangerouslySetInnerHTML={{ __html: langs.labels.q6 }}></label>
				{this.renderSwitch('q6')}


				<hr />

				<label dangerouslySetInnerHTML={{ __html: langs.labels.q7 }}></label>
				<label className="subLabel">{langs.questions.q7a.title}</label>
				{this.renderRadio('q7a')}

				<label className="subLabel">{langs.questions.q7b.title}</label>
				{this.renderRadio('q7b')}

				<label className="subLabel">{langs.questions.q7c.title}</label>
				{this.renderRadio('q7c')}

				<label className="subLabel">{langs.questions.q7d.title}</label>
				{this.renderRadio('q7d')}

				<label className="subLabel">{langs.questions.q7e.title}</label>
				{this.renderRadio('q7e')}

				<label className="subLabel">{langs.questions.q7f.title}</label>
				{this.renderRadio('q7f')}


				<hr />

				<label dangerouslySetInnerHTML={{ __html: langs.labels.q8 }}></label>
				<div className="select-style">
					<select name="q8" onChange={this.handleSelect.bind(this)}>
						<option></option>
						{this.renderSelect('q8')}
					</select>
				</div>

				<hr />

				<label dangerouslySetInnerHTML={{ __html: langs.labels.q9 }}></label>
				<div className="select-style">
					<select name="q9" onChange={this.handleSelect.bind(this)}>
						<option></option>
						{this.renderSelect('q9')}
					</select>
				</div>

				<hr />

				<label dangerouslySetInnerHTML={{ __html: langs.labels.q10 }}></label>
				<div className="select-style">
					<select name="q10" onChange={this.handleSelect.bind(this)}>
						<option></option>
						{this.renderSelect('q10')}
					</select>
				</div>

				<hr />

				<label dangerouslySetInnerHTML={{ __html: langs.labels.q11 }}></label>
				{this.renderSwitch('q11')}
			</div>
		);
	}

	/* 
	|--------------------------------------------------------------------------
	| render - renders the main view
	|--------------------------------------------------------------------------
	*/
	render() {

		const slideCSS = classNames('slide', { in: this.state.animate });
		const loading = classNames('preloader', { show: this.state.loading });
		const submitBtn = classNames('btn saveEmail', { show: !this.state.loading });
		return (

			<section className={slideCSS}>
				<div className="inner">

					
					<form onSubmit={this.handleForm.bind(this)}>

						{ (Config.defaultBrand == "TwistedTea") ? this.renderTwistedTeaSurvey() : this.renderDefaultSurvey()  }

						<label>&nbsp;</label>

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

export default connect(mapStateToProps, { getUser, getEmail, saveSurvey, getSurvey })(Questions);
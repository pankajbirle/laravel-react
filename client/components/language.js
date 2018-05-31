import React, { Component } from 'react';
import classNames from 'classnames';
import { Link, browserHistory } from 'react-router';
import ReactPlayer from 'react-player';

import { connect } from 'react-redux';
import { reactLocalStorage } from "reactjs-localstorage";
import Flag from 'react-world-flags'

import Config from '../surveyConfig';
import langs from '../localization';
import config from '../surveyConfig';

class Language extends Component {

    /* 
	|--------------------------------------------------------------------------
	| constructor
	|--------------------------------------------------------------------------
	*/
	constructor() {
		super();
		this.state = {
			defaultLanguage: "en",
			defaultShortCode: "gb",
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

		let currentLanguage = reactLocalStorage.get("defaultLanguage");
		if (typeof currentLanguage != 'undefined') {
			this.setState({ defaultLanguage: currentLanguage });
		}


	}


	/* 
	|--------------------------------------------------------------------------
	| handleForm - After selecting the language, redirect on terms & condition
	|--------------------------------------------------------------------------
	*/
	handleForm(e) {
		e.preventDefault();
		this.setState({ loading: true });
		setTimeout(() => {
			this.props.history.replace('/termCondition');
		}, 1000);
	}

	/* 
	|--------------------------------------------------------------------------
	| changeLanguage - After changing the language set this to in localstorage
	|--------------------------------------------------------------------------
	*/
	changeLanguage(e) {
		reactLocalStorage.set("defaultLanguage", e.currentTarget.value);
		window.location.reload();
	}


	/* 
	|--------------------------------------------------------------------------
	| renderSelect - renders the drop down selectors
	|--------------------------------------------------------------------------
	*/
	renderSelect() {
		if (config.defaultBrand == "TwistedTea") {
			return (
				<option value="en" selected="true" >English</option>
			)
		} else {
			return config.languages.map(val => {
				let selected = this.state.defaultLanguage == val.value ? true : false;
				return (
					<option value={val.value} selected={selected} >{val.name}</option>
				)
			}
			)
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
		let slectStyle = {
			width: "87%",
			display: "inline-block",
			verticalAlign: "top",
			marginRight: "10px"
		}
		console.log("short code", this.state.defaultShortCode);
		return (
			<section className={slideCSS}>
				<div className="inner">
					<div contentEditable='true' dangerouslySetInnerHTML={{ __html: langs.intro }}></div>
					<form onSubmit={this.handleForm.bind(this)}>
						<div>
							<label dangerouslySetInnerHTML={{ __html: langs.labels.choose_language }} ></label>
							<div className="select-style" style={slectStyle}>
								<select name="q2" onChange={this.changeLanguage.bind(this)}>
									{this.renderSelect()}
								</select>
							</div>
							<Flag code={this.state.defaultShortCode} width="60" height="60" />
						</div>
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

export default connect(mapStateToProps, null)(Language);

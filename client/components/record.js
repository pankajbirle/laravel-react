import React, { Component } from 'react';
import classNames from 'classnames';
import {Link, browserHistory } from 'react-router';
import ReactPlayer from 'react-player';

import {connect} from 'react-redux';
import axios from 'axios';
import langs from '../localization';

class Record extends Component {  

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
            fileQueued: false,
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
	}

    /* 
	|--------------------------------------------------------------------------
	| componentDidMount
	|--------------------------------------------------------------------------
	*/
    componentDidMount(){
    	document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    /* 
	|--------------------------------------------------------------------------
	| handleForm - handles the form posting
	|--------------------------------------------------------------------------
	*/
	handleForm(e){
		e.preventDefault();
        this.setState({loading:true});
        this.fileUpload();
	}
    
    /* 
	|--------------------------------------------------------------------------
	| handleNextStep 
	|--------------------------------------------------------------------------
	*/
	handleNextStep(){
	
	}

    /* 
	|--------------------------------------------------------------------------
	| fileAdded - handles the file selection
	|--------------------------------------------------------------------------
	*/
    fileAdded(){
        this.setState({fileQueued: true});
    }

    /* 
	|--------------------------------------------------------------------------
	| fileUpload - handles the file uploading
	|--------------------------------------------------------------------------
	*/
    fileUpload(){
        let data = new FormData(),
            file = this.refs.file;

          data.append('uuid', this.props.state.user.uuid);
          data.append('file', file.files[0]);

          var config = {
            headers: { 'content-type': 'multipart/form-data' },
            onUploadProgress: function(progressEvent) {
              var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
            }
          }; 

          axios.post('/api/survey/uploadvideo', data, config)
          .then(res => {
             this.props.history.replace('/thankyou');
           });
    }

    /* 
	|--------------------------------------------------------------------------
	| goBack - navigate back
	|--------------------------------------------------------------------------
	*/
    goBack(){
        this.props.history.replace('/video');
    }


    /* 
	|--------------------------------------------------------------------------
	| render - render the main view
	|--------------------------------------------------------------------------
	*/
	render(){  

		const slideCSS =  classNames('slide', {in:this.state.animate});
		const loading = classNames('preloader',{show: this.state.loading});
		const submitBtn = classNames('btn saveEmail', {show: !this.state.loading});
        const recordBtn = classNames('btn recordBtn', {show: !this.state.fileQueued});
        const uploadBtn = classNames('btn uploadBtn', {show: this.state.fileQueued});
        const recordIntro = classNames('recordIntro',{show: !this.state.fileQueued});

		return ( 
			<section className={slideCSS}>
	        		<div className="inner">

                        <button onClick={this.goBack.bind(this)} className="btn back">{langs.back}</button>

							<form onSubmit={this.handleForm.bind(this)}>
                                <label><span>Q13</span></label>
                               <div className={recordIntro} dangerouslySetInnerHTML={{ __html: langs.labels.q13 }}>
                                 </div>
                                <p className={recordBtn}>
                                    <label htmlFor="file-upload" >
                                        <button type="button" className="btn">{langs.record_video}</button>
                                    </label>
                                    <input type="file" ref="file" onChange={this.fileAdded.bind(this)} id="file-upload" className="btn" accept="video/*;capture=camcorder" />
                                </p>

                                <p className={uploadBtn}>
                                    <h3>{langs.video_uploaded_success}</h3>    
                                    {langs.re_record_video_message}
                                    
                                    <label className="rerecord" htmlFor="file-upload" >{langs.re_record_video}</label>
                                    
                                    <button className={submitBtn} onClick={this.handleForm.bind(this)}>Finish Survey</button>
                                   <div className={loading}>
											<div className="spinner" >
												<div className="bounce1"></div>
												<div className="bounce2"></div>
												<div className="bounce3"></div>
											</div>
										</div>
                                </p>

                                    <hr/>
							</form>

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

export default connect(mapStateToProps, {  })(Record);

import React, { Component } from 'react';
import classNames from 'classnames';
import {Link, browserHistory } from 'react-router';
import ReactPlayer from 'react-player';

class MenuContent extends Component {  

	constructor(){
		super();
		this.state = {
			selected: 0,
			animate:false
		}
	}

	handleClick(){
		this.setState({ selected: this.state.selected == 0 ? this.props.id : 0 });
	}

	toggleVideo(video){
		this.refs[video].player.player.webkitEnterFullScreen();
		this.refs[video].player.play();
	}

	componentDidMount() {
		let timeout = 1500;
		
		setTimeout(()=>{
			this.setState({
				animate:true
			});
		},timeout);
	}


	renderContent(){

		return (
			<div onClick={()=>{ this.toggleVideo('video_'+this.props.id) }}>
				<ReactPlayer url={this.props.file} fileConfig={{ attributes: { poster: this.props.poster  }}} width="100%" height="auto" controls={false} className="videoplayer" ref={'video_'+this.props.id} />
				<label>{this.props.title}</label>
			</div>
		)
	}

	render(){  

		const contentCSS = classNames('content',{open: this.state.selected > 0});
		const animteCSS = classNames({in: this.state.animate});

		return ( 
			<li key={this.props.title} className={animteCSS} >
				{this.renderContent()}
			</li>
		) 
	}
}


export default MenuContent

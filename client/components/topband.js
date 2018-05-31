import React, { Component } from 'react';
import classNames from 'classnames';

class Topband extends Component { 

	constructor(){
		super(); 
		this.state = {
			animate:false
		} 
	} 

	componentDidMount() {
		setTimeout(()=>{
			this.setState({
				animate: true
			});
		},500);
	}
 
	render(){  

		const animate = classNames('logo',{in: this.state.animate});

		return ( 
			<div className="topband">
				<img src="images/logo-small.png" className={animate} ref="logo" />
			</div>
		) 
	}

}

export default Topband;

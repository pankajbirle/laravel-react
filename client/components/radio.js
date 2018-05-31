import React, { Component } from 'react';
import classNames from 'classnames';

class Radio extends Component {  

	constructor(){
		super();
        this.state = {
            checked:false
        }
	}

    componentWillMount(){

    }

    componentWillReceiveProps(next){
         this.setState({
            label: next.label,
            checked: next.selected,
            name: next.name,
            group: next.group
        });
    }

    handleChange(e){
        let currentState = this.state.checked;
	    this.setState({checked: !this.state.checked},()=>{
            this.props.handleCheckbox(this);
        });
	}

	render(){    
    
		return ( 
			<fieldset className="radioButton" > 
               <input type="radio" checked={this.state.checked} onChange={this.handleChange.bind(this)} id={this.props.id} name={this.props.name} value={this.props.label} />
               <label htmlFor={this.props.id}><span></span>  {this.props.label}</label>
               
            </fieldset>
		) 
	} 
}

export default Radio;

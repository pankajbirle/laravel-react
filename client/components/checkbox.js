import React, { Component } from 'react';
import classNames from 'classnames';

class Checkbox extends Component {  

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
            question: next.question,
            label: next.label,
            checked: next.selected
        });
    }

    handleChange(e){
	    this.setState({checked: !this.state.checked},()=>{
            this.props.handleCheckbox(this);
        });
	}

	render(){  
		return ( 
			<fieldset className="switch" > 
                <div className="onoffswitch">
                    <input type="checkbox" onChange={this.handleChange.bind(this)} checked={this.state.checked}  name="permissions" className="onoffswitch-checkbox" id={this.props.id} value={this.props.label} />
                    <label className="onoffswitch-label" htmlFor={this.props.id}></label>
                </div>
                <label htmlFor={this.props.id}>
                    {this.props.label}
                </label>
            </fieldset>
		) 
	} 
}

export default Checkbox;

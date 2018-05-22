import React, { Component } from 'react';
import './global.css';
import './newsletter.css';

class CreatePost extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    email: '',
	    password: '',
	  };
	  this.handleChange = this.handleInputChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}

	render (){
		return(
			<div className = "body-inner-container">
				test
			</div>
		)
	}
}

export default Admin;

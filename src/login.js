import React, { Component } from 'react';
import './global.css';
import './newsletter.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let csrftoken = this.props.csrftoken;
    fetch(window.location.origin + "/api/auth/user_auth", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "X-CSRFToken": csrftoken
      },
      credentials: 'same-origin',
      body: JSON.stringify({
        username: this.state.email,
        password: this.state.password,
      })
    })
    .then(response => {
      if(response.status === 200){
        window.location = "/admin/session"
      }
      else if(response.status >= 400){
        console.log("error");
      }
    })
    .catch(function(error) {
      console.log(error);
      return false
    });
  }

  render (){
    return(
      <div className = "body-inner-container">
        <div className = "admin-login-container">
          <div className = "admin-login-inner-container">
            <div className = "newsletter-form">
              <form onSubmit={this.handleSubmit}>
                <input type="text" className = "newsletter-form-field font-size-18 font-weight-100" placeholder="Email Address" name="email" onChange={this.handleChange} />
                <input type="password" className = "newsletter-form-field font-size-18 font-weight-100" placeholder="Password" name="password" onChange={this.handleChange} />
                <input type="submit" className = "newsletter-form-submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;

import React, { Component } from 'react';
import './newsletter.css';
import './global.css';

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}


class Newsletter extends Component {
  constructor(props) {
      super(props);
      this.state = {
        first: '',
        last: '',
        email: '',
        error: '',
        success: ''
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
    let first = this.state.first;
    let last = this.state.last;
    let email = this.state.email;
    let error = this.state.error;
    let success = this.state.success;
    let csrftoken = readCookie("csrftoken");
    const setToBlank = ""; 
    event.preventDefault();
    if (first != "" && last != "" && email != ""){
      fetch(window.location.origin + "/api/user/user", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "X-CSRFToken": csrftoken
        },
        credentials: 'same-origin',
        body: JSON.stringify({
          first: this.state.first,
          last: this.state.last,
          email: this.state.email
        })
      })
      .then(response => response.json())
      .then(response => {
        let responseContent = JSON.parse(response);
        if (responseContent.status == "error"){
          this.setState({
            error: responseContent.message,
            success: setToBlank
          })
        }
        else if (responseContent.status == "okay"){
          this.setState({
            success: responseContent.message,
            error: setToBlank
          })
        }
      });
    }
    else {
      let error_arr = [];
      error = "Oops! You forgot to fill out your ";
      // form submit doesnt have data
      if (first == "")
        error_arr.push("first name");
      if (last == "")
        error_arr.push("last name");
      if (email == "")
        error_arr.push("email address");
      for (let x = 0; x < error_arr.length; x++){
        if (x == error_arr.length - 1){
          error += error_arr[x];
          error += "."
        }
        else if (x == error_arr.length - 2){
          error += error_arr[x];
          error += ", and "
        }
        else {
          error += error_arr[x];
          error += ", ";
        }
      }
      this.setState({
        error : error,
        success : setToBlank
      })
    }
  }

  render(){
    return (
    <div className = "newsletter-container">
      <div className = "newsletter-inner-container">
        <div className = "newsletter-content">
          <div className = "newsletter-title font-size-24 font-weight-400">
            Join our Newsletter
          </div>
          <div className = "newsletter-sub-title font-size-24 font-weight-100">
            Stay Up to Date with the Latest.
          </div>
          <div className = "newsletter-message newsletter-error font-size-18" style= {{display: (this.state.error != "") ? 'block' : null}}>
            {this.state.error} 
          </div>
          <div className = "newsletter-message font-color-green font-size-18" style= {{display: (this.state.success != "") ? 'block' : null}}>
            {this.state.success} 
          </div>
          <div className = "newsletter-form">
            <form onSubmit={this.handleSubmit}>
              <input type="text" className = "newsletter-form-field font-size-18 font-weight-100" placeholder="First Name" name="first" onChange={this.handleChange} />
              <input type="text" className = "newsletter-form-field font-size-18 font-weight-100" placeholder="Last Name" name="last" onChange={this.handleChange} />
              <input type="text" className = "newsletter-form-field font-size-18 font-weight-100" placeholder="Email Address" name="email" onChange={this.handleChange} />
              <input type="submit" className = "newsletter-form-submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Newsletter;

import React, { Component } from 'react';
import './newsletter.css';
import './global.css';

class Newsletter extends Component {
  constructor(props) {
      super(props);
      this.state = {
        first: '',
        last: '',
        email: ''
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

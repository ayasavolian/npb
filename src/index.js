import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import App from './app';
import AdminLogin from './adminlogin';
import Header from './header';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    // this.requireAuth = this.requireAuth.bind(this);
  }

  // requireAuth(nextState, replace, next) {
  //   let csrftoken = this.props.csrftoken;
  //   fetch(window.location.origin + "/api/auth/user_auth", {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       "X-CSRFToken": csrftoken
  //     },
  //     credentials: 'same-origin',
  //   })
  //   .then(response => response.json())
  //   .then(response => {
  //     if(response.status === 200){
        
  //     }
  //     else if(response.status >= 400){
  //     }
  //   })
  //   .catch(function(error) {
  //     return false
  //   });
  // }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={App} />
          </Switch>
          <Switch>
            <Route exact path="/post/:id" component={App} />
          </Switch>
          <Switch>
            <Route exact path="/login" component={AdminLogin} />
          </Switch>
        </div>
      </Router>
    )
  }
}

registerServiceWorker();
ReactDOM.render(<Home />, document.getElementById('root'));
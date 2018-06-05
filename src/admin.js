import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import AdminHeader from './adminheader';
import CreatePost from './createpost';
import AdminApp from './adminapp';
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

class Admin extends Component {
  render() {
    return (
      <Router>
        <div>
          <AdminHeader />
          <AdminApp />
        </div>
      </Router>
    )
  }
}

registerServiceWorker();
ReactDOM.render(<Admin />, document.getElementById('root'));
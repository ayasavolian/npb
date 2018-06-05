import React, { Component } from 'react';
import './global.css';
import './newsletter.css';
import Login from './login';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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

class AdminLogin extends Component {
  render() {
    let csrftoken = readCookie("csrftoken");
    return (
      <div>
        <Login csrftoken = {csrftoken} />
      </div>
    );
  }
}

export default AdminLogin;

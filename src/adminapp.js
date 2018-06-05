import React, { Component } from 'react';
import './app.css';
import ReactDOM from 'react-dom';
import './global.css';
import CreatePost from './createpost';

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

class AdminApp extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	componentDidMount(){
		var csrftoken = readCookie('csrftoken');
    fetch(window.location.origin + "/api/user/user", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "X-CSRFToken": csrftoken
      },
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(response => {
    	console.log(response);  
    })
    .catch(function(error) {
      console.log(error);
      return false
    });
    // .then(response => {
    //   if(response.status === 200){
    //     console.log("success");
    //     console.log(response);
    //   }
    //   else if(response.status >= 400){
    //     console.log("error");
    //   }
    // })
    // .catch(function(error) {
    //   console.log(error);
    //   return false
    // });
	}

  render() {
    return (
      <div>
        <CreatePost />
      </div>
    );
  }
}

export default AdminApp;
